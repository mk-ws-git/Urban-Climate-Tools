// ── THEME TOGGLE ──
// (Initial theme is applied via inline script in <head> to avoid FOUC)
;(function () {
    var THEME_KEY = 'uct-theme';

    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.querySelector('.theme-toggle');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    });
})();


// ── SAVES / BOOKMARKS ──
;(function () {
    var SAVES_KEY = 'uct-saves';

    function getSaves() {
        try { return JSON.parse(localStorage.getItem(SAVES_KEY)) || []; }
        catch (e) { return []; }
    }

    function setSaves(saves) {
        localStorage.setItem(SAVES_KEY, JSON.stringify(saves));
    }

    function isSaved(id) {
        return getSaves().some(function (s) { return s.id === id; });
    }

    function toggleSave(id, title, url, type) {
        var saves = getSaves();
        var idx = saves.findIndex(function (s) { return s.id === id; });
        if (idx > -1) {
            saves.splice(idx, 1);
        } else {
            saves.push({ id: id, title: title, url: url, type: type || 'Resource' });
        }
        setSaves(saves);
        updateSavesBadge();
        return idx === -1; // true = now saved
    }

    function updateSavesBadge() {
        var count = getSaves().length;
        var badge = document.querySelector('.saves-badge');
        if (!badge) return;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }

    function updateSaveButtons() {
        document.querySelectorAll('[data-save-btn]').forEach(function (btn) {
            var card = btn.closest('[data-save-id]');
            if (!card) return;
            var id = card.getAttribute('data-save-id');
            var saved = isSaved(id);
            btn.classList.toggle('save-btn--saved', saved);
            btn.setAttribute('aria-label', saved ? 'Remove from saved' : 'Save');
        });
    }

    function populateDrawer() {
        var list = document.querySelector('.saves-drawer__list');
        if (!list) return;
        var saves = getSaves();
        if (saves.length === 0) {
            list.innerHTML = '<p class="saves-drawer__empty">No saved items yet.<br>Bookmark tools and case studies to see them here.</p>';
            return;
        }
        list.innerHTML = saves.map(function (s) {
            return '<div class="saves-drawer__item">' +
                '<div class="saves-drawer__item-info">' +
                '<span class="saves-drawer__item-type">' + escapeHtml(s.type) + '</span>' +
                '<a href="' + escapeHtml(s.url) + '" class="saves-drawer__item-title">' + escapeHtml(s.title) + '</a>' +
                '</div>' +
                '<button class="saves-drawer__item-remove" data-remove-id="' + escapeHtml(s.id) + '" aria-label="Remove">' +
                '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
                '</button>' +
                '</div>';
        }).join('');

        list.querySelectorAll('[data-remove-id]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                var id = this.getAttribute('data-remove-id');
                var saves = getSaves().filter(function (s) { return s.id !== id; });
                setSaves(saves);
                updateSavesBadge();
                updateSaveButtons();
                populateDrawer();
            });
        });
    }

    function openDrawer() {
        populateDrawer();
        var drawer = document.getElementById('saves-drawer');
        var overlay = document.querySelector('.saves-overlay');
        if (drawer) drawer.classList.add('saves-drawer--open');
        if (overlay) overlay.classList.add('saves-overlay--visible');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        var drawer = document.getElementById('saves-drawer');
        var overlay = document.querySelector('.saves-overlay');
        if (drawer) drawer.classList.remove('saves-drawer--open');
        if (overlay) overlay.classList.remove('saves-overlay--visible');
        document.body.style.overflow = '';
    }

    // Minimal HTML escaping to avoid XSS when inserting user/stored data into DOM
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    document.addEventListener('DOMContentLoaded', function () {
        updateSavesBadge();
        updateSaveButtons();

        // Delegated save-button clicks
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-save-btn]');
            if (!btn) return;
            e.preventDefault();
            e.stopPropagation();
            var card = btn.closest('[data-save-id]');
            if (!card) return;
            var id    = card.getAttribute('data-save-id');
            var title = card.getAttribute('data-save-title');
            var url   = card.getAttribute('data-save-url');
            var type  = card.getAttribute('data-save-type') || 'Resource';
            var nowSaved = toggleSave(id, title, url, type);
            btn.classList.toggle('save-btn--saved', nowSaved);
            btn.setAttribute('aria-label', nowSaved ? 'Remove from saved' : 'Save');
        });

        // Saves drawer open/close
        var savesBtn   = document.querySelector('.saves-btn');
        var savesClose = document.querySelector('.saves-drawer__close');
        var savesOverlay = document.querySelector('.saves-overlay');
        if (savesBtn)    savesBtn.addEventListener('click', openDrawer);
        if (savesClose)  savesClose.addEventListener('click', closeDrawer);
        if (savesOverlay) savesOverlay.addEventListener('click', closeDrawer);

        // "My Saved Items" from user dropdown
        document.addEventListener('click', function (e) {
            if (e.target.closest('[data-action="open-saves"]')) openDrawer();
        });
    });

    window.UCT = window.UCT || {};
    window.UCT.saves = { getSaves: getSaves, toggleSave: toggleSave, isSaved: isSaved };
})();


// ── AUTH / USER PROFILE ──
;(function () {
    var USER_KEY = 'uct-user';

    function getUser() {
        try { return JSON.parse(localStorage.getItem(USER_KEY)); }
        catch (e) { return null; }
    }

    function setUser(user) {
        if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
        else localStorage.removeItem(USER_KEY);
    }

    function getInitials(name) {
        return name.trim().split(/\s+/).map(function (n) { return n[0]; }).join('').toUpperCase().slice(0, 2);
    }

    function updateAuthUI() {
        var user       = getUser();
        var authBtn    = document.querySelector('.nav__auth-btn');
        var userEl     = document.querySelector('.nav__user');
        var avatarEl   = document.querySelector('.nav__user-avatar');
        var nameEl     = document.querySelector('.user-dropdown__name');
        if (!authBtn || !userEl) return;
        if (user) {
            authBtn.style.display = 'none';
            userEl.style.display  = 'flex';
            if (avatarEl) avatarEl.textContent = getInitials(user.name);
            if (nameEl)   nameEl.textContent   = user.name;
        } else {
            authBtn.style.display = '';
            userEl.style.display  = 'none';
        }
    }

    function openModal() {
        var modal = document.getElementById('auth-modal');
        if (modal) modal.classList.add('auth-modal--open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        var modal = document.getElementById('auth-modal');
        if (modal) modal.classList.remove('auth-modal--open');
        document.body.style.overflow = '';
    }

    document.addEventListener('DOMContentLoaded', function () {
        updateAuthUI();

        var authBtn  = document.querySelector('.nav__auth-btn');
        var closeBtn = document.querySelector('.auth-modal__close');
        var overlay  = document.querySelector('.auth-modal__overlay');
        if (authBtn)  authBtn.addEventListener('click', openModal);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (overlay)  overlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeModal();
        });

        // Google sign-in placeholder — highlight the info note
        var googleBtn = document.querySelector('[data-action="google-signin"]');
        if (googleBtn) {
            googleBtn.addEventListener('click', function () {
                var note = document.querySelector('.auth-modal__note');
                if (note) {
                    note.style.background = 'var(--color-heat-bg)';
                    note.style.borderColor = 'var(--color-heat-border)';
                    setTimeout(function () {
                        note.style.background = '';
                        note.style.borderColor = '';
                    }, 2000);
                }
            });
        }

        // Guest / local sign-in
        var guestForm = document.getElementById('guest-form');
        if (guestForm) {
            guestForm.addEventListener('submit', function (e) {
                e.preventDefault();
                var input = document.getElementById('guest-name');
                var name = input ? input.value.trim() : '';
                if (!name) return;
                setUser({ name: name, type: 'guest' });
                updateAuthUI();
                closeModal();
            });
        }

        // User button dropdown toggle
        var userBtn  = document.querySelector('.nav__user-btn');
        var dropdown = document.querySelector('.user-dropdown');
        if (userBtn) {
            userBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                if (dropdown) dropdown.classList.toggle('user-dropdown--open');
            });
        }
        document.addEventListener('click', function () {
            if (dropdown) dropdown.classList.remove('user-dropdown--open');
        });

        // Sign out
        document.addEventListener('click', function (e) {
            if (e.target.closest('[data-action="signout"]')) {
                setUser(null);
                updateAuthUI();
                if (dropdown) dropdown.classList.remove('user-dropdown--open');
            }
        });
    });
})();


// ── GENERAL UI ──
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Open external links in new tab
    document.querySelectorAll('a[href^="http"]').forEach(function (link) {
        if (!link.hostname.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

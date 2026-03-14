(function () {
  'use strict';

  var PHONE = '+91 900 500 9500';
  var PHONE_CLEAN = '919005009500';
  var APP_LINK = 'https://linktr.ee/ServallCRE';
  var LOGO_URL = 'https://servall-storage.s3.ap-south-1.amazonaws.com/assets/servall-logo.png';

  var NAV_LINKS = [
    { label: 'About Us', href: 'about-us.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'AMC', href: 'amc.html' },
    { label: 'Own a Franchise', href: 'own-franchise.html' },
    { label: 'Performax', href: 'performax.html' },
    { label: 'Gallery', href: 'gallery.html' },
    { label: 'Contact Us', href: 'contact-us.html' },
  ];

  var SVG_ICONS = {
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    smartphone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
    arrowUpRight: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>',
    handshake: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>'
  };

  function isTransparentPage() {
    return document.body.hasAttribute('data-nav-transparent');
  }

  function getCurrentPage() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return page.toLowerCase();
  }

  function injectCSS() {
    var style = document.createElement('style');
    style.id = 'servall-unified-navbar-css';
    style.textContent = `
      .sn-navbar * { box-sizing: border-box; margin: 0; padding: 0; }
      .sn-navbar {
        position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
        transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 14px 0;
      }
      .sn-navbar.sn-solid { background: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
      .sn-navbar.sn-transparent { background: transparent; }
      .sn-navbar.sn-scrolled {
        background: #ffffff !important; padding: 8px 0;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05);
      }
      .sn-container {
        max-width: 1440px; margin: 0 auto; padding: 0 24px;
        display: flex; align-items: center; gap: 16px; width: 100%;
      }
      .sn-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
      .sn-logo img {
        height: 38px; width: auto; transition: filter 0.3s ease;
      }
      .sn-transparent .sn-logo img { filter: brightness(0) invert(1); }
      .sn-solid .sn-logo img,
      .sn-scrolled .sn-logo img {
        filter: brightness(0) saturate(100%) invert(13%) sepia(98%) saturate(7426%) hue-rotate(357deg) brightness(95%) contrast(114%);
      }

      .sn-nav-links { display: none; align-items: center; gap: 2px; flex: 1; justify-content: center; }
      .sn-nav-links a {
        font-size: 12.5px; font-weight: 500; text-decoration: none; padding: 5px 8px;
        border-radius: 6px; transition: color 0.2s ease, background 0.2s ease;
        white-space: nowrap; position: relative;
      }
      .sn-transparent .sn-nav-links a { color: #ffffff; }
      .sn-transparent .sn-nav-links a:hover { color: #fca5a5; background: rgba(255,255,255,0.1); }
      .sn-solid .sn-nav-links a,
      .sn-scrolled .sn-nav-links a { color: #475569; }
      .sn-solid .sn-nav-links a:hover,
      .sn-scrolled .sn-nav-links a:hover { color: #dc2626; background: #fef2f2; }
      .sn-nav-links a.sn-active {
        color: #dc2626 !important; font-weight: 600;
      }
      .sn-nav-links a.sn-active::after {
        content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
        width: 16px; height: 2px; background: #dc2626; border-radius: 2px;
      }

      .sn-actions { display: none; align-items: center; gap: 8px; flex-shrink: 0; }

      .sn-phone-btn {
        display: inline-flex; align-items: center; gap: 5px;
        font-size: 12px; font-weight: 500; text-decoration: none;
        background: none; border: none; cursor: pointer;
        transition: color 0.2s ease; font-family: inherit; white-space: nowrap;
      }
      .sn-transparent .sn-phone-btn { color: #ffffff; }
      .sn-transparent .sn-phone-btn:hover { color: #fca5a5; }
      .sn-solid .sn-phone-btn, .sn-scrolled .sn-phone-btn { color: #334155; }
      .sn-solid .sn-phone-btn:hover, .sn-scrolled .sn-phone-btn:hover { color: #dc2626; }
      .sn-phone-btn .sn-icon { display: flex; }

      .sn-app-btn {
        display: inline-flex; align-items: center; justify-content: center;
        width: 34px; height: 34px; border-radius: 8px;
        text-decoration: none; transition: all 0.2s ease;
        border: 1px solid rgba(100,116,139,0.25); background: none;
      }
      .sn-transparent .sn-app-btn { color: #ffffff; border-color: rgba(255,255,255,0.2); }
      .sn-transparent .sn-app-btn:hover { background: rgba(255,255,255,0.1); }
      .sn-solid .sn-app-btn, .sn-scrolled .sn-app-btn { color: #475569; border-color: #e2e8f0; }
      .sn-solid .sn-app-btn:hover, .sn-scrolled .sn-app-btn:hover { background: #f1f5f9; }
      .sn-app-btn .sn-icon { color: #ef4444; display: flex; }

      .sn-cta-group { display: flex; align-items: center; gap: 0; flex-shrink: 0; }

      .sn-book-btn {
        display: inline-flex !important; align-items: center !important; gap: 5px !important;
        height: 34px !important; padding: 0 12px !important; font-size: 11px !important; font-weight: 700 !important;
        border-radius: 8px 0 0 8px !important; text-decoration: none !important; transition: all 0.2s ease !important;
        background: #dc2626 !important; color: #ffffff !important; border: none !important; cursor: pointer !important;
        text-transform: uppercase !important; letter-spacing: 0.4px !important;
        font-family: inherit !important; white-space: nowrap !important;
      }
      .sn-book-btn:hover { background: #b91c1c !important; }
      .sn-book-btn .sn-icon { color: #ffffff !important; display: flex !important; }

      .sn-cta-divider { width: 1px; height: 34px; background: rgba(255,255,255,0.3); flex-shrink: 0; }

      .sn-franchise-btn {
        display: inline-flex !important; align-items: center !important; gap: 5px !important;
        height: 34px !important; padding: 0 12px !important; font-size: 11px !important; font-weight: 700 !important;
        border-radius: 0 8px 8px 0 !important; text-decoration: none !important; transition: all 0.2s ease !important;
        background: #dc2626 !important; color: #ffffff !important; border: none !important; cursor: pointer !important;
        text-transform: uppercase !important; letter-spacing: 0.4px !important;
        font-family: inherit !important; white-space: nowrap !important;
      }
      .sn-franchise-btn:hover { background: #b91c1c !important; }
      .sn-franchise-btn .sn-icon { display: flex !important; color: #ffffff !important; }

      .sn-mobile-right {
        display: flex; align-items: center; gap: 8px; margin-left: auto; flex-shrink: 0;
      }
      .sn-mob-header-book {
        display: inline-flex !important; align-items: center !important; gap: 6px !important;
        height: 38px !important; padding: 0 14px !important; font-size: 12px !important; font-weight: 700 !important;
        border-radius: 8px !important; text-decoration: none !important; transition: all 0.2s ease !important;
        background: #dc2626 !important; color: #ffffff !important; border: none !important; cursor: pointer !important;
        text-transform: uppercase !important; letter-spacing: 0.4px !important;
        font-family: inherit !important; white-space: nowrap !important;
      }
      .sn-mob-header-book:hover { background: #b91c1c !important; }
      .sn-mob-header-book .sn-icon { display: flex !important; color: #ffffff !important; }
      .sn-mobile-toggle {
        display: flex; align-items: center; justify-content: center;
        width: 40px; height: 40px; border: none; background: none;
        cursor: pointer; border-radius: 8px; transition: all 0.2s ease;
      }
      .sn-transparent .sn-mobile-toggle { color: #ffffff; }
      .sn-transparent .sn-mobile-toggle:hover { background: rgba(255,255,255,0.1); }
      .sn-solid .sn-mobile-toggle, .sn-scrolled .sn-mobile-toggle { color: #1e293b; }
      .sn-solid .sn-mobile-toggle:hover, .sn-scrolled .sn-mobile-toggle:hover { background: #f1f5f9; }

      .sn-mobile-menu {
        display: none; position: absolute; top: 100%; left: 0; right: 0;
        background: #ffffff; box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        padding: 16px 20px 20px; border-top: 1px solid #f1f5f9;
        flex-direction: column; gap: 2px;
      }
      .sn-mobile-menu.sn-open { display: flex; }
      .sn-mobile-menu a, .sn-mobile-menu button.sn-mob-link {
        font-size: 15px; font-weight: 500; color: #334155; padding: 12px 16px;
        text-decoration: none; border-radius: 10px; transition: all 0.2s ease;
        display: flex; align-items: center; gap: 10px; width: 100%;
        text-align: left; background: none; border: none; cursor: pointer;
        font-family: inherit;
      }
      .sn-mobile-menu a:hover, .sn-mobile-menu button.sn-mob-link:hover {
        background: #fef2f2; color: #dc2626;
      }
      .sn-mobile-menu a.sn-active { color: #dc2626; font-weight: 600; background: #fef2f2; }
      .sn-mobile-menu .sn-mob-divider {
        height: 1px; background: #f1f5f9; margin: 6px 0;
      }
      .sn-mobile-menu .sn-mob-app-link {
        font-weight: 700; color: #0f172a; justify-content: space-between;
      }
      .sn-mobile-menu .sn-mob-app-link .sn-icon { color: #94a3b8; }
      .sn-mobile-menu .sn-mob-app-link:hover .sn-icon { color: #dc2626; }
      .sn-mobile-menu .sn-mob-phone-btn {
        font-weight: 500; color: #0f172a;
      }
      .sn-mobile-menu .sn-mob-phone-btn .sn-icon { color: #dc2626; }
      .sn-mob-cta-row {
        display: flex !important; gap: 8px !important; margin-top: 8px !important;
      }
      .sn-mob-book-btn {
        display: flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important;
        flex: 1 !important; height: 48px !important; padding: 0 12px !important;
        font-size: 13px !important; font-weight: 700 !important; border-radius: 12px !important;
        background: #dc2626 !important; color: #ffffff !important; border: none !important; cursor: pointer !important;
        text-decoration: none !important; text-transform: uppercase !important; letter-spacing: 0.4px !important;
        transition: background 0.2s ease !important; font-family: inherit !important;
        box-shadow: 0 2px 8px rgba(220,38,38,0.25) !important;
      }
      .sn-mob-book-btn:hover { background: #b91c1c !important; }
      .sn-mob-franchise-btn {
        display: flex !important; align-items: center !important; justify-content: center !important; gap: 8px !important;
        flex: 1 !important; height: 48px !important; padding: 0 12px !important;
        font-size: 13px !important; font-weight: 700 !important; border-radius: 12px !important;
        background: transparent !important; color: #dc2626 !important; border: 2px solid #dc2626 !important; cursor: pointer !important;
        text-decoration: none !important; text-transform: uppercase !important; letter-spacing: 0.4px !important;
        transition: all 0.2s ease !important; font-family: inherit !important;
      }
      .sn-mob-franchise-btn:hover { background: #fef2f2 !important; }

      @media (min-width: 1200px) {
        .sn-nav-links { display: flex; }
        .sn-actions { display: flex; }
        .sn-mobile-right { display: none !important; }
      }

      .sn-navbar-spacer {
        height: 66px; width: 100%;
      }
      .sn-transparent ~ .sn-navbar-spacer { display: none; }

      @media (max-width: 1199px) {
        .sn-navbar-spacer { height: 68px; }
      }
    `;
    document.head.appendChild(style);
  }

  function buildNavbarHTML() {
    var currentPage = getCurrentPage();
    var transparent = isTransparentPage();
    var modeClass = transparent ? 'sn-transparent' : 'sn-solid';

    var linksHTML = NAV_LINKS.map(function (link) {
      var activeClass = '';
      var linkPage = link.href.toLowerCase().split('#')[0];
      if (currentPage === linkPage) activeClass = ' sn-active';
      return '<a href="' + link.href + '" class="sn-nav-link' + activeClass + '">' + link.label + '</a>';
    }).join('');

    var mobileLinksHTML = NAV_LINKS.map(function (link) {
      var activeClass = '';
      var linkPage = link.href.toLowerCase().split('#')[0];
      if (currentPage === linkPage) activeClass = ' sn-active';
      return '<a href="' + link.href + '" class="sn-mob-nav-link' + activeClass + '">' + link.label + '</a>';
    }).join('');

    return '<nav id="servall-unified-navbar" class="sn-navbar ' + modeClass + '">' +
      '<div class="sn-container">' +
        '<a href="index.html" class="sn-logo">' +
          '<img src="' + LOGO_URL + '" alt="Servall" />' +
        '</a>' +
        '<div class="sn-nav-links">' + linksHTML + '</div>' +
        '<div class="sn-actions">' +
          '<a href="tel:' + PHONE + '" class="sn-phone-btn" title="' + PHONE + '">' +
            '<span class="sn-icon">' + SVG_ICONS.phone + '</span>' + PHONE +
          '</a>' +
          '<a href="' + APP_LINK + '" target="_blank" class="sn-app-btn" title="Download App">' +
            '<span class="sn-icon">' + SVG_ICONS.smartphone + '</span>' +
          '</a>' +
          '<div class="sn-cta-group">' +
            '<a href="services.html" class="sn-book-btn">' +
              '<span class="sn-icon">' + SVG_ICONS.calendar + '</span>Book Service' +
            '</a>' +
            '<span class="sn-cta-divider"></span>' +
            '<a href="franchise-landing.html" class="sn-franchise-btn">' +
              '<span class="sn-icon">' + SVG_ICONS.handshake + '</span>Franchise' +
            '</a>' +
          '</div>' +
        '</div>' +
        '<div class="sn-mobile-right">' +
          '<a href="services.html" class="sn-mob-header-book">' +
            '<span class="sn-icon">' + SVG_ICONS.calendar + '</span>Book Service' +
          '</a>' +
          '<button class="sn-mobile-toggle" id="sn-mobile-toggle" aria-label="Toggle menu">' +
            SVG_ICONS.menu +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="sn-mobile-menu" id="sn-mobile-menu">' +
        mobileLinksHTML +
        '<div class="sn-mob-divider"></div>' +
        '<a href="' + APP_LINK + '" target="_blank" class="sn-mob-app-link">' +
          '<span style="display:flex;align-items:center;gap:8px;"><span class="sn-icon" style="color:#dc2626">' + SVG_ICONS.smartphone + '</span>Download App</span>' +
          '<span class="sn-icon">' + SVG_ICONS.arrowUpRight + '</span>' +
        '</a>' +
        '<a href="tel:' + PHONE + '" class="sn-mob-phone-btn">' +
          '<span class="sn-icon">' + SVG_ICONS.phone + '</span>' + PHONE +
        '</a>' +
        '<div class="sn-mob-cta-row">' +
          '<a href="franchise-landing.html" class="sn-mob-franchise-btn">' +
            SVG_ICONS.handshake + ' Franchise' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</nav>';
  }

  function initNavbar() {
    injectCSS();

    var oldHeader = document.getElementById('pageHeaderWrapper');
    if (oldHeader) oldHeader.remove();

    var existingNavbar = document.getElementById('navbar');
    if (existingNavbar) existingNavbar.remove();

    var placeholder = document.getElementById('servall-navbar');
    var navbarHTML = buildNavbarHTML();

    if (placeholder) {
      placeholder.outerHTML = navbarHTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }

    if (!isTransparentPage()) {
      var spacer = document.createElement('div');
      spacer.className = 'sn-navbar-spacer';
      var nav = document.getElementById('servall-unified-navbar');
      if (nav && nav.nextSibling) {
        nav.parentNode.insertBefore(spacer, nav.nextSibling);
      }
    }

    initScrollBehavior();
    initMobileMenu();
    overrideMarginContainer();
    fetchAndApplyNavbarContact();
  }

  function fetchAndApplyNavbarContact() {
    var apiBase = typeof window !== 'undefined' && window.SERVALL_API_BASE;
    if (!apiBase) return;
    fetch(apiBase + '/misc/website-config')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var phone = data && data.data && data.data.config && data.data.config.contact && data.data.config.contact.phone;
        if (!phone || typeof phone !== 'string' || !phone.trim()) return;
        phone = phone.trim();
        var nav = document.getElementById('servall-unified-navbar');
        if (!nav) return;
        var links = nav.querySelectorAll('a[href^="tel:"]');
        for (var i = 0; i < links.length; i++) {
          var link = links[i];
          link.href = 'tel:' + phone;
          link.title = phone;
          link.innerHTML = '<span class="sn-icon">' + SVG_ICONS.phone + '</span>' + phone;
        }
      })
      .catch(function () {});
  }

  function overrideMarginContainer() {
    var mc = document.querySelector('.margin-container');
    if (mc) {
      mc.style.marginTop = '0px';
    }
  }

  function initScrollBehavior() {
    var navbar = document.getElementById('servall-unified-navbar');
    if (!navbar) return;

    var handleScroll = function () {
      if (window.scrollY > 10) {
        navbar.classList.add('sn-scrolled');
      } else {
        navbar.classList.remove('sn-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  function initMobileMenu() {
    var toggle = document.getElementById('sn-mobile-toggle');
    var menu = document.getElementById('sn-mobile-menu');
    if (!toggle || !menu) return;

    var isOpen = false;

    toggle.addEventListener('click', function () {
      isOpen = !isOpen;
      if (isOpen) {
        menu.classList.add('sn-open');
        toggle.innerHTML = SVG_ICONS.x;
      } else {
        menu.classList.remove('sn-open');
        toggle.innerHTML = SVG_ICONS.menu;
      }
    });

    var links = menu.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        isOpen = false;
        menu.classList.remove('sn-open');
        toggle.innerHTML = SVG_ICONS.menu;
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
})();

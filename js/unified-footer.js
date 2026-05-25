(function () {
  'use strict';

  var LOGO_URL = 'https://servall-storage.s3.ap-south-1.amazonaws.com/assets/servall-logo.png';
  var PHONE = '+91 900 500 9500';
  var EMAIL = 'info@servall.in';
  var APP_LINK = 'https://linktr.ee/ServallCRE';

  var SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/servall.india/',
    instagram: 'https://www.instagram.com/servall.india/',
    youtube: 'https://www.youtube.com/channel/UCL8s6_8nQ7G2jAyiYxMLm4g',
    linkedin: 'https://www.linkedin.com/company/servall-automotive/'
  };

  var SVG = {
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  };

  function injectFooterCSS() {
    if (document.getElementById('servall-unified-footer-css')) return;
    var style = document.createElement('style');
    style.id = 'servall-unified-footer-css';
    style.textContent = `
      .sf-footer { box-sizing: border-box; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
      .sf-footer *, .sf-footer *::before, .sf-footer *::after { box-sizing: border-box; margin: 0; padding: 0; }
      .sf-footer {
        background: #0f172a; color: #ffffff; padding: 64px 0 0; border-top: 1px solid #1e293b;
      }
      .sf-container { max-width: 1320px; margin: 0 auto; padding: 0 20px; }
      .sf-grid {
        display: grid; grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px;
      }
      @media (min-width: 768px) { .sf-grid { grid-template-columns: 1fr 1fr; } }
      @media (min-width: 1024px) { .sf-grid { grid-template-columns: 1.4fr 1fr 1fr 1.2fr; } }

      .sf-brand { display: flex; flex-direction: column; gap: 20px; }
      .sf-brand-logo { display: inline-flex; }
      .sf-brand-logo img { height: 44px; width: auto; filter: brightness(0) invert(1); }
      .sf-brand-desc { font-size: 13px; color: #94a3b8; line-height: 1.7; }
      .sf-social { display: flex; gap: 10px; }
      .sf-social a {
        width: 38px; height: 38px; border-radius: 10px; background: rgba(255,255,255,0.05);
        display: flex; align-items: center; justify-content: center; color: #94a3b8;
        transition: all 0.2s ease; text-decoration: none;
      }
      .sf-social a:hover { background: #dc2626; color: #ffffff; }

      .sf-col-title {
        font-size: 15px; font-weight: 700; color: #ffffff; margin-bottom: 20px;
        letter-spacing: 0.3px;
      }
      .sf-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
      .sf-links li a {
        font-size: 13px; color: #94a3b8; text-decoration: none; transition: color 0.2s ease;
        display: inline-block;
      }
      .sf-links li a:hover { color: #f87171; }

      .sf-contact-items { display: flex; flex-direction: column; gap: 16px; }
      .sf-contact-row { display: flex; align-items: flex-start; gap: 12px; }
      .sf-contact-icon {
        width: 32px; height: 32px; border-radius: 8px; background: rgba(220,38,38,0.12);
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        color: #ef4444; margin-top: 2px;
      }
      .sf-contact-text { font-size: 13px; color: #94a3b8; line-height: 1.5; }
      .sf-contact-text a {
        color: #ffffff; text-decoration: none; font-weight: 500; transition: color 0.2s ease;
      }
      .sf-contact-text a:hover { color: #f87171; }
      .sf-contact-text .sf-label { font-size: 11px; color: #64748b; margin-top: 2px; }

      .sf-bottom {
        border-top: 1px solid #1e293b; padding: 24px 0;
        display: flex; flex-direction: column; align-items: center; gap: 12px;
        text-align: center;
      }
      @media (min-width: 768px) {
        .sf-bottom { flex-direction: row; justify-content: space-between; text-align: left; }
      }
      .sf-copyright { font-size: 12px; color: #64748b; }
      .sf-copyright strong { color: #94a3b8; font-weight: 600; }
      .sf-bottom-links { display: flex; gap: 20px; }
      .sf-bottom-links a {
        font-size: 12px; color: #64748b; text-decoration: none; transition: color 0.2s ease;
      }
      .sf-bottom-links a:hover { color: #ffffff; }
    `;
    document.head.appendChild(style);
  }

  function buildFooterHTML() {
    var year = new Date().getFullYear();
    return '<footer class="sf-footer">' +
      '<div class="sf-container">' +
        '<div class="sf-grid">' +

          '<div class="sf-brand">' +
            '<a href="index.html" class="sf-brand-logo"><img src="' + LOGO_URL + '" alt="Servall" /></a>' +
            '<p class="sf-brand-desc">Servall is a Multi Brand 2 Wheeler Workshop Chain providing its services &amp; Unique User Experience through its Franchise Network.</p>' +
            '<div class="sf-social">' +
              '<a href="' + SOCIAL_LINKS.facebook + '" target="_blank" aria-label="Facebook">' + SVG.facebook + '</a>' +
              '<a href="' + SOCIAL_LINKS.instagram + '" target="_blank" aria-label="Instagram">' + SVG.instagram + '</a>' +
              '<a href="' + SOCIAL_LINKS.youtube + '" target="_blank" aria-label="YouTube">' + SVG.youtube + '</a>' +
              '<a href="' + SOCIAL_LINKS.linkedin + '" target="_blank" aria-label="LinkedIn">' + SVG.linkedin + '</a>' +
            '</div>' +
          '</div>' +

          '<div>' +
            '<h4 class="sf-col-title">Our Services</h4>' +
            '<ul class="sf-links">' +
              '<li><a href="periodic-services.html">General &amp; Periodic Services</a></li>' +
              '<li><a href="repair-service.html">Accidental Repair</a></li>' +
              '<li><a href="engine-repair.html">Engine Repairs</a></li>' +
              '<li><a href="ev-maintenence.html">EV Maintenance</a></li>' +
              '<li><a href="insurance-service.html">Insurance Services</a></li>' +
              '<li><a href="spare-parts.html">Spare Parts</a></li>' +
              '<li><a href="customized-service.html">Customization</a></li>' +
              '<li><a href="smart-accessories.html">Accessories</a></li>' +
            '</ul>' +
          '</div>' +

          '<div>' +
            '<h4 class="sf-col-title">Quick Links</h4>' +
            '<ul class="sf-links">' +
              '<li><a href="about-us.html">About Us</a></li>' +
              '<li><a href="services.html">Services</a></li>' +
              '<li><a href="amc.html">AMC Plans</a></li>' +
              '<li><a href="own-franchise.html">Own a Franchise</a></li>' +
              '<li><a href="performax.html">Performax</a></li>' +
              '<li><a href="gallery.html">Gallery</a></li>' +
              '<li><a href="contact-us.html">Contact Us</a></li>' +
              '<li><a href="' + APP_LINK + '" target="_blank">Download App</a></li>' +
            '</ul>' +
          '</div>' +

          '<div>' +
            '<h4 class="sf-col-title">Contact Us</h4>' +
            '<div class="sf-contact-items">' +
              '<div class="sf-contact-row">' +
                '<span class="sf-contact-icon">' + SVG.clock + '</span>' +
                '<div class="sf-contact-text"><a href="services.html">Book Service</a><p class="sf-label">Mon - Sat : 9:00 AM to 7:00 PM</p></div>' +
              '</div>' +
              '<div class="sf-contact-row">' +
                '<span class="sf-contact-icon">' + SVG.phone + '</span>' +
                '<div class="sf-contact-text"><a class="sf-dynamic-phone" href="tel:' + PHONE + '">' + PHONE + '</a><p class="sf-label">Enquiry Line</p></div>' +
              '</div>' +
              '<div class="sf-contact-row">' +
                '<span class="sf-contact-icon">' + SVG.mail + '</span>' +
                '<div class="sf-contact-text"><a class="sf-dynamic-email" href="mailto:' + EMAIL + '">' + EMAIL + '</a></div>' +
              '</div>' +
            '</div>' +
          '</div>' +

        '</div>' +
        '<div class="sf-bottom">' +
          '<p class="sf-copyright">&copy; ' + year + ' All Rights Reserved by <strong>Servall Automotive Private Limited</strong></p>' +
          '<div class="sf-bottom-links">' +
            '<a href="privacy-policy.html">Privacy Policy</a>' +
            '<a href="terms-conditions.html">Terms &amp; Conditions</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';
  }

  function initFooter() {
    injectFooterCSS();

    var oldFooter = document.querySelector('.footer-wrapper');
    if (oldFooter) oldFooter.remove();

    var tailwindFooter = document.querySelector('footer.bg-slate-900');
    if (tailwindFooter) tailwindFooter.remove();

    var copyrightScript = document.querySelector('footer + script');

    var placeholder = document.getElementById('servall-footer');
    var footerHTML = buildFooterHTML();

    if (placeholder) {
      placeholder.outerHTML = footerHTML;
    } else {
      var wrapper = document.getElementById('wrapper');
      if (wrapper) {
        wrapper.insertAdjacentHTML('beforeend', footerHTML);
      } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
      }
    }
    fetchAndApplyFooterContact();
  }

  function fetchAndApplyFooterContact() {
    var apiBase = typeof window !== 'undefined' && window.SERVALL_API_BASE;
    if (!apiBase) return;
    fetch(apiBase + '/misc/website-config')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var config = data && data.data && data.data.config && data.data.config.contact;
        if (!config) return;
        if (config.phone && typeof config.phone === 'string' && config.phone.trim()) {
          var phoneEl = document.querySelector('.sf-dynamic-phone');
          if (phoneEl) {
            phoneEl.href = 'tel:' + config.phone.trim();
            phoneEl.textContent = config.phone.trim();
          }
        }
        if (config.email && typeof config.email === 'string' && config.email.trim()) {
          var emailTrim = config.email.trim();
          document.querySelectorAll('.sf-dynamic-email').forEach(function (emailEl) {
            emailEl.href = 'mailto:' + emailTrim;
            emailEl.textContent = emailTrim;
          });
        }
      })
      .catch(function () {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
})();

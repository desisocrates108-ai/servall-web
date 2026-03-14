(function () {
  'use strict';

  // ============================================================
  // SERVALL API CONFIGURATION
  // Change this ONE line to switch between local and production.
  // ============================================================

  var ENV = 'local';
  // var ENV = 'production'; 

  var ENDPOINTS = {
    local:      'http://localhost:5000/api/v1',
    production: 'https://api.servall.in/api/v1'
  };

  window.SERVALL_API_BASE = ENDPOINTS[ENV] || ENDPOINTS.production;
})();

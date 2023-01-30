(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/app"],{

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");
/* harmony import */ var bootstrap_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ics */ "./node_modules/ics/index.js");
/* harmony import */ var ics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _disclaimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disclaimer */ "./resources/assets/scripts/disclaimer.js");
/* harmony import */ var _disclaimer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_disclaimer__WEBPACK_IMPORTED_MODULE_6__);
/**
 * External Dependencies
 */







$(document).ready(function () {
  aos__WEBPACK_IMPORTED_MODULE_3___default.a.init();
  var lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_4___default.a({
    threshold: 100
  }); // Get CSS variables

  var root = getComputedStyle(document.documentElement);
  var colorPrimary = root.getPropertyValue('--primary');
  var colorSecondary = root.getPropertyValue('--secondary');
  var xsBreakpoint = root.getPropertyValue('--breakpoint-xs').replace('px', '');
  var smBreakpoint = root.getPropertyValue('--breakpoint-sm').replace('px', '');
  var mdBreakpoint = root.getPropertyValue('--breakpoint-md').replace('px', '');
  var lgBreakpoint = root.getPropertyValue('--breakpoint-lg').replace('px', '');
  var xlBreakpoint = root.getPropertyValue('--breakpoint-xl').replace('px', ''); // Add class to body on alert dismissed

  $('.top-nav').on('closed.bs.alert', function () {
    $('body').addClass('top-nav-dismissed');
  }); // Add class to nav when user scrolls
  // Menu - change background color after scrolling.

  function stickyNav() {
    var scroll = $(window).scrollTop();
    var navbar = $('.navbar-default'); // animate showing the navbar on scroll on each page

    if (scroll > 20) {
      navbar.addClass('nav-scrolled');
    } else if (scroll < 20) {
      navbar.removeClass('nav-scrolled');
    }
  } //stickyNav();


  $(window).on("scroll", function () {
    stickyNav();
  }); // Scroll to open accordion
  // see example https://stackoverflow.com/questions/35992900/bootstrap-accordion-scroll-to-top-of-active-open-accordion-on-click#answer-35992958

  $('.accordion__collapse').on('shown.bs.collapse', function (e) {
    var header = $('.header').height();
    var $panel = $(this).closest('.accordion__item');
    $('html,body').animate({
      scrollTop: $panel.offset().top - header
    }, 500);
  }); // Pricing Monthly/Annual toggle

  var $toggle = $('#saving');
  var $toggleSaving = $('.toggle-saving');
  $toggle.on('click', function (e) {
    $toggleSaving.toggleClass('active');
  }); // Download calendar ICS file

  $('.add-to-calendar a').on('click', function (e) {
    e.preventDefault();

    var ics = __webpack_require__(/*! ics */ "./node_modules/ics/index.js"); // Get text from calendar listing


    var title = $(this).closest('tr').find('.event-title').text();
    var date = $(this).closest('tr').find('.event-date').text(); // Get date format and split to array

    var date_array = date.split('/');
    var date_day = date_array[0];
    var date_month = date_array[1];
    var date_year = date_array[2]; // Grab calendar data

    var event = {
      start: [date_year, date_month, date_day, 0, 0],
      end: [date_year, date_month, date_day, 0, 0],
      //duration: { hours: 0, minutes: 0 },
      title: title,
      status: 'CONFIRMED'
    }; // Build file with ICS calendar data

    ics.createEvent(event, function (error, value) {
      if (error) {
        alert('ICS file could not be downloaded.');
        console.log(error);
        return;
      } //console.log(value);
      // Download ICS file with calendar data


      window.open('data:text/calendar;charset=utf8,' + escape(value));
    });
  }); // Enable bootstrap select for all selects

  $('select').selectpicker();
});
$(function () {
  /**
   * initMap
   *
   * Renders a Google Map onto the selected jQuery element
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   jQuery $el The jQuery element.
   * @return  object The map instance.
   */
  function initMap($el) {
    var styles = [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#f5f5f5"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#ffffff"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#dadada"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e5e5"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [{
        "color": "#eeeeee"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#e5e4e3"
      }, {
        "saturation": -100
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }]; // Find marker elements within map.

    var $markers = $el.find('.marker'); // Create gerenic map.

    var mapArgs = {
      zoom: $el.data('zoom') || 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: styles
    };
    var map = new google.maps.Map($el[0], mapArgs); // Add markers.

    map.markers = [];
    $markers.each(function () {
      initMarker($(this), map);
    }); // Center map based on markers.

    centerMap(map); // Return map instance.

    return map;
  }
  /**
   * initMarker
   *
   * Creates a marker for the given jQuery element and map.
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   jQuery $el The jQuery element.
   * @param   object The map instance.
   * @return  object The marker instance.
   */


  function initMarker($marker, map) {
    // Get position from marker.
    var lat = $marker.data('lat');
    var lng = $marker.data('lng');
    var latLng = {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    };
    var markerIcon = $marker.data('icon'); // Create marker instance.

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: markerIcon
    }); // Append to reference for later use.

    map.markers.push(marker); // If marker contains HTML, add it to an infoWindow.

    if ($marker.html()) {
      // Create info window.
      var infowindow = new google.maps.InfoWindow({
        content: $marker.html()
      }); // Show info window when marker is clicked.

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    }
  }
  /**
   * centerMap
   *
   * Centers the map showing all markers in view.
   *
   * @date    22/10/19
   * @since   5.8.6
   *
   * @param   object The map instance.
   * @return  void
   */


  function centerMap(map) {
    // Create map boundaries from all map markers.
    var bounds = new google.maps.LatLngBounds();
    map.markers.forEach(function (marker) {
      bounds.extend({
        lat: marker.position.lat(),
        lng: marker.position.lng()
      });
    }); // Case: Single marker.

    if (map.markers.length == 1) {
      map.setCenter(bounds.getCenter()); // Case: Multiple markers.
    } else {
      map.fitBounds(bounds);
    }
  } // Render maps on page load.


  $(document).ready(function () {
    $('.acf-map').each(function () {
      var map = initMap($(this));
    });
  });
});
/**
 * Meet the team dropdowns
 */

$(function () {
  var SNAP_LG = 992;
  var SNAP_SM = 767;
  /**
   * Fixes the flex order so the people dropdown appears in the right place.
   */

  var fixFlexOrder = function fixFlexOrder() {
    var j = 0;
    $('.js-flex-reorder>.js-flex-panel').each(function (i, el) {
      var $panel = $(el);
      var $dropdown = $(el).next();
      var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      var divisor = windowWidth > SNAP_LG ? 3 : windowWidth < SNAP_SM ? 1 : 2;
      var rowOrder = Math.ceil((j + 1) / divisor);

      if ($panel.is(':visible')) {
        // Fix flex
        $panel.css('order', rowOrder).addClass('is-number-' + (j + 1));
        $dropdown.css('order', rowOrder + 1);
        j++;
      } else {
        // Reset everything else to zero
        $panel.css('order', 0);
        $dropdown.css('order', 0);
      }
    });
  };

  $('.people__nav li:first-child a[data-filter]').addClass('active');
  var teamFilterFirst = $('.people__nav li:first-child a[data-filter]').attr('data-filter');
  $('[data-teams]').hide();
  $("[data-teams*=\"".concat(teamFilterFirst, "\"]")).show();
  fixFlexOrder();
  $('a[data-filter]').on('click', function () {
    // Close any stray open person dropdowns
    $('section.people .collapse').collapse('hide'); // Hide everything

    $('[data-teams]').hide(); // Remove active class to link if it has one

    $('a[data-filter]').removeClass('active'); // Add active class to link

    $(this).addClass('active'); // Show according to filters

    var teamFilter = $(this).attr('data-filter');
    $("[data-teams*=\"".concat(teamFilter, "\"]")).show(); // Re-apply flex order fix

    fixFlexOrder();
  });
});
var el = $(".accordion-item");

if (el.length > 0) {
  var firstElId = $(el[0]).attr('id'); // question

  var firstElButton = $("#".concat(firstElId, "-question"));
  firstElButton.removeClass("collapsed");
  firstElButton.attr("aria-expanded", "true"); // answer

  var firstElAnswer = $("#".concat(firstElId, "-answer"));
  firstElAnswer.addClass("show");
  console.log();
  el.on('click', function () {
    // close all answers
    $('.collapse').collapse('hide');
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/scripts/disclaimer.js":
/*!************************************************!*\
  !*** ./resources/assets/scripts/disclaimer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  /*
   * Set cookie function for disclaimer acceptance
   */
  function setDisclaimerCookie(name, value, days) {
    var expires = '';

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }

    document.cookie = name + '=' + (value || '') + expires + '; path=/; samesite=strict;';
  }
  /*
   * Set cookie function for disclaimer country
   */


  function setCountryCodeCookie(name, value, days) {
    var expires = '';
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + (value || '') + expires + '; path=/; samesite=strict;';
  }
  /*
   * Set cookie function for user role types
   */


  function setUserTypeCookie(name, value, days) {
    var expires = '';
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + (value || '') + expires + '; path=/; samesite=strict;';
  }
  /*
   * Return the value of a specified cookie
   */


  function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }

    return '';
  }
  /*
   * Show country disclaimer text on select field change
   */


  var $country = $('.disclaimer-form #countries');
  $country.on('change', function () {
    var countryCodeValue = $('option:selected').val();
    var $countryContent = $('.country-content');
    var $allowedCountries = $('.allowed-countries');
    $(this).find('option:selected').each(function () {
      if (countryCodeValue) {
        // Show or hide country disclaimer text based on country selection.
        if ($countryContent.hasClass(countryCodeValue)) {
          $countryContent.not('.' + countryCodeValue).hide();
          $('.' + countryCodeValue).show();
        } else {
          $countryContent.not('.' + countryCodeValue).hide();
        } // Set accept button to decline if not in country allow list


        if (!$allowedCountries.hasClass(countryCodeValue)) {
          $('.modal-footer button[name="accept"]').hide();
          $('.modal-footer button[name="not-allowed"]').show();
        } else {
          $('.modal-footer button[name="not-allowed"]').hide();
          $('.modal-footer button[name="accept"]').show();
        }
      }
    });
  });
  /*
   * Disclaimer form validation
   */

  window.addEventListener('load', function () {
    // Get disclaimer form
    var disclaimerForm = document.getElementsByClassName('disclaimer-form'); // Loop over form and prevent submission

    var validation = Array.prototype.filter.call(disclaimerForm, function (form) {
      form.addEventListener('submit', function (event) {
        /*
         * Check if form submitted and set disclaimer cookies
         * based on accept or decline buttons
         */
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          $('.modal-footer p').show();
        } else if ($('button[name="accept"]').on('click') && form.checkValidity() === true) {
          setDisclaimerCookie('disclaimer', 'accepted', 1);
          setCountryCodeCookie('countryCode', $('#countries').val(), 1);
          setUserTypeCookie('userType', $('#user-types').val(), 1);
        } else if ($('button[name="decline"]').on('click') && form.checkValidity() === true) {
          setDisclaimerCookie('disclaimer', 'declined', 1);
          window.location = $('.deny-url').data('deny-page');
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  /*
   * Set disclaimer cookie to declined and redirect user
   * to disclaimer denied page if disclaimer declined,
   * or a country is selected that is not allowed.
   */

  var $declineButton = $('.disclaimer-form button[name="decline"]');
  var $notAllowedButton = $('.disclaimer-form button[name="not-allowed"]');
  $declineButton.on('click', function () {
    setDisclaimerCookie('disclaimer', 'declined', 1);
    window.location = $('.deny-url').data('deny-page');
  });
  $notAllowedButton.on('click', function () {
    if ($('.disclaimer-form')[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setDisclaimerCookie('disclaimer', 'declined', 1);
      window.location = $('.deny-url').data('deny-page');
    }

    $('.disclaimer-form').addClass('was-validated');
  });
  /*
   * Show disclaimer only if cookie is not set or is declined.
   * Add classes to <body> based on cookie values set.
   */

  var disclaimerCookie = getCookie('disclaimer');
  var countryCodeCookie = getCookie('countryCode');
  var countryClassName = 'disclaimer-country-' + countryCodeCookie;

  if (disclaimerCookie === '') {
    $('#disclaimer').modal('show');
    $('.disclaimer-overlay').removeClass('hide');
    $('body').removeClass('disclaimer-accepted disclaimer-declined ' + countryClassName);
  } else if (disclaimerCookie === 'accepted') {
    $('.disclaimer-overlay').addClass('hide');
    $('body').addClass('disclaimer-accepted ' + countryClassName).removeClass('disclaimer-declined');
  } else if (disclaimerCookie === 'declined') {
    $('#disclaimer').modal('show');
    $('body').addClass('disclaimer-declined').removeClass('disclaimer-accepted ' + countryClassName);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/styles/app.scss":
/*!******************************************!*\
  !*** ./resources/assets/styles/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/editor.scss":
/*!*********************************************!*\
  !*** ./resources/assets/styles/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.scss ./resources/assets/styles/editor.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/runner/work/wp_markup_2022/wp_markup_2022/web/app/themes/markup/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
__webpack_require__(/*! /home/runner/work/wp_markup_2022/wp_markup_2022/web/app/themes/markup/resources/assets/styles/app.scss */"./resources/assets/styles/app.scss");
module.exports = __webpack_require__(/*! /home/runner/work/wp_markup_2022/wp_markup_2022/web/app/themes/markup/resources/assets/styles/editor.scss */"./resources/assets/styles/editor.scss");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["jQuery"]; }());

/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map
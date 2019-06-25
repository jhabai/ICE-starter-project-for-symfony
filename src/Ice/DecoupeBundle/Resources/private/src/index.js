require("./app.scss");

import $ from '../../../../../../vendor/node_modules/jquery';


/* ===========================================================================
 Foundation
 =========================================================================== */


import Foundation from '../../../../../../vendor/node_modules/foundation-sites';

import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.core';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.util.keyboard';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.accordion';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.sticky';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.util.mediaQuery';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.offcanvas.js';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.responsiveMenu';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.util.triggers';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.util.box';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.util.nest';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.abide';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.util.motion';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.toggler';
import '../../../../../../vendor/node_modules/foundation-sites/js/foundation.drilldown';


// Require
$(document).foundation();

$(document).ready(function () {
    // This ONLY works when .addToJquery is called above!
    console.log('full ready');

    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
    });
    $('.js-off-canvas-overlay').click(function() {
        $('.hamburger').removeClass('is-active');
    });
});

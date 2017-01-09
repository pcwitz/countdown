'use strict';

var $ = require('jquery');
require('jquery-countdown');

/*http://hilios.github.io/jQuery.countdown/documentation.html
YYYY/MM/DD
MM/DD/YYYY
YYYY/MM/DD hh:mm:ss
MM/DD/YYYY hh:mm:ss*/

$('#countdown').countdown('2016/09/28 16:30:00', function(event) {
  $(this).html(event.strftime('<span class="countdown-section"><span class="countdown-amount">%-d</span> <span class="countdown-period">days</span></span> <span class="countdown-section"><span class="countdown-amount">%-H</span> <span class="countdown-period">hours</span></span> <span class="countdown-section"><span class="countdown-amount">%-M</span> <span class="countdown-period">minutes</span></span> <span class="countdown-section"><span class="countdown-amount">%-S</span> <span class="countdown-period">seconds</span></span>'));
});
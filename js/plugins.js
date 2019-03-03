// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

var elems = $(".news-article, .screen-wrap, .share");
var windowHeight = window.innerHeight;

// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
/* var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); */
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

if (isChrome || isSafari) {
  console.log("Chromes");
  $("#ctaModal .modal-dialog").addClass("modal-top-right");
} else if (isFirefox) {
  $("#ctaModal .modal-dialog").addClass("modal-top-left");
} else if (isEdge) {
  $("#ctaModal .modal-dialog").addClass("modal-bottom-center");
} else {
  console.log("Final else");
  $("#ctaModal .modal-dialog").addClass("");
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("scrollToTop").style.display = "none";
  }
  checkPositon(".to-zoom");
  checkPositon(".to-zoom1");
}
function checkPositon(element){
  var top_of_element = $(element).offset().top;
  var bottom_of_element = $(element).offset().top + $(element).outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
    // the element is visible, do something
    $(element).addClass("zoom-in-element");
  } else {
    // the element is not visible, do something else
    /* $(element).removeClass("zoom-in-element"); */
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



<<<<<<< HEAD
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalAsep = function ModalAsep() {
	_classCallCheck(this, ModalAsep);
};

//alert("kjasdhjdjkasd");

var a = new ModalAsep();
=======
'use strict';

var btnRadius = $('.cd-modal-bg').width() / 2,
    left = $('.cd-modal-bg').offset().left + btnRadius,
    top = $('.cd-modal-bg').offset().top + btnRadius - $(window).scrollTop(),
    scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());

function scaleValue(topValue, leftValue, radiusValue, windowW, windowH) {
	var maxDistHor = leftValue > windowW / 2 ? leftValue : windowW - leftValue,
	    maxDistVert = topValue > windowH / 2 ? topValue : windowH - topValue;
	return Math.ceil(Math.sqrt(Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2)) / radiusValue);
}
>>>>>>> 7fe04762755dfc648d769b3415372ae7bb25ae2d

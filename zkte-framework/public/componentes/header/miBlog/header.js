"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderMiBlog = (function () {
	function HeaderMiBlog() {
		_classCallCheck(this, HeaderMiBlog);

		this.estadoMenuMovil = false;
		$(".header-contenedor-Nombres i").on("click", this.mostrarMenuMovil);
	}

	//var headerMiBlog=new HeaderMiBlog()

	_createClass(HeaderMiBlog, [{
		key: "mostrarMenuMovil",
		value: function mostrarMenuMovil() {
			console.log(this.estadoMenuMovil);
			this.estadoMenuMovil = !this.estadoMenuMovil;
			if (this.estadoMenuMovil) {
				$(".header-contenedor-Menu").css("height", "8em");
			} else {
				$(".header-contenedor-Menu").css("height", "0px");
			}
		}
	}]);

	return HeaderMiBlog;
})();
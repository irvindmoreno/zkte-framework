"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderAsep = function HeaderAsep() {
	_classCallCheck(this, HeaderAsep);
};

var NavegacionAsep = (function () {
	function NavegacionAsep() {
		_classCallCheck(this, NavegacionAsep);

		this.estadoMenuMovil = false;
		$(".Boton-Movil i").on("click", this.mostrarMenuMovil);
	}

	_createClass(NavegacionAsep, [{
		key: "mostrarMenuMovil",
		value: function mostrarMenuMovil() {
			this.estadoMenuMovil = !this.estadoMenuMovil;
			if (this.estadoMenuMovil) {
				$(".Navegacion-Menu-Movil").css("height", "11em");
			} else {
				$(".Navegacion-Menu-Movil").css("height", "0px");
			}
		}
	}]);

	return NavegacionAsep;
})();

var TituloAsepA = function TituloAsepA() {
	_classCallCheck(this, TituloAsepA);
};

var TituloAsep = function TituloAsep() {
	_classCallCheck(this, TituloAsep);
};

var InputSearchAsep = function InputSearchAsep() {
	_classCallCheck(this, InputSearchAsep);
};

var MenuDesplegableAsep = (function () {
	function MenuDesplegableAsep(btn) {
		_classCallCheck(this, MenuDesplegableAsep);

		$("." + btn).on("click", this.desplegarMenu);
	}

	_createClass(MenuDesplegableAsep, [{
		key: "desplegarMenu",
		value: function desplegarMenu() {
			$(".contenedorDeLabels").slideToggle("slow");
		}
	}]);

	return MenuDesplegableAsep;
})();

var menuDesplegableAsep = new MenuDesplegableAsep("btnDesplegable");
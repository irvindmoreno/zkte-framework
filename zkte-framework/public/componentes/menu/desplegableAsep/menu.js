"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuDesplegableAsep = (function () {
	function MenuDesplegableAsep(btn) {
		_classCallCheck(this, MenuDesplegableAsep);

		$("." + btn).on("click", this.desplegarMenu);
	}

	_createClass(MenuDesplegableAsep, [{
		key: "desplegarMenu",
		value: function desplegarMenu() {
			$(".contenedorMenu").animate({ width: 'toggle' });
		}
	}]);

	return MenuDesplegableAsep;
})();

var menuDesplegableAsep = new MenuDesplegableAsep("btnDesplegable");
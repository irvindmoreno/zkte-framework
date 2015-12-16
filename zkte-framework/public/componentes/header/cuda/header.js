"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderCuda = (function () {
	function HeaderCuda() {
		_classCallCheck(this, HeaderCuda);

		this.estadoMenuMovil = false;
		$(".header-Cuda-Nav-Titulo i").on("click", this.mostrarMenuMovil);
	}

	_createClass(HeaderCuda, [{
		key: "mostrarMenuMovil",
		value: function mostrarMenuMovil() {
			console.log(this.estadoMenuMovil);
			this.estadoMenuMovil = !this.estadoMenuMovil;
			if (this.estadoMenuMovil) {
				$(".header-Cuda-Nav-Menu").css("display", "block");
			} else {
				$(".header-Cuda-Nav-Menu").css("display", "none");
			}
		}
	}]);

	return HeaderCuda;
})();
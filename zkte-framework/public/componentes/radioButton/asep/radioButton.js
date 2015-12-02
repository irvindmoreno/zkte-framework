"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RadioButtonAsep = (function () {
	function RadioButtonAsep(inputRadio, button, divMensjaeError) {
		_classCallCheck(this, RadioButtonAsep);

		this.inputRadio = inputRadio;
		this.button = button;
		$("." + this.inputRadio).on("change", this.validarRadio);
		$("." + this.button).on("click", { objeto: this }, this.validarRadio);
		this.divMensjaeError = divMensjaeError;
		$("#" + this.divMensjaeError).addClass("mensajeErrorInactivo");
		$("#" + this.divMensjaeError).prepend('<i class="fa fa-exclamation-circle"></i>');
	}

	_createClass(RadioButtonAsep, [{
		key: "marcarComoCorrecto",
		value: function marcarComoCorrecto() {}
	}, {
		key: "marcarComoError",
		value: function marcarComoError() {
			alert("error");
			event.preventDefault();
			//console.log("error fuera de rango")
			$('#' + this.input).addClass("bordeErrorInput");
			$('#' + this.input).parent().siblings('span').removeClass("InputInvalidado");
			$('#' + this.input).parent().siblings('span').addClass("inputValido");
			$("#" + this.divMensjaeError).removeClass("mensajeErrorInactivo");
			$("#" + this.divMensjaeError).addClass("mensajeErrorActivo");
		}
	}, {
		key: "validarRadio",
		value: function validarRadio(event) {
			var objeto = event.data.objeto;
			console.log("detectando cambios");
			if ($(this).is(':checked')) {
				alert("hola");
			} else {
				objeto.marcarComoError();
			}
		}
	}]);

	return RadioButtonAsep;
})();

var miradio = new RadioButtonAsep("miClaseDeRadio", "botonAValidar");
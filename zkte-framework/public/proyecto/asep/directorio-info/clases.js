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

var InputTextAsep = (function () {
	function InputTextAsep(boton, input) {
		_classCallCheck(this, InputTextAsep);

		this.input = input;
		this.boton = boton;
		//this.requerido="si"
		//this.comprobarInput()		
	}

	/*
 var inputTextAsep = new InputTextAsep("btn-submit","myId");
 	inputTextAsep.validar("email",0,8);*/

	_createClass(InputTextAsep, [{
		key: "validar",
		value: function validar(campo, nroCaracteresInicial, nroCaracteresFinal) {
			//console.log(campo)
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			$("#" + this.input).on("keyup", { objeto: this, campo: campo, nroCaracteresInicial: nroCaracteresInicial, nroCaracteresFinal: nroCaracteresFinal }, this.validando);
			$("." + this.boton).on("click", { objeto: this, campo: campo, nroCaracteresInicial: nroCaracteresInicial, nroCaracteresFinal: nroCaracteresFinal }, this.validando);
		}
	}, {
		key: "validando",
		value: function validando(event) {
			//var input=event.data.input;
			var objeto = event.data.objeto;
			var campo = event.data.campo;
			var nroCaracteresInicial = event.data.nroCaracteresInicial;
			var nroCaracteresFinal = event.data.nroCaracteresFinal;
			//console.log(campo)
			switch (campo) {
				case "email":
					//console.log("es un email")
					objeto.validarEmail(event, nroCaracteresInicial, nroCaracteresFinal);
					break;
				case "alfanumerico":
					//console.log("es un alfanumerico")
					objeto.validarAlfaNumerico(event, nroCaracteresInicial, nroCaracteresFinal);
					break;
				case "numerico":
					objeto.validarNumero(event, nroCaracteresInicial, nroCaracteresFinal);
					break;
				case "alfabeto":
					objeto.validarAlfabeto(event, nroCaracteresInicial, nroCaracteresFinal);
					break;
				case "rangoCaracteres":
					objeto.validarRangoCaracteres(event, nroCaracteresInicial, nroCaracteresFinal);
					break;
				case "no-requerido":
					objeto.validarNoRequerido(event, nroCaracteresInicial, nroCaracteresFinal);
					break;
			}

			//var tamanioInput=$('.'+input).val().length
		}
	}, {
		key: "validarNoRequerido",
		value: function validarNoRequerido(event, nroCaracteresInicial, nroCaracteresFinal) {

			var tamanioInput = $('#' + this.input).val().length;
			if (tamanioInput == 0) {
				this.requerido = "no";
				$('#' + this.input).css("border", "1px solid #808080");
				$('#' + this.input).siblings('span').removeClass("inputValido");
				$('#' + this.input).siblings('span').addClass("InputInvalidado");
			} else {
				this.requerido = "si";
			}
		}
	}, {
		key: "validarRangoCaracteres",
		value: function validarRangoCaracteres(event, nroCaracteresInicial, nroCaracteresFinal) {

			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			//console.log(nroCaracteresInicial)
			//console.log(nroCaracteresFinal)
			var tamanioInput = $('#' + this.input).val().length;
			//console.log($('#'+this.input).val().length)
			if (tamanioInput < nroCaracteresInicial || tamanioInput > nroCaracteresFinal) {
				event.preventDefault();
				console.log("error fuera de rango");
				$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
				$('#' + this.input).siblings('span').removeClass("InputInvalidado");
				$('#' + this.input).siblings('span').addClass("inputValido");
			} else {
				console.log("coorecto dentro de rango");
				$('#' + this.input).css("border", "1px solid #808080");
				$('#' + this.input).siblings('span').removeClass("inputValido");
				$('#' + this.input).siblings('span').addClass("InputInvalidado");
			}
		}
	}, {
		key: "validarAlfabeto",
		value: function validarAlfabeto(event, nroCaracteresInicial, nroCaracteresFinal) {
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			var tamanioInput = $('#' + this.input).val().length;
			if (tamanioInput >= nroCaracteresInicial && tamanioInput <= nroCaracteresFinal) {
				//console.log("esta dentro del rango");
				var expresion = $('#' + this.input).val().match('^[a-zA-Z_áéíóúñ \s]*$');
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresion) {
					//console.log("correcto alfabeto")
					$('#' + this.input).css("border", "1px solid #808080");
					$('#' + this.input).siblings('span').removeClass("inputValido");
					$('#' + this.input).siblings('span').addClass("InputInvalidado");
				} else {
					event.preventDefault();
					//console.log("error alfabeto")
					$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
					$('#' + this.input).siblings('span').removeClass("InputInvalidado");
					$('#' + this.input).siblings('span').addClass("inputValido");
				}
			} else {
				event.preventDefault();
				//console.log("fuera de rango")
				$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
				$('#' + this.input).siblings('span').removeClass("InputInvalidado");
				$('#' + this.input).siblings('span').addClass("inputValido");
			}
		}
	}, {
		key: "validarNumero",
		value: function validarNumero(event, nroCaracteresInicial, nroCaracteresFinal) {
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			var tamanioInput = $('#' + this.input).val().length;
			if (tamanioInput >= nroCaracteresInicial && tamanioInput <= nroCaracteresFinal) {
				var expresion = $('#' + this.input).val().match(/^[0-9]+$/);
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresion) {
					$('#' + this.input).css("border", "1px solid #808080");
					$('#' + this.input).siblings('span').removeClass("inputValido");
					$('#' + this.input).siblings('span').addClass("InputInvalidado");
				} else {
					event.preventDefault();
					$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
					$('#' + this.input).siblings('span').removeClass("InputInvalidado");
					$('#' + this.input).siblings('span').addClass("inputValido");
				}
			} else {
				event.preventDefault();
				//console.log("fuera de rango")
				$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
				$('#' + this.input).siblings('span').removeClass("InputInvalidado");
				$('#' + this.input).siblings('span').addClass("inputValido");
			}
		}
	}, {
		key: "validarAlfaNumerico",
		value: function validarAlfaNumerico(event, nroCaracteresInicial, nroCaracteresFinal) {
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			var tamanioInput = $('#' + this.input).val().length;
			if (this.requerido == "no" && tamanioInput == 0) {} else {

				if (tamanioInput >= nroCaracteresInicial && tamanioInput <= nroCaracteresFinal) {
					var expresion = $('#' + this.input).val().match(/^[a-z0-9\sáéíóúñ.,_\-\&\/]+$/i);
					//Se utiliza la funcion test() nativa de JavaScript
					if (expresion) {
						$('#' + this.input).css("border", "1px solid #808080");
						$('#' + this.input).siblings('span').removeClass("inputValido");
						$('#' + this.input).siblings('span').addClass("InputInvalidado");
					} else {
						event.preventDefault();
						$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
						$('#' + this.input).siblings('span').removeClass("InputInvalidado");
						$('#' + this.input).siblings('span').addClass("inputValido");
					}
				} else {
					event.preventDefault();
					//console.log("fuera de rango")
					$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
					$('#' + this.input).siblings('span').removeClass("InputInvalidado");
					$('#' + this.input).siblings('span').addClass("inputValido");
				}
			}
		}
	}, {
		key: "validarEmail",
		value: function validarEmail(event, nroCaracteresInicial, nroCaracteresFinal) {
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			var tamanioInput = $('#' + this.input).val().length;
			if (tamanioInput >= nroCaracteresInicial && tamanioInput <= nroCaracteresFinal) {
				//console.log(this.input);
				var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
				var expresionaEvaluar = regex.test($('#' + this.input).val().trim());
				//Se utiliza la funcion test() nativa de JavaScript
				if (expresionaEvaluar) {
					//console.log("cumple")
					$('#' + this.input).css("border", "1px solid #808080");
					$('#' + this.input).siblings('span').removeClass("inputValido");
					$('#' + this.input).siblings('span').addClass("InputInvalidado");
				} else {
					//console.log("no cumple")
					event.preventDefault();
					$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
					$('#spanError-' + this.input).removeClass("InputInvalidado");
					$('#spanError-' + this.input).addClass("inputValido");
				}
				//console.log("validando el email con id: "+this.input);
			} else {
					event.preventDefault();
					//console.log("fuera de rango")
					$('#' + this.input).css("border", "3px solid rgb(238, 86, 90)");
					$('#' + this.input).siblings('span').removeClass("InputInvalidado");
					$('#' + this.input).siblings('span').addClass("inputValido");
				}
		}
	}]);

	return InputTextAsep;
})();

var ButtonAsepAzul = function ButtonAsepAzul() {
	_classCallCheck(this, ButtonAsepAzul);
};

var ModalAsep = function ModalAsep() {
	_classCallCheck(this, ModalAsep);
};
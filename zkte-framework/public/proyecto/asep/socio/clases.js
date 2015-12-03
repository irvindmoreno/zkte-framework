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

var TituloAsep = function TituloAsep() {
	_classCallCheck(this, TituloAsep);
}
//se crean estas varables porque con metodos como el onclick no funciona el this
;

var colorDesactivadoNumero;
var colorDesactivadoTitulo;
var colorDesactivadaLetraContenido;
var colorAcitvadoNumero;
var colorAcitvadoTitulo;
var colorAcitvadoLetraContenido;

var TabsAsep = (function () {
	function TabsAsep() {
		_classCallCheck(this, TabsAsep);

		//$(".pestaniasPadre").children("div:nth-child(3)")
		//ocultando las pestañas(divs)
		$(".pestaniasPadre").children("div").css("display", "none");
		//dejar por defecto el primero abierto
		$(".pestaniasPadre").children("div:nth-child(1)").css("display", "block");
		//llamar a la funcion q muestra el div		
		$(".TabsAsepMovil-Pestania").on("click", this.mostrarDiv);
		//instanciando colores del item seleccionado por defecto cuando esta seleccionado
		this.backgroundSeleccionadoCirculo = "#2ca7df";
		this.colorSeleccionadoTitulo = "#2ca7df";
		this.colorContenidoSeleccionado = "#303030";
		this.backgrounPestaniaSeleccionado = "#dee0e2";
		colorAcitvadoNumero = this.backgroundSeleccionadoCirculo;
		colorAcitvadoTitulo = this.colorSeleccionadoTitulo;
		colorAcitvadoLetraContenido = this.colorContenidoSeleccionado;
		//instanciando colores del item desactivado por defecto cuando esta seleccionado
		this.backgroundNumeroPestaniaDesactivada = "#5D5C5C";
		this.backgroundTituloPestaniaDesactivada = "#5D5C5C";
		this.colorContenidoPestaniaDesactivada = "#777777";
		colorDesactivadoNumero = this.backgroundNumeroPestaniaDesactivada;
		colorDesactivadoTitulo = this.backgroundTituloPestaniaDesactivada;
		colorDesactivadaLetraContenido = this.colorContenidoPestaniaDesactivada;
		//estos son los css de la pestaña seleccionada por defecto de desktop
		$(".TabsAsep-Pestania-Ttulo-Numero:first").css("background", this.backgroundSeleccionadoCirculo);
		$(".TabsAsep-Pestania-Ttulo-Texto:first").css("color", this.colorSeleccionadoTitulo);
		$(".TabsAsep-Pestania-Contenido:first").css("color", this.colorContenidoSeleccionado);
		$(".TabsAsep-Pestania:first").css("background", this.backgrounPestaniaSeleccionado);
		// estos son los controles para movil
		$(".TabsAsepMovil-Pestania-Numero:first").css("background", this.backgroundSeleccionadoCirculo);
		$(".TabsAsepMovil-Pestania-Ttulo:first").css("color", this.colorSeleccionadoTitulo);
		$(".TabsAsepMovil-Pestania:first").css("background", this.backgrounPestaniaSeleccionado);

		$(".TabsAsep-Pestania").on("click", this.mostrarDiv);
	}

	//var tabsAsep= new TabsAsep()

	_createClass(TabsAsep, [{
		key: "mostrarDiv",
		value: function mostrarDiv(color) {
			var pestania = parseInt($(this).attr("data"));
			// esto es para desktop
			$(".TabsAsep-Pestania").addClass("desactivarTab");
			$(".TabsAsep-Pestania").removeClass("activarTab");
			$(this).removeClass("desactivarTab");
			$(this).addClass("activarTab");
			//vamos a pintar a los desactivados
			//para pc
			$(".desactivarTab .TabsAsep-Pestania-Ttulo-Numero").css("background", colorDesactivadoNumero);
			$(".desactivarTab .TabsAsep-Pestania-Ttulo-Texto").css("color", colorDesactivadoTitulo);
			$(".desactivarTab .TabsAsep-Pestania-Contenido").css("color", colorDesactivadaLetraContenido);

			//Pintemos al activado
			// para pc
			$(".activarTab .TabsAsep-Pestania-Ttulo-Numero").css("background", colorAcitvadoNumero);
			$(".activarTab .TabsAsep-Pestania-Ttulo-Texto").css("color", colorAcitvadoTitulo);
			$(".activarTab .TabsAsep-Pestania-Contenido").css("color", colorAcitvadoLetraContenido);

			// esto es para movil
			$(".TabsAsepMovil-Pestania").addClass("desactivarTab");
			$(".TabsAsepMovil-Pestania").removeClass("activarTab");
			$(this).removeClass("desactivarTab");
			$(this).addClass("activarTab");
			//vamos a pintar a los desactivados
			$(".desactivarTab .TabsAsepMovil-Pestania-Numero").css("background", colorDesactivadoNumero);
			$(".desactivarTab .TabsAsepMovil-Pestania-Titulo").css("color", colorDesactivadoTitulo);
			//Pintemos al activado
			$(".activarTab .TabsAsepMovil-Pestania-Numero").css("background", colorAcitvadoNumero);
			$(".activarTab .TabsAsepMovil-Pestania-Titulo").css("color", colorAcitvadoTitulo);
			$(".pestaniasPadre").children("div").css("display", "none");
			$(".pestaniasPadre").children("div:nth-child(" + pestania + ")").css("display", "block");
		}
	}, {
		key: "setBackgroundSeleccionadoCirculo",
		value: function setBackgroundSeleccionadoCirculo(background) {
			this.backgroundSeleccionadoCirculo = background;
		}
	}, {
		key: "setColorSeleccionadoTitulo",
		value: function setColorSeleccionadoTitulo(color) {
			this.colorSeleccionadoTitulo = color;
		}
	}, {
		key: "setColorContenidoSeleccionado",
		value: function setColorContenidoSeleccionado(color) {
			this.colorContenidoSeleccionado = color;
		}
	}, {
		key: "setBackgroundPestaniaSeleccionado",
		value: function setBackgroundPestaniaSeleccionado(background) {
			this.backgrounPestaniaSeleccionado = background;
		}
	}, {
		key: "setBackgroundNumeroPestaniaDesactivada",
		value: function setBackgroundNumeroPestaniaDesactivada(background) {
			this.backgroundNumeroPestaniaDesactivada = background;
		}
	}, {
		key: "setBackgroundTituloPestaniaDesactivada",
		value: function setBackgroundTituloPestaniaDesactivada(background) {
			this.backgroundTituloPestaniaDesactivada = background;
		}
	}, {
		key: "setColorContenidoPestaniaDesactivada",
		value: function setColorContenidoPestaniaDesactivada(background) {
			this.colorContenidoPestaniaDesactivada = background;
		}
	}]);

	return TabsAsep;
})();

var InputTextAsep = (function () {
	function InputTextAsep(boton, input, divMensjaeError, conteniDoMensajeError) {
		_classCallCheck(this, InputTextAsep);

		this.input = input;
		this.boton = boton;
		this.divMensjaeError = divMensjaeError;
		this.conteniDoMensajeError = conteniDoMensajeError;
		$("#" + this.divMensjaeError).addClass("mensajeErrorInactivo");
		//$("#"+this.divMensjaeError).html('<i class="fa fa-exclamation-circle"></i>'+this.conteniDoMensajeError);

		//this.comprobarInput()		
	}

	/*
 var inputTextAsep = new InputTextAsep("btn-submit","myId","idDivDondeMUestroElError");
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
		key: "validarRangoCaracteres",
		value: function validarRangoCaracteres(event) {
			var objeto = event.data.objeto;
			var nroCaracteresInicial = event.data.nroCaracteresInicial;
			var valorInput = parseInt($('#' + objeto.input).val());
			var nroCaracteresFinal = event.data.nroCaracteresFinal;

			//console.log($('#'+this.input).val().length)
			if (objeto.requerido == "no" && tamanioInput == 0) {} else {

				if (valorInput >= nroCaracteresInicial && valorInput <= nroCaracteresFinal) {
					objeto.marcarComoCorrecto(event);
				} else {
					objeto.marcarComoError(event);
				}
			}
		}
	}, {
		key: "rangoCaracteres",
		value: function rangoCaracteres(nroCaracteresInicial, nroCaracteresFinal) {
			$("#" + this.input).on("keyup", { objeto: this, nroCaracteresInicial: nroCaracteresInicial, nroCaracteresFinal: nroCaracteresFinal }, this.validarRangoCaracteres);
			//$('#'+this.input).attr("maxlength",nroCaracteresFinal)
			//console.log(nroCaracteresInicial)
			//console.log(nroCaracteresFinal)
		}
	}, {
		key: "mostrarMensajeError",
		value: function mostrarMensajeError() {
			$("#" + this.divMensjaeError).removeClass("mensajeErrorInactivo");
			$("#" + this.divMensjaeError).addClass("mensajeErrorActivo");
			$("#" + this.divMensjaeError).html('<i class="fa fa-exclamation-circle"></i>' + this.conteniDoMensajeError);
		}
	}, {
		key: "marcarComoError",
		value: function marcarComoError(event) {
			event.preventDefault();
			//console.log("error fuera de rango")
			$('#' + this.input).addClass("bordeErrorInput");
			$('#' + this.input).siblings('span').removeClass("InputInvalidado");
			$('#' + this.input).siblings('span').addClass("inputValido");
			this.estadoValidado = false;
		}
	}, {
		key: "marcarComoCorrecto",
		value: function marcarComoCorrecto(event) {
			$('#' + this.input).removeClass("bordeErrorInput");
			$('#' + this.input).siblings('span').removeClass("inputValido");
			$('#' + this.input).siblings('span').addClass("InputInvalidado");
			//$("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
			//$("#"+this.divMensjaeError).removeClass("mensajeErrorActivo")
			this.estadoValidado = true;
		}
	}, {
		key: "validarNoRequerido",
		value: function validarNoRequerido(event, nroCaracteresInicial, nroCaracteresFinal) {
			var tamanioInput = $('#' + this.input).val().length;
			if (tamanioInput == 0) {
				this.requerido = "no";
				this.marcarComoCorrecto(event);
			} else {
				this.requerido = "si";
			}
		}
		/*
  validarRangoCaracteres(event,nroCaracteresInicial,nroCaracteresFinal)
  {
  
  $('#'+this.input).attr("maxlength",nroCaracteresFinal)
  //console.log(nroCaracteresInicial)
  //console.log(nroCaracteresFinal)
  var valorInput=$('#'+this.input).val();
  //console.log($('#'+this.input).val().length)
  if(this.requerido=="no" && tamanioInput==0)
  {
  	}
  else
  {
  	if(valorInput>=nroCaracteresInicial && valorInput<=nroCaracteresFinal)
  	{			
  		this.marcarComoCorrecto(event)
  	}
  	else
  	{
  		this.marcarComoError(event)
  	}
  }
  }*/
	}, {
		key: "validarAlfabeto",
		value: function validarAlfabeto(event, nroCaracteresInicial, nroCaracteresFinal) {
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			var tamanioInput = $('#' + this.input).val().length;
			if (this.requerido == "no" && tamanioInput == 0) {} else {
				if (tamanioInput >= nroCaracteresInicial && tamanioInput <= nroCaracteresFinal) {
					//console.log("esta dentro del rango");
					var expresion = $('#' + this.input).val().match('^[a-zA-Z_áéíóúñ \s]*$');
					//Se utiliza la funcion test() nativa de JavaScript
					if (expresion) {
						this.marcarComoCorrecto(event);
					} else {
						this.marcarComoError(event);
					}
				} else {
					this.marcarComoError(event);
				}
			}
		}
	}, {
		key: "validarNumero",
		value: function validarNumero(event, nroCaracteresInicial, nroCaracteresFinal) {
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			var tamanioInput = $('#' + this.input).val().length;
			if (this.requerido == "no" && tamanioInput == 0) {} else {
				if (tamanioInput >= nroCaracteresInicial && tamanioInput <= nroCaracteresFinal) {
					var expresion = $('#' + this.input).val().match(/^[0-9]+$/);
					//Se utiliza la funcion test() nativa de JavaScript
					if (expresion) {
						this.marcarComoCorrecto(event);
					} else {
						this.marcarComoError(event);
					}
				} else {
					this.marcarComoError(event);
				}
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
						this.marcarComoCorrecto(event);
					} else {
						this.marcarComoError(event);
					}
				} else {
					this.marcarComoError(event);
				}
			}
		}
	}, {
		key: "validarEmail",
		value: function validarEmail(event, nroCaracteresInicial, nroCaracteresFinal) {
			$('#' + this.input).attr("maxlength", nroCaracteresFinal);
			var tamanioInput = $('#' + this.input).val().length;
			if (this.requerido == "no" && tamanioInput == 0) {} else {
				if (tamanioInput >= nroCaracteresInicial && tamanioInput <= nroCaracteresFinal) {
					//console.log(this.input);
					var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
					var expresionaEvaluar = regex.test($('#' + this.input).val().trim());
					//Se utiliza la funcion test() nativa de JavaScript
					if (expresionaEvaluar) {
						//console.log("cumple")
						this.marcarComoCorrecto(event);
					} else {
						this.marcarComoError(event);
					}
					//console.log("validando el email con id: "+this.input);
				} else {
						this.marcarComoError(event);
					}
			}
		}
	}]);

	return InputTextAsep;
})();

var InputFileAsep = function InputFileAsep() {
	_classCallCheck(this, InputFileAsep);
};

var SelectAsep = (function () {
	function SelectAsep(boton, idSelect, required, divMensjaeError, conteniDoMensajeError) {
		_classCallCheck(this, SelectAsep);

		this.idSelect = idSelect;
		this.divMensjaeError = divMensjaeError;
		this.conteniDoMensajeError = conteniDoMensajeError;
		$("#" + this.divMensjaeError).addClass("mensajeErrorInactivo");
		//$("#"+this.divMensjaeError).html('<i class="fa fa-exclamation-circle"></i>'+conteniDoMensajeError);
		$('.' + this.idSelect).on("change", { objeto: this, idSelect: this.idSelect, divMensjaeError: this.divMensjaeError }, this.validarSelect);
		if (required) {
			$("." + boton).on("click", { objeto: this, idSelect: this.idSelect, divMensjaeError: this.divMensjaeError }, this.validarSelect);
		}
	}

	//var selectAsep=new SelectAsep("btn","idSelect",true,"divMensjaeError")

	_createClass(SelectAsep, [{
		key: "mostrarMensajeError",
		value: function mostrarMensajeError() {
			$("#" + this.divMensjaeError).removeClass("mensajeErrorInactivo");
			$("#" + this.divMensjaeError).addClass("mensajeErrorActivo");
			$("#" + this.divMensjaeError).html('<i class="fa fa-exclamation-circle"></i>' + this.conteniDoMensajeError);
		}
	}, {
		key: "marcarComoError",
		value: function marcarComoError(event) {
			event.preventDefault();
			//console.log("error fuera de rango")
			//$('#'+this.input).addClass("bordeErrorInput")
			//$('#'+this.input).siblings('span').removeClass("InputInvalidado")
			//$('#'+this.input).siblings('span').addClass("inputValido")	   
			this.estadoValidado = false;

			event.preventDefault();
			$('.' + this.idSelect).siblings('span').removeClass("InputInvalidado");
			$('.' + this.idSelect).siblings('span').addClass("inputValido");
			$('.' + this.idSelect).parent().addClass('selectError');
			$('.' + this.idSelect).parent().removeClass('selectCorrecto');
			//console.log("quitando mensajeErrorInactivo")
			//$("#"+divMensjaeError).removeClass("mensajeErrorInactivo")
			//$("#"+divMensjaeError).addClass("mensajeErrorActivo")
		}
	}, {
		key: "marcarComoCorrecto",
		value: function marcarComoCorrecto(event) {
			//$('#'+this.input).removeClass("bordeErrorInput")
			//$('#'+this.input).siblings('span').removeClass("inputValido")
			//$('#'+this.input).siblings('span').addClass("InputInvalidado");
			//$("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
			//$("#"+this.divMensjaeError).removeClass("mensajeErrorActivo")
			this.estadoValidado = true;

			$('.' + this.idSelect).siblings('span').removeClass("inputValido");
			$('.' + this.idSelect).siblings('span').addClass("InputInvalidado");
			$('.' + this.idSelect).parent().removeClass('selectError');
			$('.' + this.idSelect).parent().addClass('selectCorrecto');
		}
	}, {
		key: "validarSelect",
		value: function validarSelect(event) {
			var idSelect = event.data.idSelect;
			var objeto = event.data.objeto;
			var divMensjaeError = event.data.divMensjaeError;
			var optionInicial = $("." + idSelect).children('option').val();
			var optionSeleccionado = $("." + idSelect).val();
			if (optionInicial == optionSeleccionado) {

				objeto.marcarComoError(event);
			} else {
				objeto.marcarComoCorrecto(event);
			}
		}
	}]);

	return SelectAsep;
})();

var ButtonAsepAzul = function ButtonAsepAzul() {
	_classCallCheck(this, ButtonAsepAzul);
};

var RedesSociales = function RedesSociales() {
	_classCallCheck(this, RedesSociales);
};

var ModalAsep = function ModalAsep() {
	_classCallCheck(this, ModalAsep);
};
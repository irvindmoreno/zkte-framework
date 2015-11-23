"use strict";

$(document).on("ready", inicio);
function confirmarContrasenia() {
	var contrasenia = $(".ContraseniaValidar").val();
	var confirmaCOntrasenia = $(this).val();
	if (contrasenia == confirmaCOntrasenia) {
		$(this).siblings("span").addClass("InputInvalidado");
		$(this).siblings("span").removeClass("inputValido");
	} else {
		$(this).siblings("span").addClass("inputValido");
		$(this).siblings("span").removeClass("InputInvalidado");
	}
}
function confirmarContraseniaClick() {
	var contrasenia = $(".ContraseniaValidar").val();
	var confirmaCOntrasenia = $(".confirmaContrasenia").val();
	//console.log("entro a la funcion")
	if (contrasenia != confirmaCOntrasenia) {
		//console.log("desabilita el a")
		event.preventDefault();
	}
}
function inicio() {
	var headerAsep = new HeaderAsep();
	var navegacionAsep = new NavegacionAsep();
	var tituloAsep = new TituloAsep();
	var buttonAsepAzul = new ButtonAsepAzul();

	var inputTextAsep = new InputTextAsep("btn-guardarValidar", "EmailValidar");
	var modalAsep = new ModalAsep();
	$(".confirmaContrasenia").on("keyup", confirmarContrasenia);
	$(".btn-guardarValidar").on("click", confirmarContraseniaClick);
}
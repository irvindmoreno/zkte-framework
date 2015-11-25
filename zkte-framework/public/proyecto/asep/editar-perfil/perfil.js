// var tipoDeDocumento=$('inpu
"use strict";

$(document).on("ready", inicio);
var continputTextAsepRuc = 0;
var continputTextAsepDni = 0;
function activarInput() {
    $("input").prop('disabled', false);
    $("input").prop('enabled', true);
}
function cambiarValidacionDeDocumento() {

    var tipoDeDocumento = $('input:radio[name=DePruebaBorralo]:checked').val();
    if (tipoDeDocumento == "RUC") {
        var tamanioInput = $(".tipoDocumento").val().length;
        console.log(tamanioInput);
        if (tamanioInput == 11) {
            var expresion = $(".tipoDocumento").val().match(/^[0-9]+$/);
            //Se utiliza la funcion test() nativa de JavaScript
            if (expresion) {
                $(".tipoDocumento").css("border", "1px solid #808080");
                $(".tipoDocumento").siblings('span').removeClass("inputValido");
                $(".tipoDocumento").siblings('span').addClass("InputInvalidado");
            } else {
                event.preventDefault();
                $(".tipoDocumento").css("border", "2px solid #2ca7df");
                $(".tipoDocumento").siblings('span').removeClass("InputInvalidado");
                $(".tipoDocumento").siblings('span').addClass("inputValido");
            }
        } else {
            //event.preventDefault();
            $(".tipoDocumento").css("border", "2px solid #2ca7df");
            $(".tipoDocumento").siblings('span').removeClass("InputInvalidado");
            $(".tipoDocumento").siblings('span').addClass("inputValido");
        }
    } else if (tipoDeDocumento == "DNI") {

        var tamanioInput = $(".tipoDocumento").val().length;
        console.log(tamanioInput);
        if (tamanioInput == 8) {
            var expresion = $(".tipoDocumento").val().match(/^[0-9]+$/);
            //Se utiliza la funcion test() nativa de JavaScript
            if (expresion) {
                $(".tipoDocumento").css("border", "1px solid #808080");
                $(".tipoDocumento").siblings('span').removeClass("inputValido");
                $(".tipoDocumento").siblings('span').addClass("InputInvalidado");
            } else {
                event.preventDefault();
                $(".tipoDocumento").css("border", "2px solid #2ca7df");
                $(".tipoDocumento").siblings('span').removeClass("InputInvalidado");
                $(".tipoDocumento").siblings('span').addClass("inputValido");
            }
        } else {
            //event.preventDefault();
            $(".tipoDocumento").css("border", "2px solid #2ca7df");
            $(".tipoDocumento").siblings('span').removeClass("InputInvalidado");
            $(".tipoDocumento").siblings('span').addClass("inputValido");
        }
    } else {

        $(".tipoDocumento").css("border", "2px solid #2ca7df");
        $(".tipoDocumento").siblings('span').removeClass("InputInvalidado");
        $(".tipoDocumento").siblings('span').addClass("inputValido");
    }
}
function inicio() {
    var headerAsep = new HeaderAsep();
    var navegacionAsep = new NavegacionAsep();
    var tituloAsep = new TituloAsep();
    var inputTextAsep = new InputTextAsep();
    //$("input[type=text]").prop('disabled', true);
    var buttonAsepAzul = new ButtonAsepAzul();
    //$(".btn-editarPerfil").on("click",activarInput)
    var inputTextAsep = new InputTextAsep("btn-editarPerfilModal", "NombreValidar");
    var inputTextAsep = new InputTextAsep("btn-editarPerfilModal", "ApellidoValidar");
    var inputTextAsep = new InputTextAsep("btn-editarPerfilModal", "EmailValidar");

    var modalAsep = new ModalAsep();
    var inputTextAsep = new InputTextAsep();
    var inputTextAsep = new InputTextAsep();
    $(".radioDocumento").on("change", cambiarValidacionDeDocumento);
    $(".tipoDocumento").on("keyup", cambiarValidacionDeDocumento);
    var inputTextAsep = new InputTextAsep();
    var inputTextAsep = new InputTextAsep();
    $(".btn-editarPerfil").on("click", cambiarValidacionDeDocumento);
}
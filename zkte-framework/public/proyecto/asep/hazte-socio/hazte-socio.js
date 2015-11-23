"use strict";

$(document).on("ready", inicio);
function inicio() {
    var navegacionAsep = new NavegacionAsep();
    var headerAsep = new HeaderAsep();
    var tabsAsep = new TabsAsep();
    var buttonAsepAzul = new ButtonAsepAzul();
    var tituloAsep = new TituloAsep();
    var modalAsep = new ModalAsep();
    var buttonAsepAzul = new ButtonAsepAzul();
    var inputFileAsep = new InputFileAsep();
    var inputTextAsep = new InputTextAsep("btn-guardarValidado", "NombreValidar");
    var inputTextAsep = new InputTextAsep("btn-guardarValidado", "ApellidoValidar");
    var inputTextAsep = new InputTextAsep("btn-guardarValidado", "EmailValidar");
    var inputTextAsep = new InputTextAsep("btn-guardarValidado", "ContraseniaValidar");
    var inputTextAsep = new InputTextAsep("btn-guardarValidado", "DniValidar");

    var selectAsep = new SelectAsep("btn-guardarValidado", "classSelect", true);
}
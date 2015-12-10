"use strict";

$(document).on("ready", inicio);
function inicio() {
    var headerAsep = new HeaderAsep();
    var navegacionAsep = new NavegacionAsep();
    var tituloAsep = new TituloAsep();

    var tabsAsep = new TabsAsep();

    var rucInput = new InputTextAsep("guardarPasoDos", "rucInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    rucInput.validar("numerico", 11, 11);
    var nombreComercialInput = new InputTextAsep("guardarPasoDos", "nombreComercialInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    nombreComercialInput.validar("alfanumerico", 1, 100);
    var paginaWebInput = new InputTextAsep("guardarPasoDos", "paginaWebInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    paginaWebInput.validar("alfanumerico", 0, 200);
    paginaWebInput.validar("no-requerido", 0, 200);
    var facebookInput = new InputTextAsep("guardarPasoDos", "facebookInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    facebookInput.validar("alfanumerico", 0, 200);
    facebookInput.validar("no-requerido", 0, 200);
    var twiterInput = new InputTextAsep("guardarPasoDos", "twiterInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    twiterInput.validar("alfanumerico", 0, 200);
    twiterInput.validar("no-requerido", 0, 200);
    var linkedinInput = new InputTextAsep("guardarPasoDos", "linkedinInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    linkedinInput.validar("alfanumerico", 0, 200);
    linkedinInput.validar("no-requerido", 0, 200);
    var emailDeContactoInput = new InputTextAsep("guardarPasoDos", "emailDeContactoInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    emailDeContactoInput.validar("email", 1, 100);
    var inicioActividadesInput = new InputTextAsep("guardarPasoDos", "inicioActividadesInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    inicioActividadesInput.validar("numerico", 4, 4);
    var fecha = new Date();
    var anioActual = fecha.getFullYear();
    inicioActividadesInput.rangoCaracteres(1000, anioActual);
    var dedicaProductoInput = new InputTextAsep("guardarPasoDos", "dedicaProductoInput", "mensajeErrorForm", "Debe completar los campos requeridos");
    dedicaProductoInput.validar("alfanumerico", 1, 99999999999);

    var nroTrabajadores = new SelectAsep("guardarPasoDos", "nroTrabajadores", true, "mensajeErrorForm", "Debe completar los campos requeridos");
    var tipoEmpresa = new SelectAsep("guardarPasoDos", "tipoEmpresa", true, "mensajeErrorForm", "Debe completar los campos requeridos");
    var rubroEmpresa = new SelectAsep("guardarPasoDos", "rubroEmpresa", true, "mensajeErrorForm", "Debe completar los campos requeridos");
    var etapaEmpresa = new SelectAsep("guardarPasoDos", "etapaEmpresa", true, "mensajeErrorForm", "Debe completar los campos requeridos");

    // mostrando el mensaje de error para ello verificamos que todos los inputs hayan retornado true
    $(".guardarPasoDos").click(function () {
        if (etapaEmpresa.estadoValidado && rubroEmpresa.estadoValidado && tipoEmpresa.estadoValidado && rucInput.estadoValidado && nombreComercialInput.estadoValidado && paginaWebInput.estadoValidado && facebookInput.estadoValidado && twiterInput.estadoValidado && linkedinInput.estadoValidado && inicioActividadesInput.estadoValidado && nroTrabajadores.estadoValidado && emailDeContactoInput.estadoValidado && dedicaProductoInput.estadoValidado) {} else {
            rucInput.mostrarMensajeError();
            nombreComercialInput.mostrarMensajeError();
            paginaWebInput.mostrarMensajeError();
            facebookInput.mostrarMensajeError();
            twiterInput.mostrarMensajeError();
            linkedinInput.mostrarMensajeError();
            emailDeContactoInput.mostrarMensajeError();
            nroTrabajadores.mostrarMensajeError();
            inicioActividadesInput.mostrarMensajeError();
            dedicaProductoInput.mostrarMensajeError();
            tipoEmpresa.mostrarMensajeError();
            rubroEmpresa.mostrarMensajeError();
            etapaEmpresa.mostrarMensajeError();
        }
    });

    //var inputTextAsep= new InputTextAsep()   
    var inputFileAsep = new InputFileAsep();
    var selectAsep = new SelectAsep();
    var buttonAsepAzul = new ButtonAsepAzul();
    var modalAsep = new ModalAsep();
    var selectAsep = new SelectAsep();
}
$(document).on("ready",inicio)
function verificarContrasenia()
{
    var contrasenia=$(".ContraseniaValidar").val()
    var contraseniaRepetida=$(".confirmaContrasenia").val();
    console.log(contraseniaRepetida);
    if(contrasenia==contraseniaRepetida)
    {       
        $(this).siblings("span").addClass("InputInvalidado")
        $(this).siblings("span").removeClass("inputValido")
    }
    else
    {       
        $(this).siblings("span").addClass("inputValido")
        $(this).siblings("span").removeClass("InputInvalidado")
    }

}
function confirmarContraseniaClick (event) 
{
    var contrasenia=$(".ContraseniaValidar").val();
    var confirmaCOntrasenia=$(".confirmaContrasenia").val();
    //console.log(contrasenia)
    //console.log(confirmaCOntrasenia)
    //alert("hola")
    //console.log("entro a la funcion")
    if(contrasenia!=confirmaCOntrasenia)
    {
        //console.log("desabilita el a")
        event.preventDefault();
    }
}
function inicio()
{	
    var navegacionAsep= new NavegacionAsep()    
    var headerAsep= new HeaderAsep()
    var tabsAsep= new TabsAsep()
    var buttonAsepAzul= new ButtonAsepAzul()
    var tituloAsep= new TituloAsep()
    var modalAsep= new ModalAsep()
    var buttonAsepAzul= new ButtonAsepAzul()
    var inputFileAsep= new InputFileAsep()
    var inputTextAsep= new InputTextAsep("btn-guardarValidado","NombreValidar")
    var inputTextAsep= new InputTextAsep("btn-guardarValidado","ApellidoValidar")
    var inputTextAsep= new InputTextAsep("btn-guardarValidado","EmailValidar")
    var inputTextAsep= new InputTextAsep("btn-guardarValidado","ContraseniaValidar")
    var inputTextAsep= new InputTextAsep("btn-guardarValidado","DniValidar")

    var selectAsep= new SelectAsep("btn-guardarValidado","classSelect",true)
    $(".confirmaContrasenia").on("keyup",verificarContrasenia);
    $(".btn-guardarValidado").on("click",confirmarContraseniaClick)
}
$(document).on("ready",inicio)
function verificarContrasenia()
{
	var contrasenia=$(".ContraseniaValidar").val()
	var contraseniaRepetida=$(".confirmarContrasenia").val();
	//console.log(contraseniaRepetida);
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
	var confirmaCOntrasenia=$(".confirmarContrasenia").val();
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
    var headerAsep= new HeaderAsep()
    var navegacionAsep= new NavegacionAsep()
    var tituloAsep= new TituloAsep()
    var vinietasAsep= new VinietasAsep()    
    var buttonAsepAzul= new ButtonAsepAzul()
    var inputTextAsep= new InputTextAsep("btn-validar","NombreValidar")
    var inputTextAsep= new InputTextAsep("btn-validar","ApellidoValidar")
    var inputTextAsep= new InputTextAsep("btn-validar","EmailValidar")
    var inputTextAsep= new InputTextAsep("btn-validar","TelefonoValidar")
    var inputTextAsep= new InputTextAsep("btn-validar","ContraseniaValidar")
   $(".confirmarContrasenia").on("keyup",verificarContrasenia)
   $(".btn-validar").on("click",confirmarContraseniaClick)
    var modalAsep= new ModalAsep()
}
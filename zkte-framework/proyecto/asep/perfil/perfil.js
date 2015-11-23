$(document).on("ready",inicio)
function activarInput () 
{
	$("input").prop('disabled', false);
	$("input").prop('enabled', true);
}
function inicio()
{	
    var headerAsep= new HeaderAsep()
    var navegacionAsep= new NavegacionAsep()
    var tituloAsep= new TituloAsep()
    var inputTextAsep= new InputTextAsep()
    //$("input[type=text]").prop('disabled', true);
    var buttonAsepAzul= new ButtonAsepAzul()
    //$(".btn-editarPerfil").on("click",activarInput)
    var inputTextAsep= new InputTextAsep("btn-editarPerfilModal","NombreValidar")
    var inputTextAsep= new InputTextAsep("btn-editarPerfilModal","ApellidoValidar")
    var inputTextAsep= new InputTextAsep("btn-editarPerfilModal","EmailValidar")
    var modalAsep= new ModalAsep()
}

$(document).on("ready",inicio)
function inicio()
{	
    var headerAsep= new HeaderAsep()    
    var navegacionAsep= new NavegacionAsep()
    var tituloAsepA= new TituloAsepA()
    var tituloAsep= new TituloAsep()
    var inputSearchAsep= new InputSearchAsep()
    var menuDesplegableAsep=new MenuDesplegableAsep("btnDesplegable");
    var menuDesplegableAsep= new MenuDesplegableAsep()            
    var nombreTextAsep= new InputTextAsep("btn-Enviar","nombreInput")
    	nombreTextAsep.validar("alfabeto",1,100)
    var apellidosTextAsep= new InputTextAsep("btn-Enviar","apellidosInput")
    	apellidosTextAsep.validar("alfabeto",1,100)
    var emailTextAsep= new InputTextAsep("btn-Enviar","emailInput")
    	emailTextAsep.validar("email",1,100)
    var emailTextAsep= new InputTextAsep("btn-Enviar","telefonoInput")
    	emailTextAsep.validar("no-requerido")
    	emailTextAsep.validar("alfanumerico",0,100)
    	
    var mensajeTextAsep= new InputTextAsep("btn-Enviar","mensajeTextArea")
    	mensajeTextAsep.validar("alfanumerico",1,200)
    	
    	
    var buttonAsepAzul= new ButtonAsepAzul()
    var modalAsep= new ModalAsep()
}

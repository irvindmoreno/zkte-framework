$(document).on("ready",inicio)
function inicio()
{	
    var headerAsep= new HeaderAsep()
    var navegacionAsep= new NavegacionAsep()
    var tituloAsep= new TituloAsep()

    var tabsAsep= new TabsAsep()
    
    var rucInput= new InputTextAsep("btn-desconocido","rucInput","mensajeErrorForm");
    	rucInput.validar("numerico",11,11)
    //var inputTextAsep= new InputTextAsep()    
    var inputFileAsep= new InputFileAsep()
}

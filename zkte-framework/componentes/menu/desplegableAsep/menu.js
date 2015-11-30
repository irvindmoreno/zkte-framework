class MenuDesplegableAsep{
	constructor(btn)
	{
		$("."+btn).on("click",this.desplegarMenu)
	}
	desplegarMenu()
	{
		$(".contenedorMenu").animate({width: 'toggle'});
	}
}
var menuDesplegableAsep=new MenuDesplegableAsep("btnDesplegable");
class MenuDesplegableAsep{
	constructor(btn)
	{
		$("."+btn).on("click",this.desplegarMenu)
	}
	desplegarMenu()
	{
		$(".contenedorDeLabels").slideToggle( "slow" );
	}
}
var menuDesplegableAsep=new MenuDesplegableAsep("btnDesplegable");
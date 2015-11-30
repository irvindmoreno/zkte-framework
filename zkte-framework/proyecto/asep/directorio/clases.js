class HeaderAsep{
	constructor ()
	{

  	} 
  	

}

class NavegacionAsep{
	constructor ()
	{
		this.estadoMenuMovil=false;		
		$(".Boton-Movil i").on("click",this.mostrarMenuMovil);
  	} 
  	mostrarMenuMovil()
	{		
		this.estadoMenuMovil=!this.estadoMenuMovil
		if(this.estadoMenuMovil)
		{
			$(".Navegacion-Menu-Movil").css("height","11em")
		}
		else
		{
			$(".Navegacion-Menu-Movil").css("height","0px")
		}
								
	}

}
class TituloAsepA{
	constructor()
	{

	}
}
class TituloAsep{
	constructor()
	{

	}
}
class InputSearchAsep{
	constructor()
	{

	}
}

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
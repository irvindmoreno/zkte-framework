class HeaderMiBlog{
	constructor()
	{
		this.estadoMenuMovil=false;		
		$(".header-contenedor-Nombres i").on("click",this.mostrarMenuMovil);
	}
	mostrarMenuMovil()
	{
		console.log(this.estadoMenuMovil)
		this.estadoMenuMovil=!this.estadoMenuMovil
		if(this.estadoMenuMovil)
		{
			$(".header-contenedor-Menu").css("height","9em")
		}
		else
		{
			$(".header-contenedor-Menu").css("height","0px")
		}
	}
}
//var headerMiBlog=new HeaderMiBlog()
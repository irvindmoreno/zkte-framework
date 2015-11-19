class TabsAsep{
	constructor(pestanias)
	{//$(".pestaniasPadre").children("div:nth-child(3)")
		//ocultando las pestañas(divs)
		$(".pestaniasPadre").children("div").css("display","none")
		//dejar por defecto el primero abierto
		$(".pestaniasPadre").children("div:nth-child(1)").css("display","block")
		//llamar a la funcion q muestra el div
		$(".TabsAsep-Pestania").on("click",this.mostrarDiv)
		$(".TabsAsepMovil-Pestania").on("click",this.mostrarDiv)
		//instanciando colores del item seleccionado por defecto
		this.backgroundSeleccionadoCirculo="#2ca7df";
		this.colorSeleccionadoTitulo="#2ca7df";
		this.colorContenidoSeleccionado="#303030"
		this.backgrounPestaniaSeleccionado="#dee0e2"
		//estos son los controles de desktop
		$(".TabsAsep-Pestania-Ttulo-Numero:first").css("background",this.backgroundSeleccionadoCirculo)
		$(".TabsAsep-Pestania-Ttulo-Texto:first").css("color",this.colorSeleccionadoTitulo)
		$(".TabsAsep-Pestania-Contenido:first").css("color",this.colorContenidoSeleccionado)
		$(".TabsAsep-Pestania:first").css("background",this.backgrounPestaniaSeleccionado)
		// estos son los controles para movil
		$(".TabsAsepMovil-Pestania-Numero:first").css("background",this.backgroundSeleccionadoCirculo)
		$(".TabsAsepMovil-Pestania-Ttulo:first").css("color",this.colorSeleccionadoTitulo)
		$(".TabsAsepMovil-Pestania:first").css("background",this.backgrounPestaniaSeleccionado)
	}
	mostrarDiv()
	{
		var pestania =parseInt($(this).attr("data"));
		// esto es para desktop
		$(".TabsAsep-Pestania").addClass("desactivarTab")
		$(".TabsAsep-Pestania").removeClass("activarTab")
		$(this).removeClass("desactivarTab")
		$(this).addClass("activarTab")
		// esto es para movil
		$(".TabsAsepMovil-Pestania").addClass("desactivarTab")
		$(".TabsAsepMovil-Pestania").removeClass("activarTab")
		$(this).removeClass("desactivarTab")
		$(this).addClass("activarTab")
		console.log(pestania)
		$(".pestaniasPadre").children("div").css("display","none")
		$(".pestaniasPadre").children("div:nth-child("+pestania+")").css("display","block")
	}
	setBackgroundSeleccionadoCirculo(background)
	{
		this.backgroundSeleccionadoCirculo=background;
	}
	setColorSeleccionadoTitulo(color)
	{
		this.colorSeleccionadoTitulo=color;
	}
	setColorContenidoSeleccionado(color)
	{
		this.colorContenidoSeleccionado=color;
	}
	setBackgrounPestaniaSeleccionado(background)
	{
		this.backgrounPestaniaSeleccionado=background;
	}
}
/*
	var pestanias=["pest-1","pest-2","pest-3"]
	var tabsAsep= new TabsAsep("pest")
	tabsAsep.setBackgroundSeleccionadoCirculo("#2ca7df")
	tabsAsep.setColorSeleccionadoTitulo("#2ca7df")
	tabsAsep.setColorContenidoSeleccionado("#303030")
	tabsAsep.setBackgrounPestaniaSeleccionado("#dee0e2")*/
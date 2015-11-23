
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

class HeaderAsep{
	constructor ()
	{

  	} 
  	

}



class ButtonAsepAzul{
	constructor()
	{

	}
}
class TituloAsep{
	constructor()
	{

	}
}
class RedesSociales{
	constructor()
	{

	}
}
//se crean estas varables porque con metodos como el onclick no funciona el this
var colorDesactivadoNumero;
var colorDesactivadoTitulo;
var colorDesactivadaLetraContenido;
var colorAcitvadoNumero;
var colorAcitvadoTitulo;
var colorAcitvadoLetraContenido;
class TabsAsep{
	constructor()
	{//$(".pestaniasPadre").children("div:nth-child(3)")
		//ocultando las pestañas(divs)
		$(".pestaniasPadre").children("div").css("display","none")
		//dejar por defecto el primero abierto
		$(".pestaniasPadre").children("div:nth-child(1)").css("display","block")
		//llamar a la funcion q muestra el div		
		$(".TabsAsepMovil-Pestania").on("click",this.mostrarDiv)
		//instanciando colores del item seleccionado por defecto cuando esta seleccionado
			this.backgroundSeleccionadoCirculo="#2ca7df";
			this.colorSeleccionadoTitulo="#2ca7df";
			this.colorContenidoSeleccionado="#303030";
			this.backgrounPestaniaSeleccionado="#dee0e2";
			colorAcitvadoNumero=this.backgroundSeleccionadoCirculo;
			colorAcitvadoTitulo=this.colorSeleccionadoTitulo;
			colorAcitvadoLetraContenido=this.colorContenidoSeleccionado
		//instanciando colores del item desactivado por defecto cuando esta seleccionado
			this.backgroundNumeroPestaniaDesactivada="#5D5C5C"
			this.backgroundTituloPestaniaDesactivada="#5D5C5C"
			this.colorContenidoPestaniaDesactivada="#777777"
			colorDesactivadoNumero=this.backgroundNumeroPestaniaDesactivada;
			colorDesactivadoTitulo=this.backgroundTituloPestaniaDesactivada;
			colorDesactivadaLetraContenido=this.colorContenidoPestaniaDesactivada;
		//estos son los css de la pestaña seleccionada por defecto de desktop
		$(".TabsAsep-Pestania-Ttulo-Numero:first").css("background",this.backgroundSeleccionadoCirculo)
		$(".TabsAsep-Pestania-Ttulo-Texto:first").css("color",this.colorSeleccionadoTitulo)
		$(".TabsAsep-Pestania-Contenido:first").css("color",this.colorContenidoSeleccionado)
		$(".TabsAsep-Pestania:first").css("background",this.backgrounPestaniaSeleccionado)
		// estos son los controles para movil
		$(".TabsAsepMovil-Pestania-Numero:first").css("background",this.backgroundSeleccionadoCirculo)
		$(".TabsAsepMovil-Pestania-Ttulo:first").css("color",this.colorSeleccionadoTitulo)
		$(".TabsAsepMovil-Pestania:first").css("background",this.backgrounPestaniaSeleccionado)

		$(".TabsAsep-Pestania").on("click",this.mostrarDiv)		
	}
	mostrarDiv(color)
	{
		var pestania =parseInt($(this).attr("data"));
		// esto es para desktop
			$(".TabsAsep-Pestania").addClass("desactivarTab")
			$(".TabsAsep-Pestania").removeClass("activarTab")
			$(this).removeClass("desactivarTab")
			$(this).addClass("activarTab")
			//vamos a pintar a los desactivados
				//para pc
				$(".desactivarTab .TabsAsep-Pestania-Ttulo-Numero").css("background",colorDesactivadoNumero)
				$(".desactivarTab .TabsAsep-Pestania-Ttulo-Texto").css("color",colorDesactivadoTitulo)
				$(".desactivarTab .TabsAsep-Pestania-Contenido").css("color",colorDesactivadaLetraContenido)
							
			//Pintemos al activado
				// para pc
				$(".activarTab .TabsAsep-Pestania-Ttulo-Numero").css("background",colorAcitvadoNumero)
				$(".activarTab .TabsAsep-Pestania-Ttulo-Texto").css("color",colorAcitvadoTitulo)
				$(".activarTab .TabsAsep-Pestania-Contenido").css("color",colorAcitvadoLetraContenido)
							
		// esto es para movil
			$(".TabsAsepMovil-Pestania").addClass("desactivarTab")
			$(".TabsAsepMovil-Pestania").removeClass("activarTab")
			$(this).removeClass("desactivarTab")
			$(this).addClass("activarTab")
			//vamos a pintar a los desactivados
				$(".desactivarTab .TabsAsepMovil-Pestania-Numero").css("background",colorDesactivadoNumero)
				$(".desactivarTab .TabsAsepMovil-Pestania-Titulo").css("color",colorDesactivadoTitulo)
			//Pintemos al activado
				$(".activarTab .TabsAsepMovil-Pestania-Numero").css("background",colorAcitvadoNumero)
				$(".activarTab .TabsAsepMovil-Pestania-Titulo").css("color",colorAcitvadoTitulo)
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
	setBackgroundPestaniaSeleccionado(background)
	{
		this.backgrounPestaniaSeleccionado=background;
	}
	setBackgroundNumeroPestaniaDesactivada(background)
	{
		this.backgroundNumeroPestaniaDesactivada=background;
	}
	setBackgroundTituloPestaniaDesactivada(background)
	{
		this.backgroundTituloPestaniaDesactivada=background;
	}
	setColorContenidoPestaniaDesactivada(background)
	{
		this.colorContenidoPestaniaDesactivada=background;
	}
}
//var tabsAsep= new TabsAsep()
class ModalAsep{
	constructor()
	{
		
	}
}
class InputFileAsep{
	constructor()
	{

	}
}



class SelectAsep{
	constructor(boton,idSelect,required)
	{		
		this.idSelect=idSelect;
		if(required)
		{
			$("."+boton).on("click",{idSelect: this.idSelect},this.validarSelect)
		}
	}
	validarSelect(event)
	{
		var idSelect=event.data.idSelect
		var optionInicial=$("."+idSelect).children('option').val()
		var optionSeleccionado=$("."+idSelect).val()	
		if(optionInicial==optionSeleccionado)
		{
			event.preventDefault();			
	        $('.'+idSelect).siblings('span').removeClass("InputInvalidado")
	        $('.'+idSelect).siblings('span').addClass("inputValido") 
		}
		else
		{
			$('.'+idSelect).siblings('span').removeClass("inputValido")
	        $('.'+idSelect).siblings('span').addClass("InputInvalidado");
		}
	}
}
//var selectAsep=new SelectAsep("btn","idSelect",true)




class InputTextAsep{
	constructor(boton,input)
	{
		this.input=input;
		this.boton=boton;
		this.comprobarInput()		
	}
	comprobarInput()
	{
		if(this.input=="EmailValidar")
		{
			$(".EmailValidar").on("keyup",{input: this.input},this.validarEmail)
			$("."+this.boton).on("click",{input: this.input},this.validarEmail)
		}
		else if(this.input=="NombreValidar")
		{
			$(".NombreValidar").on("keyup",{input: this.input},this.validarNombre)
			$("."+this.boton).on("click",{input: this.input},this.validarNombre)
		}
		else if(this.input=="ApellidoValidar")
		{
			$(".ApellidoValidar").on("keyup",{input: this.input},this.validarNombre)
			$("."+this.boton).on("click",{input: this.input},this.validarNombre)
		}
		else if(this.input=="ContraseniaValidar")
		{
			$(".ContraseniaValidar").on("keyup",{input: this.input},this.validarContrasenia)
			$("."+this.boton).on("click",{input: this.input},this.validarContrasenia)
		}
		else if(this.input=="DniValidar")
		{
			$(".DniValidar").on("keyup",{input: this.input},this.validarDNI)
			$("."+this.boton).on("click",{input: this.input},this.validarDNI)
		}
		else if(this.input=="TelefonoValidar")
		{
			$(".TelefonoValidar").on("keyup",{input: this.input},this.validarTelefono)
			$("."+this.boton).on("click",{input: this.input},this.validarTelefono)
		}
	}
	validarTelefono(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length
		console.log(tamanioInput);
		if(tamanioInput==12)
		{
			var expresion=$('.'+input).val().match(/^[0-9]+$/) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")	
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();	
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}
	}
	validarDNI(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length
		console.log(tamanioInput);
		if(tamanioInput==8)
		{
			var expresion=$('.'+input).val().match(/^[0-9]+$/) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {	 
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}
	}
	validarContrasenia(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length
		console.log(tamanioInput);
		if(tamanioInput>0 && tamanioInput <9)
		{
			var expresion=$('.'+input).val().match(/^[a-z0-9\sáéíóúñ.,_\-\&\/]+$/i) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {	
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}
	}
	validarEmail(event)
	{
		var input=event.data.input
		var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
 		var expresionaEvaluar=regex.test($('.'+input).val().trim())
	    //Se utiliza la funcion test() nativa de JavaScript
	    if (expresionaEvaluar) 
	    {
	    	$(this).css("border","1px solid #808080")
	    	$('.'+input).siblings('span').removeClass("inputValido")
	        $('.'+input).siblings('span').addClass("InputInvalidado")
	    }
	    else 
	    {	
	    	event.preventDefault();
	    	$(this).css("border","2px solid #2ca7df")
	    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")     
	    }
	}
	validarNombre(event)
	{
		var input=event.data.input
		var tamanioInput=$('.'+input).val().length
		if(tamanioInput>0 && tamanioInput <110)
		{
			var expresion=$('.'+input).val().match('^[a-zA-Z_áéíóúñ\s]*$') 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$(this).css("border","1px solid #808080")
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();
		    	$(this).css("border","2px solid #2ca7df")
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$(this).css("border","2px solid #2ca7df")
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}		
	}
}
var inputTextAsep = new InputTextAsep("btn-submit","EmailValidar");
//var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");

var inputTextAsep = new InputTextAsep("btn-submit","EmailValidar");
var inputTextAsep = new InputTextAsep("btn-submit","NombreValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ApellidoValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ContraseniaValidar");
var inputTextAsep = new InputTextAsep("btn-submit","DniValidar");
var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");




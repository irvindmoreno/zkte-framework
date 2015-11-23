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
class TituloAsep{
	constructor()
	{

	}
}
class VinietasAsep{
	constructor()
	{

	}
}
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
			$("."+this.boton).on("click",{input: this.input},this.validarEmail)
		}
		else if(this.input=="NombreValidar")
		{
			$("."+this.boton).on("click",{input: this.input},this.validarNombre)
		}
		else if(this.input=="ApellidoValidar")
		{
			$("."+this.boton).on("click",{input: this.input},this.validarNombre)
		}
		else if(this.input=="ContraseniaValidar")
		{
			$("."+this.boton).on("click",{input: this.input},this.validarContrasenia)
		}
		else if(this.input=="DniValidar")
		{
			$("."+this.boton).on("click",{input: this.input},this.validarDNI)
		}
		else if(this.input=="TelefonoValidar")
		{
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
		    		
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();	    	
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();	
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
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {	 
		    	event.preventDefault();
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
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
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {	
		    	event.preventDefault(); 
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
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
	    	
	    	$('.'+input).siblings('span').removeClass("inputValido")
	        $('.'+input).siblings('span').addClass("InputInvalidado")
	    }
	    else 
	    {	
	    	event.preventDefault(); 
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
		    	
		        $('.'+input).siblings('span').removeClass("inputValido")
	        	$('.'+input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();
		    	$('.'+input).siblings('span').removeClass("InputInvalidado")
	        	$('.'+input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
			$('.'+input).siblings('span').removeClass("InputInvalidado")
	        $('.'+input).siblings('span').addClass("inputValido")   
		}		
	}
}
//var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");
/*
var inputTextAsep = new InputTextAsep("btn-submit","EmailValidar");
var inputTextAsep = new InputTextAsep("btn-submit","NombreValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ApellidoValidar");
var inputTextAsep = new InputTextAsep("btn-submit","ContraseniaValidar");
var inputTextAsep = new InputTextAsep("btn-submit","DniValidar");
var inputTextAsep = new InputTextAsep("btn-submit","TelefonoValidar");*/



class ButtonAsepAzul{
	constructor()
	{

	}
}
class ModalAsep{
	constructor()
	{
		
	}
}
class RedesSociales{
	constructor()
	{

	}
}

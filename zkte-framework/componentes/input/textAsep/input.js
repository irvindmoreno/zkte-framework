class InputTextAsep{
	constructor(boton,input,divMensjaeError)
	{
		this.input=input;
		this.boton=boton;
		this.divMensjaeError=divMensjaeError;
		$("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
		$("#"+this.divMensjaeError).prepend('<i class="fa fa-exclamation-circle"></i>');
		
		//this.comprobarInput()		
	}
	validar(campo,nroCaracteresInicial,nroCaracteresFinal)
	{
		//console.log(campo)
		$('#'+this.input).attr("maxlength",nroCaracteresFinal)
		$("#"+this.input).on("keyup",{objeto:this,campo: campo,nroCaracteresInicial:nroCaracteresInicial,nroCaracteresFinal:nroCaracteresFinal},this.validando)
		$("."+this.boton).on("click",{objeto:this,campo: campo,nroCaracteresInicial:nroCaracteresInicial,nroCaracteresFinal:nroCaracteresFinal},this.validando)
	}
	validando(event)
	{
		//var input=event.data.input;
		var objeto=event.data.objeto;
		var campo=event.data.campo;
		var nroCaracteresInicial=event.data.nroCaracteresInicial;
		var nroCaracteresFinal=event.data.nroCaracteresFinal;
		//console.log(campo)
		switch(campo)
		{
			case "email":
				//console.log("es un email")
				objeto.validarEmail(event,nroCaracteresInicial,nroCaracteresFinal);
				break
			case "alfanumerico":
				//console.log("es un alfanumerico")
				objeto.validarAlfaNumerico(event,nroCaracteresInicial,nroCaracteresFinal);
				break
			case "numerico":
				objeto.validarNumero(event,nroCaracteresInicial,nroCaracteresFinal);
				break
			case "alfabeto":
				objeto.validarAlfabeto(event,nroCaracteresInicial,nroCaracteresFinal);
				break
			case "rangoCaracteres":
				objeto.validarRangoCaracteres(event,nroCaracteresInicial,nroCaracteresFinal);
				break
			case "no-requerido":
				objeto.validarNoRequerido(event,nroCaracteresInicial,nroCaracteresFinal);
				break
		}
			
		//var tamanioInput=$('.'+input).val().length
	}
	marcarComoError()
	{
		event.preventDefault();			
		//console.log("error fuera de rango")
		$('#'+this.input).addClass("bordeErrorInput")
		$('#'+this.input).siblings('span').removeClass("InputInvalidado")
	    $('#'+this.input).siblings('span').addClass("inputValido")
	    $("#"+this.divMensjaeError).removeClass("mensajeErrorInactivo")
	    $("#"+this.divMensjaeError).addClass("mensajeErrorActivo")
	}
	marcarComoCorrecto()
	{
		$('#'+this.input).removeClass("bordeErrorInput")
		$('#'+this.input).siblings('span').removeClass("inputValido")
	    $('#'+this.input).siblings('span').addClass("InputInvalidado");
	    $("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
	    $("#"+this.divMensjaeError).removeClass("mensajeErrorActivo")

	}
	validarNoRequerido(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		var tamanioInput=$('#'+this.input).val().length
		if(tamanioInput==0)
		{
			this.requerido="no";			
			this.marcarComoCorrecto();
		}
		else
		{
			this.requerido="si";
		}
	}
	validarRangoCaracteres(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		
		$('#'+this.input).attr("maxlength",nroCaracteresFinal)
		//console.log(nroCaracteresInicial)
		//console.log(nroCaracteresFinal)
		var tamanioInput=$('#'+this.input).val().length
		//console.log($('#'+this.input).val().length)
		if(tamanioInput<nroCaracteresInicial || tamanioInput>nroCaracteresFinal)
		{
			this.marcarComoError()
		}
		else
		{
			this.marcarComoCorrecto()
		}
	}
	validarAlfabeto(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		$('#'+this.input).attr("maxlength",nroCaracteresFinal)
		var tamanioInput=$('#'+this.input).val().length
		if(tamanioInput>=nroCaracteresInicial && tamanioInput<=nroCaracteresFinal)
		{
			//console.log("esta dentro del rango");
			var expresion=$('#'+this.input).val().match('^[a-zA-Z_áéíóúñ \s]*$') 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	this.marcarComoCorrecto()
		    }
		    else 
		    {
		    	this.marcarComoError()   	        
		    }
		}
		else
		{
			this.marcarComoError()
		}
		
	}
	validarNumero(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		$('#'+this.input).attr("maxlength",nroCaracteresFinal)
		var tamanioInput=$('#'+this.input).val().length
		if(this.requerido=="no" && tamanioInput==0)
		{

		}
		else
		{
			if(tamanioInput>=nroCaracteresInicial && tamanioInput<=nroCaracteresFinal)
			{
				var expresion=$('#'+this.input).val().match(/^[0-9]+$/) 
			    //Se utiliza la funcion test() nativa de JavaScript
			    if (expresion) 
			    {
			    	this.marcarComoCorrecto()
			    }
			    else 
			    {
			    	this.marcarComoError()  	        
			    }
			}
			else
			{
				this.marcarComoError()
			}
		}
		
		
	}
	validarAlfaNumerico(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		$('#'+this.input).attr("maxlength",nroCaracteresFinal)
		var tamanioInput=$('#'+this.input).val().length
		if(tamanioInput>=nroCaracteresInicial && tamanioInput<=nroCaracteresFinal)
		{
			var expresion=$('#'+this.input).val().match(/^[a-z0-9\sáéíóúñ.,_\-\&\/]+$/i)
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	this.marcarComoCorrecto()
		    }
		    else 
		    {
		    	this.marcarComoError() 
	        }
		}
		else
		{
			this.marcarComoError() 
		}
		
	}	
	validarEmail(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		$('#'+this.input).attr("maxlength",nroCaracteresFinal)
		var tamanioInput=$('#'+this.input).val().length
		if(tamanioInput>=nroCaracteresInicial && tamanioInput<=nroCaracteresFinal)
		{
			//console.log(this.input);
			var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	 		var expresionaEvaluar=regex.test($('#'+this.input).val().trim())
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresionaEvaluar) 
		    {
		    	//console.log("cumple")
		    	this.marcarComoCorrecto()
		    }
		    else 
		    {	
		    	this.marcarComoError()    
		    }
		    //console.log("validando el email con id: "+this.input);
		}
		else
		{
			this.marcarComoError()
		}
		
	}

}
/*
var inputTextAsep = new InputTextAsep("btn-submit","myId","idDivDondeMUestroElError");
	inputTextAsep.validar("email",0,8);*/




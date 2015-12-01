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

class InputTextAsep{
	constructor(boton,input)
	{
		this.input=input;
		this.boton=boton;
		//this.requerido="si"
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
	validarNoRequerido(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		
		var tamanioInput=$('#'+this.input).val().length
		if(tamanioInput==0)
		{
			this.requerido="no";
			$('#'+this.input).css("border","1px solid #808080")
		    $('#'+this.input).siblings('span').removeClass("inputValido")
	        $('#'+this.input).siblings('span').addClass("InputInvalidado");
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
			event.preventDefault();			
			console.log("error fuera de rango")
		    $('#'+this.input).css("border","2px solid #2ca7df")
		    $('#'+this.input).siblings('span').removeClass("InputInvalidado")
	        $('#'+this.input).siblings('span').addClass("inputValido")
		}
		else
		{
			console.log("coorecto dentro de rango")
			$('#'+this.input).css("border","1px solid #808080")
		    $('#'+this.input).siblings('span').removeClass("inputValido")
	        $('#'+this.input).siblings('span').addClass("InputInvalidado");
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
		    	//console.log("correcto alfabeto")
		    	$('#'+this.input).css("border","1px solid #808080")
		        $('#'+this.input).siblings('span').removeClass("inputValido")
	        	$('#'+this.input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();
		    	//console.log("error alfabeto")
		    	$('#'+this.input).css("border","2px solid #2ca7df")
		    	$('#'+this.input).siblings('span').removeClass("InputInvalidado")
	        	$('#'+this.input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
		    //console.log("fuera de rango")
		    $('#'+this.input).css("border","2px solid #2ca7df")
		    $('#'+this.input).siblings('span').removeClass("InputInvalidado")
	        $('#'+this.input).siblings('span').addClass("inputValido") 
		}
		
	}
	validarNumero(event,nroCaracteresInicial,nroCaracteresFinal)
	{
		$('#'+this.input).attr("maxlength",nroCaracteresFinal)
		var tamanioInput=$('#'+this.input).val().length
		if(tamanioInput>=nroCaracteresInicial && tamanioInput<=nroCaracteresFinal)
		{
			var expresion=$('#'+this.input).val().match(/^[0-9]+$/) 
		    //Se utiliza la funcion test() nativa de JavaScript
		    if (expresion) 
		    {
		    	$('#'+this.input).css("border","1px solid #808080")
		        $('#'+this.input).siblings('span').removeClass("inputValido")
	        	$('#'+this.input).siblings('span').addClass("InputInvalidado");
		    }
		    else 
		    {
		    	event.preventDefault();
		    	$('#'+this.input).css("border","2px solid #2ca7df")	
		    	$('#'+this.input).siblings('span').removeClass("InputInvalidado")
	        	$('#'+this.input).siblings('span').addClass("inputValido")   	        
		    }
		}
		else
		{
			event.preventDefault();
		    //console.log("fuera de rango")
		    $('#'+this.input).css("border","2px solid #2ca7df")
		    $('#'+this.input).siblings('span').removeClass("InputInvalidado")
	        $('#'+this.input).siblings('span').addClass("inputValido") 
		}
		
	}
	validarAlfaNumerico(event,nroCaracteresInicial,nroCaracteresFinal)
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
				var expresion=$('#'+this.input).val().match(/^[a-z0-9\sáéíóúñ.,_\-\&\/]+$/i)
			    //Se utiliza la funcion test() nativa de JavaScript
			    if (expresion) 
			    {
			    	$('#'+this.input).css("border","1px solid #808080")
			        $('#'+this.input).siblings('span').removeClass("inputValido")
		        	$('#'+this.input).siblings('span').addClass("InputInvalidado");
			    }
			    else 
			    {
			    	event.preventDefault();
			    	$('#'+this.input).css("border","2px solid #2ca7df")
			    	$('#'+this.input).siblings('span').removeClass("InputInvalidado")
		        	$('#'+this.input).siblings('span').addClass("inputValido")  
		        }
			}
			else
			{
				event.preventDefault();
			    //console.log("fuera de rango")
			    $('#'+this.input).css("border","2px solid #2ca7df")
			    $('#'+this.input).siblings('span').removeClass("InputInvalidado")
		        $('#'+this.input).siblings('span').addClass("inputValido") 
			}
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
		    	$('#'+this.input).css("border","1px solid #808080")
		    	$('#'+this.input).siblings('span').removeClass("inputValido")
		        $('#'+this.input).siblings('span').addClass("InputInvalidado")
		    }
		    else 
		    {	
		    	//console.log("no cumple")
		    	event.preventDefault();
		    	$('#'+this.input).css("border","2px solid #2ca7df")
		    	$('#spanError-'+this.input).removeClass("InputInvalidado")
		        $('#spanError-'+this.input).addClass("inputValido")     
		    }
		    //console.log("validando el email con id: "+this.input);
		}
		else
		{
			event.preventDefault();
		    //console.log("fuera de rango")
		    $('#'+this.input).css("border","2px solid #2ca7df")
		    $('#'+this.input).siblings('span').removeClass("InputInvalidado")
	        $('#'+this.input).siblings('span').addClass("inputValido") 
		}
		
	}

}
/*
var inputTextAsep = new InputTextAsep("btn-submit","myId");
	inputTextAsep.validar("email",0,8);*/



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

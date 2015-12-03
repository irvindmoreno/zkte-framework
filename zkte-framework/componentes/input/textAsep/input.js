class InputTextAsep{
	constructor(boton,input,divMensjaeError,conteniDoMensajeError)
	{
		this.input=input;
		this.boton=boton;
		this.divMensjaeError=divMensjaeError;
		this.conteniDoMensajeError=conteniDoMensajeError
		$("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
		//$("#"+this.divMensjaeError).html('<i class="fa fa-exclamation-circle"></i>'+this.conteniDoMensajeError);
		
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
	mostrarMensajeError()
	{
		$("#"+this.divMensjaeError).removeClass("mensajeErrorInactivo")
	    $("#"+this.divMensjaeError).addClass("mensajeErrorActivo")
		$("#"+this.divMensjaeError).html('<i class="fa fa-exclamation-circle"></i>'+this.conteniDoMensajeError);
	}
	marcarComoError()
	{
		event.preventDefault();			
		//console.log("error fuera de rango")
		$('#'+this.input).addClass("bordeErrorInput")
		$('#'+this.input).siblings('span').removeClass("InputInvalidado")
	    $('#'+this.input).siblings('span').addClass("inputValido")	    
		this.estadoValidado=false
	}
	marcarComoCorrecto()
	{
		$('#'+this.input).removeClass("bordeErrorInput")
		$('#'+this.input).siblings('span').removeClass("inputValido")
	    $('#'+this.input).siblings('span').addClass("InputInvalidado");
	    //$("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
	    //$("#"+this.divMensjaeError).removeClass("mensajeErrorActivo")
	    this.estadoValidado=true

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
		if(this.requerido=="no" && tamanioInput==0)
		{

		}
		else
		{
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
	validarEmail(event,nroCaracteresInicial,nroCaracteresFinal)
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

}
/* Ejemplo:
var rucInput= new InputTextAsep("guardarPasoDos","rucInput","mensajeErrorForm","Debe completar los campos requeridos");
    	rucInput.validar("numerico",11,11)
    var nombreComercialInput= new InputTextAsep("guardarPasoDos","nombreComercialInput","mensajeErrorForm","Debe completar los campos requeridos");
        nombreComercialInput.validar("alfanumerico",1,100)
    var paginaWebInput= new InputTextAsep("guardarPasoDos","paginaWebInput","mensajeErrorForm","Debe completar los campos requeridos");
        paginaWebInput.validar("alfanumerico",0,200)
        paginaWebInput.validar("no-requerido",0,200)
    var facebookInput= new InputTextAsep("guardarPasoDos","facebookInput","mensajeErrorForm","Debe completar los campos requeridos");
        facebookInput.validar("alfanumerico",0,200)
        facebookInput.validar("no-requerido",0,200)    
    var twiterInput= new InputTextAsep("guardarPasoDos","twiterInput","mensajeErrorForm","Debe completar los campos requeridos");
        twiterInput.validar("alfanumerico",0,200)
        twiterInput.validar("no-requerido",0,200)
    var linkedinInput= new InputTextAsep("guardarPasoDos","linkedinInput","mensajeErrorForm","Debe completar los campos requeridos");
        linkedinInput.validar("alfanumerico",0,200)
        linkedinInput.validar("no-requerido",0,200)
    var emailDeContactoInput=new InputTextAsep("guardarPasoDos","emailDeContactoInput","mensajeErrorForm","Debe completar los campos requeridos");
        emailDeContactoInput.validar("email",1,100)

    // mostrando el mensaje de error para ello verificamos que todos los inputs hayan retornado true
    $(".guardarPasoDos").click(function(){
        if(emailDeContactoInput.estadoValidado && rucInput.estadoValidado && nombreComercialInput.estadoValidado && paginaWebInput.estadoValidado && facebookInput.estadoValidado && twiterInput.estadoValidado && linkedinInput.estadoValidado)
            {
            }
            else
            {
                rucInput.mostrarMensajeError();
                nombreComercialInput.mostrarMensajeError();
                paginaWebInput.mostrarMensajeError();
                facebookInput.mostrarMensajeError();
                twiterInput.mostrarMensajeError();
                linkedinInput.mostrarMensajeError();
                emailDeContactoInput.mostrarMensajeError();
            }
    })*/
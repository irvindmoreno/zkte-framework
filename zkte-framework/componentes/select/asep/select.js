class SelectAsep{
	constructor(boton,idSelect,required,divMensjaeError,conteniDoMensajeError)
	{		
		this.idSelect=idSelect;
		this.divMensjaeError=divMensjaeError;
		$("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
		$("#"+this.divMensjaeError).html('<i class="fa fa-exclamation-circle"></i>'+conteniDoMensajeError);
		$('.'+this.idSelect).on("change",{idSelect: this.idSelect,divMensjaeError: this.divMensjaeError},this.validarSelect)
		if(required)
		{
			$("."+boton).on("click",{idSelect: this.idSelect,divMensjaeError: this.divMensjaeError},this.validarSelect)
		}
	}
	validarSelect(event)
	{		
		var idSelect=event.data.idSelect
		var divMensjaeError=event.data.divMensjaeError
		var optionInicial=$("."+idSelect).children('option').val()
		var optionSeleccionado=$("."+idSelect).val()	
		if(optionInicial==optionSeleccionado)
		{
			event.preventDefault();			
	        $('.'+idSelect).siblings('span').removeClass("InputInvalidado")
	        $('.'+idSelect).siblings('span').addClass("inputValido");
	        $('.'+idSelect).addClass('selectError');
	        $('.'+idSelect).removeClass('selectCorrecto');
	        //console.log("quitando mensajeErrorInactivo")
	        $("#"+divMensjaeError).removeClass("mensajeErrorInactivo")
	    	$("#"+divMensjaeError).addClass("mensajeErrorActivo")
	    	
		}
		else
		{
			//alert("si pe")
			$('.'+idSelect).siblings('span').removeClass("inputValido")
	        $('.'+idSelect).siblings('span').addClass("InputInvalidado");
	        $('.'+idSelect).removeClass('selectError');
	        $('.'+idSelect).addClass('selectCorrecto');
	        console.log("quitando mensajeErrorActivo")
	        $("#"+divMensjaeError).removeClass("mensajeErrorActivo")
	    	$("#"+divMensjaeError).addClass("mensajeErrorInactivo")
	    	
		}
	}
}
//var selectAsep=new SelectAsep("btn","idSelect",true,"divMensjaeError")

class RadioButtonAsep{
	constructor(inputRadio,button,divMensjaeError)
	{
		this.inputRadio=inputRadio
		this.button=button
		$("."+this.inputRadio).on("change",this.validarRadio)
		$("."+this.button).on("click",{objeto:this},this.validarRadio)
		this.divMensjaeError=divMensjaeError;
		$("#"+this.divMensjaeError).addClass("mensajeErrorInactivo")
		$("#"+this.divMensjaeError).prepend('<i class="fa fa-exclamation-circle"></i>');

	}
	marcarComoCorrecto()
	{

	}
	marcarComoError()
	{
		alert("error")
		event.preventDefault();			
		//console.log("error fuera de rango")
		$('#'+this.input).addClass("bordeErrorInput")
		$('#'+this.input).parent().siblings('span').removeClass("InputInvalidado")
	    $('#'+this.input).parent().siblings('span').addClass("inputValido")
	    $("#"+this.divMensjaeError).removeClass("mensajeErrorInactivo")
	    $("#"+this.divMensjaeError).addClass("mensajeErrorActivo")
	}
	validarRadio(event)
	{
		var objeto=event.data.objeto;
		console.log("detectando cambios")
		if($(this).is(':checked'))
		{
			alert("hola");
		}
		else
		{
			objeto.marcarComoError()
		}
	}
}
var miradio = new RadioButtonAsep("miClaseDeRadio","botonAValidar")
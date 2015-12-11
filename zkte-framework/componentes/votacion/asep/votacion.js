class VotacionAsep{
	constructor()
	{
		this.activarHover();
		$('.fa-star').on("click",this.activarEstrellas)
	}
	activarEstrellas()
	{
		//console.log($(this).attr("id"));
		var id=$(this).attr("id");
			  	$(".fa-star").removeClass("starActivadaForever");
			  	//console.log($(this).attr("id"));
			  	if(id=="votacion-1")
			  	{
			  		$("#votacion-1").addClass("starActivadaForever");
			  	}
			  	else if(id=="votacion-2")
			  	{
			  		$("#votacion-1").addClass("starActivadaForever");
			  		$("#votacion-2").addClass("starActivadaForever");
			  	}
			  	else if(id=="votacion-3")
			  	{
			  		$("#votacion-1").addClass("starActivadaForever");
			  		$("#votacion-2").addClass("starActivadaForever");
			  		$("#votacion-3").addClass("starActivadaForever");
			  	}
			  	else if(id=="votacion-4")
			  	{
			  		$("#votacion-1").addClass("starActivadaForever");
			  		$("#votacion-2").addClass("starActivadaForever");
			  		$("#votacion-3").addClass("starActivadaForever");
			  		$("#votacion-4").addClass("starActivadaForever");
			  	}
			  	else if(id=="votacion-5")
			  	{
			  		$("#votacion-1").addClass("starActivadaForever");
			  		$("#votacion-2").addClass("starActivadaForever");
			  		$("#votacion-3").addClass("starActivadaForever");
			  		$("#votacion-4").addClass("starActivadaForever");
			  		$("#votacion-5").addClass("starActivadaForever");
			  	}
	}
	activarHover()
	{

		$('.fa-star').hover(
			  function() 
			  {
			  	//console.log($(this).attr("id"));
			  	var id=$(this).attr("id");
			  	$(".fa-star").removeClass("starActivada");
			  	//console.log($(this).attr("id"));
			  	if(id=="votacion-1")
			  	{
			  		$("#votacion-1").addClass("starActivada");
			  	}
			  	else if(id=="votacion-2")
			  	{
			  		$("#votacion-1").addClass("starActivada");
			  		$("#votacion-2").addClass("starActivada");
			  	}
			  	else if(id=="votacion-3")
			  	{
			  		$("#votacion-1").addClass("starActivada");
			  		$("#votacion-2").addClass("starActivada");
			  		$("#votacion-3").addClass("starActivada");
			  	}
			  	else if(id=="votacion-4")
			  	{
			  		$("#votacion-1").addClass("starActivada");
			  		$("#votacion-2").addClass("starActivada");
			  		$("#votacion-3").addClass("starActivada");
			  		$("#votacion-4").addClass("starActivada");
			  	}
			  	else if(id=="votacion-5")
			  	{
			  		$("#votacion-1").addClass("starActivada");
			  		$("#votacion-2").addClass("starActivada");
			  		$("#votacion-3").addClass("starActivada");
			  		$("#votacion-4").addClass("starActivada");
			  		$("#votacion-5").addClass("starActivada");
			  	}
			    //if($(this).attr("id"))
			  },
			  function()
			  {
			  	$(".fa-star").removeClass("starActivada");
			  }
			);
		/*
			$('.estrellitas').hover(
			  function() 
			  {
			    $('.fa-star').hover(
				  function() {
				    $(this).addClass("starActivada")
				  });
			  },
			  function() {
			    $(".fa-star").removeClass("starActivada");
			  }
			);*/
		
		  

	}
}
//var votacion=new VotacionAsep();
class HeaderCuda{
	constructor()
	{
		this.estadoMenuMovil=false;		
		$(".header-Cuda-Nav-Titulo i").on("click",this.mostrarMenuMovil);
	}
	mostrarMenuMovil()
	{
		console.log(this.estadoMenuMovil)
		this.estadoMenuMovil=!this.estadoMenuMovil
		if(this.estadoMenuMovil)
		{
			$(".header-Cuda-Nav-Menu").css("display","block")
		}
		else
		{
			$(".header-Cuda-Nav-Menu").css("display","none")
		}
	}
}

class TituloService{
	constructor()
	{

	}
}
class PostCuda{
	constructor()
	{

	}
}

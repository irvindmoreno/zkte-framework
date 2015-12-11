<?php 
/*
AUTOLOAD: "spl_autoload_register" lo que va a hacer es auto-cargar clases dsde una funcion donde intentemos cargar los archivos donde se encuentran esas clases.
*/

	
	function autoload($clase)
	{
		include $clase.".php";
	}

	spl_autoload_register('autoload');
	Statico::bienvenida();
 ?>
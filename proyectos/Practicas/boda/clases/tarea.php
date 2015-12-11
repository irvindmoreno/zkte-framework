<?php 

	
	class Persona
	{
		public $nombre;
		public $edad;
		
		public function __construct($nombre)
		{
			$this->nombre=$nombre;
		}
	}

	Persona= new Persona ("Daniel");
 ?>
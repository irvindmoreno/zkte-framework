<?php 

	class Hombre
	{
		public $nombre;
		
		public function __construct($nombre)
		{
			$this->nombre=$nombre;
		}
	}

	class Mujer
	{
		public $nombre;
		
		public function __construct($nombre)
		{
			$this->nombre=$nombre;
		}
	}

$per= new Hombre("Irvin");
$per1= new Mujer("YESENIA");
echo $per->nombre;
echo $per1->nombre;


 ?>
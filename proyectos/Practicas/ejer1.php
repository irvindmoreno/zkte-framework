<?php 

//ATRIBUTOS : simples, variables o Arrays 
			// Def. del tipo del Atributo (public, private, protected)
//METODOS: Aaccede a atributos con: this->nombre
			//podemos acceder a otros metodos con $this o self::

/**
* 
*/
class Persona
{
	public $nombre= [];
	public $apellido= [];
	
	public function guardar($nombre, $apellido)
	{
		$this->nombre=$nombre;
		$this->apellido=$apellido;
	}

	public function mostrar()
	{
		echo $this->nombre[1];
		echo $this->apellido;
	}
}

$per = new Persona ();

/*$per->guardar("Juan", "Davila");  
$per->mostrar();

//tb puedo llamar a los atributos a traves de un objeto :)
$per->nombre ="Daniel Irvin";
$per->apellido ="Moreno";
$per->mostrar();*/


// echo $per->apellido;


//guardar nombre y apellido como ARRAY
$per->guardar(["Daniel","Irvin"],["MOreno","Chavez"]);
echo $per->mostrar(1);


 ?>
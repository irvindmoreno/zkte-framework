<?php 
/*
USO DE TRAITS: fragmentos de codigo que pueden ser usados en clases, los cuales puedn tener un poco de similitud con una clase. Las clases pueden permitir usar tantos traits sean posibles simplemente deparandolos con una "," estaria funcionando de manera correcta.
un TRAIT es similar a una clase, pero con el unico objetivo de agrupar funcioalidades muy especificas y de una manera coherente.
No se pueden isntanciar directamente un TRAIT .
Es por tanto un añadido a la herencia tradicional y habilitada composicion horizontal de compartimientos; es decir permite combinar miembros de clases sin tener q usar Herencia.
*/
	
	trait Persona2 
	{
		public $nombre;

		public function mostrarNombre()
		{
			echo $this->nombre;
		}
		abstract function asignarNombre($nombre);
	}
	trait Trabajador
	{
		public function Hola()
		{
			echo "es del Trabajador";
		}
	}

	class Persona
	{
		use Persona2, Trabajador;

		public function asignarNombre($nombre)
		{
			$this->nombre=$nombre;
		}
		public function Hola()
		{
			echo "es de la clase";
		}
		
	}
	
	$persona = new Persona();
	$persona->asignarNombre("Twin");
	$persona->mostrarNombre();
	$persona->Hola();

 ?>
<?php 
	/* CLASE ABSTRACTA: tiene pr objetivo agrupar atributus y metodos que luego seran heredados p
	por otras subclases. 
	Las clases definidas como ABSTRACTAS no se pueden INSTANCIAR y cualquier clase que contiene almenos
	un METODOS ABSTRACTO debe ser definida como tal , los Metodos definidos como ABSTRACTOS simplemente
	declaran la firma del metodo pero no pueden definir la implementacion.
	*/
	/* METODOS ABSTRACTOS: si queremos que las subclases implementen comportamientos obligatoriamente 
	podemos definir metodos ABSTRACTOS. Un metodo ABSTRACTO se declara en una clase pero no se implementa.
	*/

	abstract class Molde
	{
		abstract public function ingresarNombre($nombre);
		abstract public function obtenerNombre(); 
	}

	class Persona extends Molde
	{
		private $mensaje = "HOla twincitos :)";
		private $nombre;
		
		public function mostrar()
		{
			echo $this->mensaje;
		}
		public function ingresarNombre($nombre, $username="cf")
		{
			$this->nombre = $nombre.$username;
		}
		public function obtenerNombre()
		{
			echo $this->nombre;
		}
	}

	$obj = new Persona();
	$obj->ingresarNombre("Carlos");
	$obj->obtenerNombre();

 ?>
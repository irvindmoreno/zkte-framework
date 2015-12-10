<?php 
/*Son simples propiedades que podemos añadirles a nuestros metodos y atributos de nuestra CLASE
estas nos ayudaran con los accesos y la extraccion
PUBLIC: puede acceder culquiera , donde sea
PRIVATE:solo puede ser llamado desde otro metodo de la clase, NO podemos llamar a un metdo privado desde donde definimos un obj.
PROTECTED: puede ser accedido por la CLASE, por todas sus SUBCLASES pero no por los objts q def en dichas clases
*/

class Vehiculo
{
	//Atributos
	public $motor=false;
	public $marca;
	public $color;

	//Metodos
	public function estado ( )
	{
		
		if ($this->motor) {
			echo "El motor esta encendido<br>";
		}
		else {
			echo "El motor esta apagado<br>";
		}
		
	}
	public function encender()
	{
		if ($this->motor) {
			echo "Cuidado, el motor ya esta prendido <br>";
		}
		else {
			echo "EL motor ahora esta encendido<br>";
			$this->motor = true;
		}
	}
}

class Moto extends Vehiculo
{
	
	public function estadoMoto()
	{
		$this->estado();
	}
}

class CuatriMoto extends Moto
{
	
}

/*$moto = new CuatriMoto();
$moto->estado();*/
$veh = new Vehiculo();
//$veh->estado();
$motito = new Moto();
$motito->estado();
$cuatri = new Cuatrimoto();


 ?>
<?php 
/*
Las INTERFACES: de objetos permiten crear codigo con el cual especificamos que metodos deben ser implementados 
por una clase.
Las interfaces son definidas utilizando la palabra "interface", de la misma forma que con clases Estandar, de la misma
forma que con clases estandar, pero sin metodos que tengan su contenido definido.
Todos los metodos declarados en una Interfaz deben ser publicos

IMPLEMENTS: operador para implementar una interfaz.Todos los metodos en una nterfaz deben ser implementados de la clase.
Las clases pueden implementar mas de una interfaz.
EXTENDS: 

*/

interface Auto {
	public function encender ();
	public function apagar ();
}

interface gasolina extends Auto{
	public function vaciarTanque();
	public function llenarTanque($cant);
}

class Deportivo implements gasolina
{
	private $estado = false;
	private $tanque = 0;

	public function estado()
	{
		if ($this->estado) 
		{
			echo "El auto esta encendido y tiene<br>".$this->tanque."de litros";
		}
		else
		{
			echo "el auto esta apagado<br>";
		}
	}

	
	public function encender()
	{
		if ($this->estado) 
		{
			echo "No pueds encender el auto dos veces <br>";
		}
		else 
		{
			if ($this->tanque<=0) 
			{
				echo "Usted no puede encender el auto , porque el tanque esta vacio";
			}
			else 
			{
				echo "Auto encendido<br>";
				$this->estado= true;
			}
			
		}
	}
	
	public function apagar()
	{
		if ($this->estado) 
		{
			echo "Auto apagado <br>";
			$this->estado=false;
		}
		else 
		{
			echo "Auto ya esta apagado<br>";
			//$this->estado= true;
		}
	}
	
	public function vaciarTanque()
	{
		$this->tanque = 0;
	}
	
	public function llenarTanque($cant)
	{
		$this->tanque = $cant;
	}
	
	
	public function recorrer($km)
	{
		if ($this->estado) 
		{
			$reducir = $km/ 3;
			$this->tanque = $this->tanque - $reducir;
			if ($this->tanque <=0) 
			{
				$this->estado =false;
			}
		}
		else {
			echo "auto esta apagado";
		}
	}
}
$obj = new Deportivo();
$obj->llenarTanque(100);
$obj->encender();
$obj->recorrer(300);
$obj->estado();
$obj->llenarTanque(50);
$obj->encender();
$obj->estado();


 ?>


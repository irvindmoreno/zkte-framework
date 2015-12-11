<?php
class Persona{
	public $nombre;
	//public $fecchaNacimiento;
	public $sexo;
	public $estado;
	public $pareja=null;
	public function __construct($nombre)
	{
		$this->nombre=$nombre;
		$this->estado="Soltero";
	}

}

class Hombre extends Persona{
	
	public $madurez="Inmaduro";

	public function pedirMano($mujer)
	{
		$respuesta=$mujer->responderPropuesta($this);
		if($respuesta)
		{
			$this->pareja=$mujer;
			$this->estado="Comprometido";
			//$this->pareja->estado="Comprometido";
			//$mujer->estado="Estoy en duda";
		}
	}
	public function Madurar()
	{
		$this->madurez="Maduro";
	}
}


class Mujer extends Persona{
	
	
	public function responderPropuesta($pretendiente)
	{
		if($pretendiente->madurez=="Maduro")
		{
			echo "Si acepto ser tu twincita de por vida</br>";
			$this->pareja=$pretendiente;
			$this->estado="Comprometida";
			return true;
		}
		else
		{
			echo "Lo sentimos en estos momentos no podemos atenderle</br>";
			return false;
		}
	}
}
class Pastor extends Persona{
	
	public function realizarBoda($hombre,$mujer)
	{
		if($hombre->pareja->nombre==$mujer->nombre && $mujer->pareja->nombre==$hombre->nombre)
		{
			echo "Ustedes se acaban de casar y se amaran por siempre </br>";
			$hombre->estado="Casado";
			$mujer->estado="Casada";
		}
		else
		{
			echo "Esta twincita es solo de su twincito, y tu no tienes nada que hacer aqui </br>";
		}
	}
}
$daniel= new Hombre("Twincito");
$amelia= new Mujer("Twincita");
$robertito= new Hombre("Robertito");
$donelly=new Pastor("Alex Donelly");

echo $daniel->estado."</br>";
echo $amelia->estado."</br>";

$daniel->Madurar();
$daniel->pedirMano($amelia);

echo $daniel->estado."</br>";
echo $amelia->estado."</br>";

$donelly->realizarBoda($robertito,$amelia);

echo $daniel->estado."</br>";
echo $amelia->estado."</br>";

/*


*/

?>
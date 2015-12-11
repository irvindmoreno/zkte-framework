<?php 
/*metodo ESTATIC: pertenece a la clase pero no puede acceder a los atributos de una isntancia.
	La caracteristica ffundamental es q un metoso estatico se puede llamar sin tener que crear un obj de dicha clase.
	UNa propiedad declarada como static no puede ser accedida con u obje de clase instanciado(aunq un metodo STATIC si lo puede hacer)
***Un Metodo STATIC no puede acceder a los atibutos de la clase.
****INdicamos primero el nombre de la clase, luego el operador "::" y por ultimo indicamos el nombre del metodo STATIC
a llamar.
****Las Propiedades STATIC no pueden ser accedidas a traves del obj utilizando el operador(->)
*/
	
	class Statico
	{
		//Atributos
		public $nombre="codigo facilito";
		public static $url="www.sss";

		//Metodos
		public static function bienvenida()
		{
			echo "Bienvenidos a <b>"."<br> La pagina es".Statico::$url;
		}
	}
	/*$pag = new Pagina ();
	$pag->bienvenida();*/
	 //Pagina::bienvenida();

 ?>
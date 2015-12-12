<?php 
	class Pokemon
	{
		public $nombre;
		public $tipo;
		public $ataque;
		public $vida;
		public $estado="Libre";
		public $salud="sano";
		public $vidaOriginal;
		
		public function __construct($nombre, $tipo, $ataque, $vida)
		{
			$this->nombre=$nombre;
			$this->tipo=$tipo;
			$this->ataque=$ataque;
			$this->vida=$vida;
			$this->vidaOriginal=$vida;
		}
		public function atacar($pokemonRival)
		{
			$pokemonRival->vida=$pokemonRival->vida-$this->ataque;
			if ($pokemonRival->vida<$pokemonRival->vidaOriginal) 
			{
				$pokemonRival->salud="enfermo";
			}
		}
	}
	class Persona
	{
		public $nombre;
		

		public function __construct($nombre)
		{
			$this->nombre=$nombre;
		}
	}
	class Entrenador extends Persona
	{
		public $pokemon;

		public function capturarPokemon($pokemon)
		{
			if ($pokemon->estado!="Libre") 
			{
				echo "este ".$pokemon->nombre." ya esta ".$pokemon->estado." y no puede ser capturado nuevamente<br><br>";
			}
			else
			{
				$this->pokemon=$pokemon;
				$pokemon->estado="Domesticado";
			}	
		}
		public function ordenarAtaqueAlPokemonDelRIval($pokemonDelRival)
		{
			$this->pokemon->atacar($pokemonDelRival);
		}
		public function llamarAlMedico($medico)
		{
			$medico->curarPokemon($this->pokemon);
		}
	}
	class Medico extends Persona
	{
		//public $pokemon;

		/*/public function curarPokemon($pokemonEnfermo)
		{
			if ($pokemonEnfermo->salud=="enfermo") 
			{
				$pokemonEnfermo->vida=$pokemonEnfermo->vida+50;
				$pokemonEnfermo->salud="sano";
			}
		}*/
		public function curarPokemon($pokemonEnfermo)
		{
			if ($pokemonEnfermo->salud=="enfermo") 
			{
				$pokemonEnfermo->vida=$pokemonEnfermo->vidaOriginal;
				$pokemonEnfermo->salud="sano";
			}
		}

		
	}

	$charmander=new Pokemon("charmander","fuego",8, 90);
	echo $charmander->nombre."<br>";
	echo $charmander->tipo."<br>";
	echo $charmander->ataque."<br>";
	echo $charmander->vida."<br>";
	echo $charmander->estado."<br><br>";

	$rapidash=new Pokemon("rapidash","fuego",14, 180);
	echo $rapidash->nombre."<br>";
	echo $rapidash->tipo."<br>";
	echo $rapidash->ataque."<br>";
	echo $rapidash->vida."<br>";
	echo $rapidash->estado."<br><br>";

	$daniel=new Entrenador("Daniel");
	$daniel->capturarPokemon($charmander);
	echo $daniel->nombre."<br>";
	echo $daniel->pokemon->nombre."<br>";
	echo $daniel->pokemon->tipo."<br>";
	echo $daniel->pokemon->ataque."<br>";
	echo $daniel->pokemon->vida."<br>";
	echo $daniel->pokemon->estado."<br><br>";
	//echo $charmander->estado."<br><br>";

	$yesenia=new Entrenador("Yesenia");
	$yesenia->capturarPokemon($rapidash);
	echo $yesenia->nombre."<br>";
	echo $yesenia->pokemon->nombre."<br>";
	echo $yesenia->pokemon->tipo."<br>";
	echo $yesenia->pokemon->ataque."<br>";
	echo $yesenia->pokemon->vida."<br>";
	echo $yesenia->pokemon->estado."<br><br>";

	$robert=new Entrenador("Junior Downey JR");
	echo $robert->nombre."<br>";
	$robert->capturarPokemon($rapidash);
	

	/*echo $rapidash->vida."<br>";
	$charmander->atacar($rapidash);
	echo "Nueva vida es ".$rapidash->vida."<br>";

	echo $charmander->vida."<br>";
	$rapidash->atacar($charmander);
	echo "Nueva vida es ".$charmander->vida."<br>";
	*/

	echo $yesenia->pokemon->vida."<br>";
	$daniel->ordenarAtaqueAlPokemonDelRIval($yesenia->pokemon);
	echo $yesenia->pokemon->vida."<br>";
	echo $daniel->pokemon->salud."<br><br>";


	echo $daniel->pokemon->vida."<br>";
	$yesenia->ordenarAtaqueAlPokemonDelRIval($daniel->pokemon);
	echo $daniel->pokemon->vida."<br>";
	echo $daniel->pokemon->salud."<br><br>";


	$drtv=new Medico("Dr. TV");
	echo $drtv->nombre."<br>";
	echo $rapidash->salud."<br>";
	//$drtv->curarPokemon($rapidash);
	//echo $rapidash->salud."</br>";

	//echo "POkemon de yesenia: ".$yesenia->pokemon->nombre;
	$yesenia->llamarAlMedico($drtv);
	echo $rapidash->salud."<br>";

 ?>
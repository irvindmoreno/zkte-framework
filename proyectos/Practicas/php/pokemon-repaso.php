<?php 
	class Pokemon
	{
		public $nombre;
		public $tipo;
		public $ataque;
		public $vida;
		public $estado="Libre";
		public $salud="sano";
		
		public function __construct($nombre, $tipo, $ataque, $vida)
		{
			$this->nombre=$nombre;
			$this->tipo=$tipo;
			$this->ataque=$ataque;
			$this->vida=$vida;
		}
		public function atacar($pokemonRival)
		{
			$pokemonRival->vida=$pokemonRival->vida-$this->ataque;
			if ($pokemonRival->vida<=80) 
			{
				$pokemonRival->salud="enfermo";
			}
		}
	}
	class Persona
	{
		public $nombre;
		public $pokemon;

		public function __construct($nombre)
		{
			$this->nombre=$nombre;
		}
	}
	class Entrenador extends Persona
	{
		

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
		/*public function llevarAlMedico ($pokemonEnfermo)
		{
			$this->pokemon->curarPokemon($pokemonEnfermo);
		}*/
	}
	class Medico extends Persona
	{
		public $pokemon;

		public function curarPokemon($pokemonEnfermo)
		{
			if ($pokemon->salud="enfermo") 
			{
				$pokemonEnfermo->vida=$pokemonEnfermo->vida+50;
			}
		}

		
	}

	$charmander=new Pokemon("charmander","fuego",8, 90);
	echo $charmander->nombre."<br>";
	echo $charmander->tipo."<br>";
	echo $charmander->ataque."<br>";
	echo $charmander->vida."<br>";
	echo $charmander->estado."<br><br>";

	$rapidash=new Pokemon("rapidash","fuego",14, 120);
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
	echo $drtv->nombre
	$drtv->curarPokemon($rapidash);

 ?>
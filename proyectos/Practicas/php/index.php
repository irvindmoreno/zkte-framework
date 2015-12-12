<?php 

	class Pokemon
	{
		public $nombre;
		public $tipo;
		public $ataque;
		public $vida;
		public $estado="libre";

		public function __construct($nombre,$tipo,$ataque,$vida)
		{
			$this->nombre=$nombre;
			$this->tipo=$tipo;
			$this->ataque=$ataque;
			$this->vida=$vida;
		}
		public function atacar($pokemonRival)
		{
			$pokemonRival->vida=$pokemonRival->vida-$this->ataque;
		}
	}
	
	class Entrenador
	{
		public $nombre;
		public $pokemon;
		
		public function __construct($nombre)
		{
			$this->nombre=$nombre;

		}
		public function capturarPokemon($pokemon)
		{
			if ($pokemon->estado=="libre") 
			{
				$this->pokemon=$pokemon;
				$pokemon->estado="Domesticado";
			}
			else 
			{
				echo "Este ".$pokemon->nombre." ya esta ".$pokemon->estado." y no puede ser capturado nuevamente";
			}	
		}
		public function ordenarAtaqueAlPokemonDelRival($pokemonDelRival)
		{
				$this->pokemon->atacar($pokemonDelRival);
		}
	}

	$pikachu= new Pokemon("Pikachu","electrico",15,100);
	echo $pikachu->nombre ."<br>";
	echo $pikachu->tipo."<br>";
	echo $pikachu->ataque."<br>";
	echo $pikachu->vida."<br>";
	echo $pikachu->estado."<br>"."<br>";
	$saiduck= new Pokemon("saiduck","agua",7,80);
	echo $saiduck->nombre ."<br>";
	echo $saiduck->tipo."<br>";
	echo $saiduck->ataque."<br>";
	echo $saiduck->vida."<br>";
	echo $saiduck->estado."<br>"."<br>";

	$daniel= new Entrenador("Daniel");
	$daniel->capturarPokemon($pikachu);
	echo $daniel->nombre."<br>";
	echo $daniel->pokemon->nombre."<br>";
	echo $daniel->pokemon->tipo."<br>";
	echo $daniel->pokemon->ataque."<br>";
	echo $daniel->pokemon->vida."<br>";
	echo $daniel->pokemon->estado."<br>"."<br>";

	$irvin= new Entrenador("Irvin");
	$irvin->capturarPokemon($saiduck);
	echo $irvin->nombre."<br>";
	echo $irvin->pokemon->nombre."<br>";
	echo $irvin->pokemon->tipo."<br>";
	echo $irvin->pokemon->ataque."<br>";
	echo $irvin->pokemon->vida."<br>";
	echo $irvin->pokemon->estado."<br>"."<br>";
	//echo $saiduck->estado."<br>"."<br>" --> como en php poo se accede por referencia por eso el estado de saiduck seria domesticado

	$yess = new Entrenador("Yess");
	echo $yess->nombre."<br>";
	$yess->capturarPokemon($saiduck);
	echo $yess->pokemon->nombre."<br>";
	echo $yess->pokemon->tipo."<br>";
	echo $yess->pokemon->ataque."<br>";
	echo $yess->pokemon->vida."<br>";
	echo $yess->pokemon->estado."<br>";
/*
	echo $saiduck->vida."<br>";
	$pikachu->atacar($saiduck);
	echo $saiduck->vida."<br>";

	echo $pikachu->vida."<br>";
	$saiduck->atacar($pikachu);
	echo $pikachu->vida;
*/
	echo $irvin->pokemon->vida."<br>";
	$daniel->ordenarAtaqueAlPokemonDelRival($irvin->pokemon);
	echo $irvin->pokemon->vida."<br>";

	echo $irvin->pokemon->vida."<br>";
	$daniel->ordenarAtaqueAlPokemonDelRival($irvin->pokemon);
	echo $irvin->pokemon->vida."<br>";


 ?>
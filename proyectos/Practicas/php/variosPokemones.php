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
		public $pokemon=[];
		
		public function __construct($nombre)
		{
			$this->nombre=$nombre;

		}
		public function capturarPokemon($pokemon)
		{
			if ($pokemon->estado=="libre") 
			{				
				$this->pokemon[$pokemon->nombre]=$pokemon;				
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
	$saiduck= new Pokemon("Saiduck","agua",7,80);
	$daniel= new Entrenador("Daniel");
	$daniel->capturarPokemon($pikachu);
	$daniel->capturarPokemon($saiduck);
	//var_dump($daniel->pokemones["Pikachu"]);
	echo $daniel->pokemon["Pikachu"]->nombre."<br>";
	echo $daniel->pokemon["Saiduck"]->vida;


 ?>
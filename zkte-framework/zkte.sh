#!/bin/bash
function crearModulo
{
	read -p 'Nombre Del Proyecto: ' nombreDelProyecto
	read -p 'Nombre Del Componente: ' nombreComponente
	cd proyecto
	sudo mkdir $nombreDelProyecto
	cd $nombreDelProyecto
	sudo mkdir $nombreComponente
	cd $nombreComponente
	sudo touch $nombreComponente".jade"
	sudo touch $nombreComponente".styl"
	sudo touch $nombreComponente".js"
	cd ..
	cd ..
	cd ..	
	echo $nombreComponente	
}
crearModulo


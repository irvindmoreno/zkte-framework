#!/bin/bash
function crearLayoutSinAngular
{
echo 'html()
	head
		meta(charset="utf-8")
		meta(name="viewport" content="width=device-width, user-scalable=no")
		link(href="../layout/layout.css" rel="stylesheet")
		script(src="../js/clases.js")
		script(src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")
		link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css")
		block head
	body		
		block header
		block navegacion
		block contenido			
		block footer' >> layout.jade
}
function crearProyecto
{
	read -p 'Nombre Del Proyecto: ' nombreDelProyecto
	#read -p 'Escriba su usuario de: ' nombreDelProyecto
	#pwd
	rutaInicial=$(pwd)
	rutaProyecto="$(pwd)/proyecto/$nombreDelProyecto"
	#echo  $ruta
	if [ -d $rutaProyecto ];
	then	
		echo "Ya Existe un proyecto con este nombre"	
	else
		#cd proyecto
		rutaLayout="$rutaProyecto/layout"
		mkdir $rutaProyecto
		mkdir $rutaLayout
		touch "$rutaLayout/layout.jade"
		touch "$rutaLayout/layout.styl"
		cd $rutaLayout
		echo "Creando Layout"
		crearLayoutSinAngular
		echo "Layout creado correctamente"
		echo "Creando Prmiera Vista"
		cd $rutaProyecto
		crearModulo
		echo "Vista creado correctamente"
		cd $rutaInicial
		#cd
		echo "Se creo el proyecto"
	fi
}
function crearJade
{
	read -p 'Componente Header: ' componenteHeader
	rutaComponentes="$rutaInicial/componentes/header/$componenteHeader"
	if [ -d $rutaComponentes ];
	then
		echo "si existe este componente"
		includeHeader="include ../../../componentes/header/$componenteHeader/header.jade"
	else
		includeHeader=""
		echo "no existe este componente"
	fi
	touch $nombreDeLaVista".jade"
echo "extends ../layout/layout.jade
block head
	link(href='./$nombreDeLaVista.css' rel='stylesheet')
	script(src='./$nombreDeLaVista.js')
block header
	- rutaImagenes ='../../../imagenes';
	$includeHeader
block navegacion	
block contenido	
block footer" >> $nombreDeLaVista.jade
}
function crearStyl
{
	read -p 'Background Header: ' backgroundHeader
echo "rutaComponentes='../../../componentes'
rutaImagenes='../../../imagenes'

/************header****************/
backgroundHeader=$backgroundHeader
@import(rutaComponentes+'/header/$componenteHeader/header.styl')
/************header****************/" >> $nombreDeLaVista.styl
gulp
grunt
} 
function crearModulo
{	
	read -p 'Nombre la Primera Vista: ' nombreDeLaVista
	mkdir $nombreDeLaVista
	rutaVista="$rutaProyecto/$nombreDeLaVista"	
	cd $rutaVista
	crearJade
	crearStyl
	touch $nombreDeLaVista".styl"
	touch $nombreDeLaVista".js"	
}
crearProyecto


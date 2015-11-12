#!/bin/bash
function LayoutLLenarJade
{
echo 'html()
	head
		meta(charset="utf-8")
		meta(name="viewport" content="width=device-width, user-scalable=no")
		script(src="../js/clases.js")
		script(src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")
		script(src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js")
		link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css")
		block head
	body
		block header
		block navegacion
		block contenido			
		block footer' >> layout.jade
}
function LayoutLLenarStyl
{
echo 'body
	font-size 16px
	margin 0
	font-family Arial'>> layout.styl
}
function LayoutCrear
{
	#definimos la ruta layout
		rutaLayout="$rutaProyecto/layout"

	if [ -d $rutaLayout ];
		then	
			echo "Ya se tiene un layot, excelente :)"
		else
			echo "Creando Layout...."		
				#creamos la carpeta layout
					mkdir $rutaLayout
				#creamos los 2 archivos de layout
					touch "$rutaLayout/layout.jade"
					touch "$rutaLayout/layout.styl"	
				#nos ubicamos dentro de la carpeta layout
					cd $rutaLayout	
				#llenamos los archivos
					LayoutLLenarJade
					LayoutLLenarStyl
			echo "Layout creado correctamente"
		fi
	
}
function ProyectoCrear
{	
	#si ya existe el proyecto termoino, caso contrari creo el proyecto
		if [ -d $rutaProyecto ];
		then	
			echo "Ya Existe un proyecto con este nombre"
			navegador="cerrado"
		else
			echo "Creando Proyecto....."
				#Creo la carpeta del proyecto
					mkdir $rutaProyecto				
				#creamos la vista
					VistaCrear							
			echo "Se creo el proyecto correctamente"
		fi
}
function ComponenteImportar
{
	#pedimos el componente header
		read -p '¿Qué componente desea importar? : ' componenteAImportar
		read -p "¿Que $componenteAImportar usará? : " componenteNombre
	#verificamos q el componente header exista
		rutaComponentes="$rutaInicial/componentes/$componenteAImportar/$componenteNombre"
		if [ -d $rutaComponentes ];
		then
			echo "importando componente $componenteAImportar: $componenteNombre ..."
				
				#importando jade
					echo "		include ../../../componentes/$componenteAImportar/$componenteNombre/$componenteAImportar.jade">> $nombreDeLaVista.jade			
			

				#importo los styl del componente
					echo "/************$componenteAImportar****************/">> $nombreDeLaVista.styl
					cd $rutaComponentes
					while read line
					do
						echo "¿Qué $line usará?:"
						read varDeComponente < /dev/tty
						cd $rutaVista
						echo "$line=$varDeComponente">> $nombreDeLaVista.styl
						cd $rutaComponentes
			   			#echo "$line=$varConfiguracionComponente"
					done < "$componenteNombre-$componenteAImportar.conf"
					cd $rutaVista
					echo "@import('$rutaComponentes/$componenteAImportar.styl')
/************$componenteAImportar****************/">> $nombreDeLaVista.styl
				
				

			echo "componente $componenteAImportar: $componenteNombre importado con éxito"
		else			
			echo "no existe el componente $componenteAImportar: $componenteNombre"
			navegador="cerrado"
		fi
}
function VistaLLenarJade
{
	#escribimos el head
		echo "extends ../layout/layout.jade
block head
	link(href='./$nombreDeLaVista.css' rel='stylesheet')
	script(src='./$nombreDeLaVista.js')
block header
	- rutaImagenes ='../../../imagenes'">> $nombreDeLaVista.jade
    #importando componente
		ComponenteImportar
	
echo "block navegacion	
block contenido	
block footer" >> $nombreDeLaVista.jade
}
function VistaLLenarStyle
{
echo "rutaComponentes='../../../componentes'
rutaImagenes='../../../imagenes'


/************Layout****************/
@import('$rutaProyecto/layout/layout.styl')
/************Layout****************/">> $nombreDeLaVista.styl
			
} 
function VistaCrear
{	
	if [ -d $rutaProyecto ];
	then
		if [ -d $rutaVista ];
		then
			#crearemos el layout
				LayoutCrear
			echo "Creando Vista $nombreDeLaVista"
				#nos ubicamos en la carpeta del proyecto
					cd $rutaProyecto
				#creamos la carpeta de la vista
					mkdir $nombreDeLaVista
				#nos ubicamos en la carpeta de la vista	
					cd $rutaVista
				#creamos los 3  archivos de la vista
					touch $nombreDeLaVista".jade"
					touch $nombreDeLaVista".styl"
					touch $nombreDeLaVista".js"
				#llenamos los archivos de la vista
					VistaLLenarStyle
					VistaLLenarJade
				#nos ubicamos en la ruta de donde estuvo al inicio
					cd $rutaInicial	
			echo "Vista $nombreDeLaVista creada correctamente"
		else
			echo "ya existe una vista con este nombre, si continua se perdera la vista anetrior"
		fi
	else
		echo "No existe ninug proyecto con el nombre de $nombreDelProyecto"
		navegador="cerrado"
	fi
}
function pedirNombreProyectoYVista
{
	#ingrsamos el nombre del proyecto
		read -p 'Nombre Del Proyecto: ' nombreDelProyecto
	#creamos una url q apunte al proyecto  escrito	
		rutaProyecto="$(pwd)/proyecto/$nombreDelProyecto"

		read -p 'Nombre de la Vista: ' nombreDeLaVista
		rutaVista="$rutaProyecto/$nombreDeLaVista"
		#borrando las lineas de las variabkles proyecto y vista en el gulpfile
		sed -i "1,3d" gulpfile.js
		sed -i "1i var vista='$nombreDeLaVista';" gulpfile.js
		sed -i "1i var proyecto='$nombreDelProyecto';" gulpfile.js
		sed -i "1i /******no tocar linea 1,2 y 3********/" gulpfile.js
}
function abrirVista
{
	#compila los jade,styl and babel
		gulp
	#abre el navegador para visualizar lo obtendio
		chromium-browser "http://localhost:9000/public/proyecto/$nombreDelProyecto/$nombreDeLaVista/$nombreDeLaVista.html"
}
function peticionDeConfirmacion
{
	echo "¿Desea continuar?"
	echo "1) si"
	echo "2) no"
	read -p '¿Desea Continuar?: ' opcion
	case  $opcion  in
		1) return 1;;
		2) return 0;;		
	esac
}
function mostrarOpciones
{
	echo "1) Crear Nuevo Proyecto"
	echo "2) Crear Nueva Vista"
	echo "3) Importar Componente"
	echo "4) confirmacion"
	read -p '¿Qué desea hacer?: ' opcion
	case  $opcion  in
		1) pedirNombreProyectoYVista
		   ProyectoCrear;;
		2) pedirNombreProyectoYVista
		   VistaCrear;;
		3) pedirNombreProyectoYVista
		   ComponenteImportar;;
		4) peticionDeConfirmacion
		   echo $confirmacion;;
	esac
	#abrirVista
}
function abrirNavegador
{
	#preguntamos si desea abrir el navegador
		read -p '¿Desea abrir el navegador?: ' navegador
}
function inicio
{
	mostrarOpciones
	#abrirNavegador
}
#definimos las variables
	rutaInicial=$(pwd)
	rutaProyecto="por llenar aún"
	rutaLayout="por llenar aún"
#aqui empieza Todo
	inicio


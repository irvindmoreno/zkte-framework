#!/bin/bash
function LayoutLLenarJade
{
echo 'html()
	head
		meta(charset="utf-8")
		meta(name="viewport" content="width=device-width, user-scalable=no")
		script(src="./clases.js")
		script(src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")
		script(src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular.min.js")
		link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css")
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
					touch "$rutaLayout/layout.js"
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
				#creamos el layout
					LayoutCrear			
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
	#me ubico en la vista en donde importare
		cd $rutaVista
		rutaComponentes="$rutaInicial/componentes/$componenteAImportar/$componenteNombre"
		if [ -d $rutaComponentes ];
		then
			echo "importando componente $componenteAImportar: $componenteNombre ..."
				
				#importando jade
					echo "//$componenteAImportar-$componenteNombre">> $nombreDeLaVista.jade
					cd $rutaComponentes
					while read line
					do
						echo "¿Qué $line usará?:"
						read varDeComponente < /dev/tty
						cd $rutaVista
						echo "- $line='$varDeComponente'">> $nombreDeLaVista.jade
						cd $rutaComponentes
					done < "$componenteNombre-$componenteAImportar.confjade"
					cd $rutaVista										
        			echo "include ../../../componentes/$componenteAImportar/$componenteNombre/$componenteAImportar.jade">> $nombreDeLaVista.jade
        			echo "//$componenteAImportar-$componenteNombre">> $nombreDeLaVista.jade
			

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
					done < "$componenteNombre-$componenteAImportar.confstyl"
					cd $rutaVista
					echo "@import('$rutaComponentes/$componenteAImportar.styl')
/************$componenteAImportar-$componenteNombre****************/

">> $nombreDeLaVista.styl
				
				

				#importo las clases js
					cat < "$rutaComponentes/$componenteAImportar.js"  >> "$rutaVista/clases.js"
				#instancio el objeto js del componente
					cd $rutaVista
					#cat $nombreDeLaVista.js
					sed -i '$d' "$nombreDeLaVista.js"
					#cat $nombreDeLaVista.js
					echo "    var "$componenteAImportar$(echo $componenteNombre | sed 's/^./\u&/')= new $(echo $componenteAImportar | sed 's/^./\u&/')$(echo $componenteNombre | sed 's/^./\u&/')"()">> $nombreDeLaVista.js
					echo "}">> $nombreDeLaVista.js


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
	- rutaImagenes ='../../../imagenes'
block navegacion	
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
function VistaLLenarJs
{
echo '$(document).on("ready",inicio)
function inicio()
{	
}// ESTA SIEMPRE DEBE SER LA ULTIMA LINEA DEL ARCHVO DE LO CONTRARI DARA ERROR'>> $nombreDeLaVista.js
}
function VistaCrear
{	
	if [ -d $rutaProyecto ];
	then
		echo $rutaVista
		if [ -d $rutaVista ];
		then
			echo "ya existe una vista con este nombre, si continua se perdera la vista anetrior"
		else			
			#crearemos el layout				
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
					touch "clases.js"
				#llenamos los archivos de la vista
					VistaLLenarStyle
					VistaLLenarJade
					VistaLLenarJs
				#nos ubicamos en la ruta de donde estuvo al inicio
					#cd $rutaInicial	
			echo "Vista $nombreDeLaVista creada correctamente"
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
	#abre el navegador para visualizar lo obtendio
		chromium-browser "http://localhost:9000/public/proyecto/$nombreDelProyecto/$nombreDeLaVista/$nombreDeLaVista.html"
}
function ComponenteCrearArchivos
{
	#pedir nombre del componente llenado anteriormente
		read -p "¿Qué nombre desea ponerle a este $nombreNuevoComponente?: " nombreNuevoComponenteArchivo
		rutaComponenteACrearArchivo="$rutaComponenteRaiz/$nombreNuevoComponente/$nombreNuevoComponenteArchivo"
		if [ -d $rutaComponenteACrearArchivo ];
		then
			echo "ya existe un componente $nombreNuevoComponente : $nombreNuevoComponenteArchivo"
		else

			mkdir $nombreNuevoComponenteArchivo
			cd $rutaComponenteACrearArchivo
			#crear los archvos del componente
				touch $nombreNuevoComponente".jade"
				touch $nombreNuevoComponente".js"
				touch $nombreNuevoComponente".styl"
				touch $nombreNuevoComponenteArchivo"-"$nombreNuevoComponente".confstyl"
				touch $nombreNuevoComponenteArchivo"-"$nombreNuevoComponente".confjade"
			#llenar el archivo js
				echo "class $(echo $nombreNuevoComponente | sed 's/^./\u&/')$(echo $nombreNuevoComponenteArchivo | sed 's/^./\u&/'){
	constructor()
	{

	}
}" >> $nombreNuevoComponente".js"
		fi	
}
function ComponenteCrear
{
	# pedir nombre del componente a crear	
		read -p 'Nombre Del Componente a Agregar: ' nombreNuevoComponente
	# creando la ruta q apunta a componentes
		rutaComponenteRaiz="$rutaInicial/componentes"
	# me pocisione en componentes para crea ahi la carpeta
		cd $rutaComponenteRaiz
	#verificando si dicho componente ya existe
	
		if [ -d $rutaComponenteRaiz"/"$nombreNuevoComponente ];
		then
			#me ubicoen la carpeta en donde se van a crear los archivos
			cd $rutaComponenteRaiz"/"$nombreNuevoComponente
			ComponenteCrearArchivos
		else
			cd $rutaComponenteRaiz
			#crear carpeta del compenente
				mkdir $nombreNuevoComponente
			#me ubicoen la carpeta en donde se van a crear los archivos
			cd $rutaComponenteRaiz"/"$nombreNuevoComponente
				ComponenteCrearArchivos			
		fi	

}
function ComponentePreguntarSiQuiereImportarlo
{
	echo ">¿Desea importar este componente en algun proyecto?"
	echo "1) si"
	echo "2) no"
	read -p '¿Desea Continuar?: ' opcion
	case  $opcion  in
		1)  pedirNombreProyectoYVista
			ComponenteImportar;;
		2)  echo "chau";;
	esac
}
function ComponenteTestear
{
	sed -i "1,3d" gulpfile.js
	sed -i "1i var vista='$nombreNuevoComponenteArchivo';" gulpfile.js
	sed -i "1i var proyecto='$nombreNuevoComponente';" gulpfile.js
	sed -i "1i /******no tocar linea 1,2 y 3********/" gulpfile.js
	rutaComponentesPublic="$rutaInicial/public/componentes/$nombreNuevoComponente/$nombreNuevoComponenteArchivo"	
	gulp cp
	cd $rutaComponentesPublic
	pwd
	echo "<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'>
<link rel='stylesheet' type='text/css' href='./$nombreNuevoComponente.css'>
<style type="text/css">
	body
	{
		margin: 0;
		font-size: 16px;
	}
</style>
<script src='./$nombreNuevoComponente.js'></script>">> $nombreNuevoComponente.html
	#chromium-browser "http://localhost:9000/public/componentes/$nombreNuevoComponente/$nombreNuevoComponenteArchivo/$nombreNuevoComponente.html"
}
function ComponentePedirNombres
{
	read -p 'Nombre Del Componente a testear: ' nombreNuevoComponente
	read -p "Nombre de $nombreNuevoComponente a testear: " nombreNuevoComponenteArchivo
}
function mostrarOpciones
{
	echo "1) Crear Nuevo Proyecto"
	echo "2) Crear Nueva Vista"
	echo "3) Importar Componente"
	echo "4) Crear un nuevo componente"
	echo "5) Testear Componente"
	read -p '¿Qué desea hacer?: ' opcion
	case  $opcion  in
		1) pedirNombreProyectoYVista
		   ProyectoCrear
		   cd rutaInicial;;
		2) pedirNombreProyectoYVista
		   VistaCrear
		   cd rutaInicial;;
		3) pedirNombreProyectoYVista
		   ComponenteImportar
		   cd rutaInicial;;
		4) ComponenteCrear
		   cd $rutaInicial
		   ComponentePreguntarSiQuiereImportarlo
		   ComponenteTestear
		   cd rutaInicial;;
		5)  ComponentePedirNombres
			ComponenteTestear
			cd rutaInicial;;
		*) echo "Opcion no valida";;
	esac
	cd $rutaInicial
	abrirNavegador
}
function abrirNavegador
{
	#compila los jade,styl and babel
		gulp
	#preguntamos si desea abrir el navegador
		echo ">¿Desea abrir el Navegador con el proyecto?"
		echo "1) si"
		echo "2) no"
		read -p 'Digite un número: ' opcion
		case  $opcion  in
			1) echo "recuerde correr el comando gunt, de lo contrario no se abrira el navegador correctamente"
			   abrirVista;;
			2) echo "la url nonde puede verlo es:"
			   echo "http://localhost:9000/public/proyecto/$nombreDelProyecto/$nombreDeLaVista/$nombreDeLaVista.html";;		
		esac
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


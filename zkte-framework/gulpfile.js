/*librerias requeridas para correr gulp*/

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename=require('gulp-rename'),
    rupture=require('rupture'),
    babel = require('gulp-babel');
    concat = require('gulp-concat');

/* rutas de donde leer y donde escribir archivos para la pp*/
var proyecto="asep";
var vista="inicio";
var componentes=
    [
        "componentes/header/"+proyecto+"/*.js",
        "componentes/navegacion/"+proyecto+"/*.js",
        "componentes/footer/"+proyecto+"/*.js"
    ];


/* Tareas para ejecutar*/
function TareaJade(rutaOrigen,rutaDestinoVista) {
    
    function compilarVistas()
    {   
        console.log("vistas html");
        gulp.src(rutaOrigen)
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.html'}))
            .pipe(gulp.dest(rutaDestinoVista));
    }
    gulp.watch(rutaOrigen, compilarVistas);
}
function TareaCss(rutaOrigen,rutaDestinoVista) {
    
  
    function compilarVistaCss()
    {
        console.log("vistas css");
         gulp.src(rutaOrigen)
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(rutaDestinoVista));
    }    
    gulp.watch(rutaOrigen, compilarVistaCss);
    //gulp.watch(pathIn2, Taskstylus);
}
function TareaBabel(componentes,rutaOrigen, rutaDestinoComponentes,rutaDestinoVista) {
    
    function compilarComponenetesJs()
    {   
        console.log("componentes js");
         gulp.src(componentes)
         .pipe(concat("clases"))
        .pipe(babel())
        .pipe(gulp.dest(rutaDestinoComponentes));
        //gulp.src(pathIn2)
        //.pipe(babel())
        //.pipe(gulp.dest(pathOut2));
    }
    function compilarVistaJs()
    {
        gulp.src(rutaOrigen)         
        .pipe(babel())
        .pipe(gulp.dest(rutaDestinoVista));
    }
    gulp.watch(rutaOrigen, compilarComponenetesJs);
    gulp.watch(rutaOrigen, compilarVistaJs);
    //gulp.watch(pathIn2, TaskBabel);
}

gulp.task('default', function () {
    //var rutaComponentes="componentes/"+componentes;
    var rutaOrigen=['proyecto/'+proyecto+'/'+vista];
    var rutaDestinoVista="public/proyecto/"+proyecto+"/"+vista;
    var rutaDestinoComponentes="public/proyecto/"+proyecto;
    new TareaBabel(componentes,rutaOrigen+'/*.js',rutaDestinoComponentes+'/public/js',rutaDestinoVista);
    new TareaJade(rutaOrigen+'/*.jade',rutaDestinoVista);
    new TareaCss(rutaOrigen+'/*.styl',rutaDestinoVista);

});
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
function TareaJade(rutaOrigen,rutaDestino) {
    
    function compilarVistas()
    {   
        console.log("vistas html");
        gulp.src(rutaOrigen)
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.html'}))
            .pipe(gulp.dest(rutaDestino));
    }
    gulp.watch(rutaOrigen, compilarVistas);
}
function TareaCss(pathIn, pathOut) {
    
    function Taskstylus()
    {   
         console.log("css");
         gulp.src([pathIn,pathIn2])
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(pathOut));
       // gulp.src(pathIn2)
       //.pipe(stylus({use:[rupture()]}))
       // .pipe(gulp.dest(pathOut2));
    }
    gulp.watch(pathIn, Taskstylus);
    //gulp.watch(pathIn2, Taskstylus);
}
function TareaBabel(componentes,rutaOrigen, rutaDestino) {
    
    function compilarComponenetesJs()
    {   
        console.log("componentes js");
         gulp.src(componentes)
         .pipe(concat("clases"))
        .pipe(babel())
        .pipe(gulp.dest(rutaDestino));
        //gulp.src(pathIn2)
        //.pipe(babel())
        //.pipe(gulp.dest(pathOut2));
    }
    function compilarVistaJs()
    {
        gulp.src(rutaOrigen)         
        .pipe(babel())
        .pipe(gulp.dest(rutaDestino));
    }
    gulp.watch(rutaOrigen, compilarComponenetesJs);
    gulp.watch(rutaOrigen, compilarVistaJs);
    //gulp.watch(pathIn2, TaskBabel);
}

gulp.task('default', function () {
    //var rutaComponentes="componentes/"+componentes;
    var rutaOrigen=['proyecto/'+proyecto+'/'+vista];
    var rutaDestino="public/proyecto/"+proyecto+"/"+vista;
    new TareaBabel(componentes,rutaOrigen+'/*.js',rutaDestino);
    new TareaJade(rutaOrigen+'/*.jade',rutaDestino);

});
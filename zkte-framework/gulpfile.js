/***********No mover para nada la linea 2 y 3 variableproyecto y vista*************/
var proyecto="aqde";
var vista="home";
/*librerias requeridas para correr gulp*/

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename=require('gulp-rename'),
    rupture=require('rupture'),
    babel = require('gulp-babel'),    
    concat = require('gulp-concat');
    //livereload = require('gulp-livereload');
/* rutas de donde leer y donde escribir archivos para la pp*/
var componentes=
    [        
        "componentes/navegacion/"+proyecto+"/*.js",
        "componentes/inscripcion/"+proyecto+"/*.js"
    ];

var onError = function (err) {
    gutil.beep();
    console.log(err);
};
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
            .pipe(gulp.dest(rutaDestinoVista))
            //.pipe(livereload());          
    }
    compilarVistas();
    //livereload.listen();
   // gulp.watch(rutaOrigen, compilarVistas);
    //var server=livereload();
    //server.changed();
}
function TareaCss(rutaOrigen,rutaDestinoVista) {
    
  
    function compilarVistaCss()
    {
        console.log("vistas css");
         gulp.src(rutaOrigen)
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(rutaDestinoVista));
    }
    compilarVistaCss();    
    //gulp.watch(rutaOrigen, compilarVistaCss);
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
    compilarComponenetesJs();
    compilarVistaJs();
   // gulp.watch(rutaOrigen, compilarComponenetesJs);
    //gulp.watch(rutaOrigen, compilarVistaJs);
    //gulp.watch(pathIn2, TaskBabel);
}

gulp.task('default', function () {
    //var rutaComponentes="componentes/"+componentes;
    var rutaOrigen=['proyecto/'+proyecto+'/'+vista];
    var rutaDestinoVista="public/proyecto/"+proyecto+"/"+vista;
    var rutaDestinoComponentes="public/proyecto/"+proyecto;
    new TareaBabel(componentes,rutaOrigen+'/*.js',rutaDestinoComponentes+'/js',rutaDestinoVista);
    new TareaJade(rutaOrigen+'/*.jade',rutaDestinoVista);
    new TareaCss(rutaOrigen+'/*.styl',rutaDestinoVista);

});

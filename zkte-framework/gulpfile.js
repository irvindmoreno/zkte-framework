/*librerias requeridas para correr gulp*/

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename=require('gulp-rename'),
    rupture=require('rupture'),
    babel = require('gulp-babel');

/* rutas de donde leer y donde escribir archivos para la pp*/
var componentesAUsar=
    [
        "header/header-a",
        "navegacion/navegacion-a",
        "footer/footer-a"
    ];
var rutaComponentes = {
    styl: ['componentes/**/*.styl'],    
    css:'../wp-content/themes/asep/componentes',
    babel: ['componentes/**/*.js'],    
    js:'../wp-content/themes/asep/componentes'
};
var rutaViews = {
    jade: ['page/**/*.jade'],
    html: '../wp-content/themes/asep/page',
    styl: ['page/**/*.styl'],
    css:'../wp-content/themes/asep/page',
    babel: ['page/**/*.js'],
    js:'../wp-content/themes/asep/page'
    
    //jade: ['page/noticia-individual/*.jade'],
    //html: '../wp-content/themes/asep/page/category/noticias/',
    //styl: ['page/noticia-individual/*.styl'],
    //css:'../wp-content/themes/asep/page/category/noticias/',
    //babel: ['page/noticia-individual/*.js'],
    //js:'../wp-content/themes/asep/page/category/noticias/'

    //jade: ['page/category/**/*.jade'],
    //html: '../wp-content/themes/asep/category',
    //styl: ['page/category/**/*.styl'],
    //css:'../wp-content/themes/asep/category',
    //babel: ['page/category/**/*.js'],
    //js:'../wp-content/themes/asep/category'
    
};


/* Tareas para ejecutar*/
function TareaJade(pathIn, pathOut,pathIn2,pathOut2) {
    
    function TaskPhtml()
    {   
        console.log("html");
        gulp.src(pathIn)
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.php'}))
            .pipe(gulp.dest(pathOut));

        gulp.src(pathIn2)
            .pipe(jade({
                pretty: true
            }))
            .pipe(rename({extname:'.php'}))
            .pipe(gulp.dest(pathOut2));
    }
    gulp.watch(pathIn, TaskPhtml);
    gulp.watch(pathIn2, TaskPhtml);
}
function TareaCss(pathIn, pathOut,pathIn2,pathOut2) {
    
    function Taskstylus()
    {   
         console.log("css");
         gulp.src(pathIn)
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(pathOut));
        gulp.src(pathIn2)
        .pipe(stylus({use:[rupture()]}))
        .pipe(gulp.dest(pathOut2));
    }
    gulp.watch(pathIn, Taskstylus);
    gulp.watch(pathIn2, Taskstylus);
}
function TareaBabel(pathIn, pathOut,pathIn2,pathOut2) {
    
    function TaskBabel()
    {   
        console.log("js");
         gulp.src(pathIn)
        .pipe(babel())
        .pipe(gulp.dest(pathOut));
        gulp.src(pathIn2)
        .pipe(babel())
        .pipe(gulp.dest(pathOut2));
    }
    gulp.watch(pathIn, TaskBabel);
    gulp.watch(pathIn2, TaskBabel);
}

gulp.task('default', function () {

    new TareaJade(componentes.jade, componentes.html,views.jade,views.html);
  //  new TareaJade(views.jade, views.html);

    new TareaCss(componentes.styl,componentes.css,views.styl,views.css);
   // new TareaCss(views.styl,views.css);

    new TareaBabel(componentes.babel,componentes.js,views.babel,views.js);
    //new TareaBabel(views.babel,views.js);
    
});
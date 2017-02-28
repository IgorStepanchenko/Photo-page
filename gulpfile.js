var gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserSync = require("browser-sync"),
    concat = require("gulp-concat"),
    cssNano = require("gulp-cssnano"),
    rename = require("gulp-rename"),
    del = require("del"),
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    cache = require("gulp-cache"),
    autoprefixer = require("gulp-autoprefixer");


//        Sass
gulp.task("sass", function() {
    return gulp.src("app/sass/*.sass")
    .pipe(sass())
    .pipe(autoprefixer(["last 15 version", "> 1%", "ie 8", "ie 7"], { cascade: true}))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({stream: true}))
});

        //CSS nano
gulp.task("cssnano", function() {
    return gulp.src("app/css/libs.css")
    .pipe(cssNano())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("app/css"))
});


        //JS concat
gulp.task("scripts", function() {
   return gulp.src([
       "app/libs/jquery/dist/jquery.min.js",
       "app/libs/bootstrap/dist/js/bootstrap.min.js",
   ])
   .pipe(concat("libs.min.js"))
   .pipe(gulp.dest("app/js"))
});


//Browser-sync типа live-reload;
gulp.task("browser-sync", function() {
    browserSync({ 
       server: {
           baseDir: "app" 
       },
        notify: false
    })
});


// **************** Watch ***************************************


gulp.task("watch", ["browser-sync", "sass", "cssnano", "scripts", ], function() { 
    gulp.watch("app/sass/*.sass", ["sass"]); 
    gulp.watch("app/*.html", browserSync.reload);
    gulp.watch("app/js/**/*.js", browserSync.reload)
}); 




// **************** Build ***************************************************

gulp.task("build", ["sass", "scripts"], function() {
//   Styles
    var buildCss = gulp.src([
        "app/css/libs.min.css",
        "app/css/main.css",
        "app/css/media.css",
        "app/libs/font-awesome/css/font-awesome.min.css"
    ])
    .pipe(gulp.dest("dist/css"));
    
//    Scripts
    var buildJs = gulp.src("app/js/**/*")
    .pipe(gulp.dest("dist/js"));
    
    
//    img
    var buildImg = gulp.src("app/img/**/*")
    .pipe(gulp.dest("dist/img"));
    
//     HTML
    var buildHTML = gulp.src("app/*.html")
    .pipe(gulp.dest("dist/"));
});

















var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync =require('browser-sync');
var imagemin = require('gulp-imagemin');
var postcss = require('gulp-postcss');
var autoprefixer = require( 'autoprefixer' );
var flexBugsFixes = require( 'postcss-flexbugs-fixes' );
var clean = require('./tasks/clean');
var { reload, serve } = require('./tasks/server');
var packageImporter = require('node-sass-package-importer');
var ejs = require("gulp-ejs");
var rename = require('gulp-rename');

var autoprefixerOptions = {
	grid: true,
	cascade: false
};

var postcssOptions = [
	flexBugsFixes, autoprefixer( autoprefixerOptions )
];

//sass
gulp.task("sass",function(done){
    gulp.src("./src/sass/**/*.scss")
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(sass({
	    outputStyle: 'expanded',
	    importer: packageImporter({
		    extensions: ['.scss', '.css']
	    })
	}))
		.pipe( postcss( postcssOptions ) )
    .pipe(gulp.dest("./dist/css"));
    done();
});


gulp.task( "ejs", function () {
  return gulp.src(["./src/**/*.ejs", '!' + "./src/**/_*.ejs"])
	.pipe(ejs())
  .pipe(rename({ extname: '.html' }))
  .pipe( gulp.dest( "./dist" ) );
  done();
});

gulp.task("js",function(done){
    gulp.src(["./src/js/*.js"])
    .pipe(plumber())
    .pipe(gulp.dest("./dist/js"));
    done();
});

gulp.task('browser-sync', function(done) {
    browserSync({
        server: {
            baseDir: "./dist/",
            index: "index.html",
        }
    });
    done();
});

gulp.task('imagemin', function(done) {
	gulp.src('./src/images/**/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/images'))
    done();
});


//ブラウザリロード
gulp.task('bs-reload', function (done) {
    browserSync.reload();
    done();
});
function watch(){
    gulp.watch("./src/sass/**/*.scss", gulp.series('ejs','imagemin','sass','js',reload));
    gulp.watch("./src/**/*.html", gulp.series('ejs','imagemin','sass','js',reload));
    gulp.watch("./src/**/**/*.html", gulp.series('ejs','imagemin','sass','js',reload));
    gulp.watch("./src/images/**/*.*", gulp.series('ejs','imagemin','sass','js',reload));
    gulp.watch("./src/images/**/**/*.*", gulp.series('ejs','imagemin','sass','js',reload));
    gulp.watch("./src/js/*", gulp.series('ejs','imagemin','sass','js',reload));
    gulp.watch( "./src/**/*.ejs", gulp.series('ejs','imagemin','sass','js',reload));
    gulp.watch("./dist/*.html",      gulp.series(reload));
    gulp.watch("./dist/**/*.html",   gulp.series(reload));
    gulp.watch("./dist/**/**/*.html",   gulp.series(reload));
    gulp.watch("./dist/css/*.css",   gulp.series(reload));
    gulp.watch("./dist/js/*.js",     gulp.series(reload));
}

//動作設定
gulp.task('default', gulp.series(clean,gulp.parallel('ejs','imagemin','sass','js'),serve,watch));

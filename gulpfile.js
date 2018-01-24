var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    csscomb = require('gulp-csscomb'),
    pug = require('gulp-pug');
    del = require('del');

gulp.task('sass', function () {
    gulp.src('app/template/index.sass')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('pre-relise'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('preload', function () {
    gulp.src('app/include/Global/preloader/preload.sass')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(rename('preload.css'))
        .pipe(gulp.dest('pre-relise'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('pre-clean', function() {
    return del.sync('pre-relise');
});

gulp.task('clean', function() {
    return del.sync('production');
});

gulp.task('js', function() {
    gulp.src(['app/libs/jquery/dist/jquery.js',
            'app/libs/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
            'app/libs/jquery-ui/jquery-ui.js',
            'app/include/**/*.js']) // файлы, которые обрабатываем
        .pipe(concat('main.js')) // склеиваем все JS
        //.pipe(uglify()) // получившуюся "портянку" минифицируем
        .pipe(gulp.dest('pre-relise')) // результат пишем по указанному адресу
        .pipe(browserSync.reload({stream: true})) // Обновляем браузер
});

gulp.task('image', function() {
    gulp.src(['app/images/**/**/*']) // берем любые файлы в папке и ее подпапках
    //.pipe(imagemin()) // оптимизируем изображения для веба
        .pipe(gulp.dest('pre-relise/images/')) // результат пишем по указанному адресу
        .pipe(browserSync.reload({stream: true})) // Обновляем браузер
});

gulp.task('font', function(){
    gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('pre-relise/fonts'))
});

gulp.task('pug', function () {
    gulp.src('app/template/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('pre-relise'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('liveReload', function() {
    browserSync.init({
        server: {
            baseDir: "pre-relise"
        }
    });
});
/*

gulp.task('liveReload', function () {
    browserSync({
        server: {
            baseDir: 'app/pre-relise'
        },
        notify: false
    })
});
*/

gulp.task('prodaction', ['clean'], function() {
    gulp.src('pre-relise/*.html')
        .pipe(gulp.dest('prodaction/'));
    gulp.src('pre-relise/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('prodaction/'));
    gulp.src('pre-relise/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('prodaction/'));
    gulp.src('pre-relise/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('prodaction/images/'));
    gulp.src('pre-relise/fonts/**/*')
        .pipe(gulp.dest('prodaction/fonts'));
});


gulp.task('default', ['pre-clean', 'preload', 'liveReload', 'sass', 'image', 'js', 'font', 'pug'], function () {
    gulp.watch('app/**/*.sass', ['sass']);
    gulp.watch('app/**/*.pug', ['pug']);
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/images/**/*', ['image']);
    gulp.watch('app/font/**/*', ['font']);
});
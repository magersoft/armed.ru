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
    gulp.src('app/include/preloader/preload.sass')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(rename('preload.css'))
        .pipe(gulp.dest('pre-relise'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
    gulp.src(['app/include/**/*.js']) // файлы, которые обрабатываем
        .pipe(concat('site.js')) // склеиваем все JS
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

gulp.task('prodaction', function() {
    gulp.src('pre-relise/*.html')
        .pipe(gulp.dest('prodaction/'))
    gulp.src('pre-relise/site.js')
        .pipe(uglify())
        .pipe(gulp.dest('prodaction/'))
    gulp.src('pre-relise/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('prodaction/'))
    gulp.src('pre-relise/images/**/*')
        .pipe(imagemin()) // оптимизируем изображения для веба
        .pipe(gulp.dest('prodaction/images/')) // результат пишем по указанному адресу
    browserSync({
        server: {
            baseDir: 'prodaction/' /*Указываем главную папку со скриптами*/
        },
        notify: false /*Отключаем уведомления в браузере для комфортной работы*/
    })
});


gulp.task('default', ['liveReload', 'sass', 'image', 'js', 'font', 'pug'], function () {
    gulp.watch('app/**/**/*.sass', ['sass']);
    gulp.watch('app/**/**/*.pug', ['pug']);
    gulp.watch('app/**/**/*.js', ['js']);
    gulp.watch('app/images/**/*', ['image']);
    gulp.watch('app/font/**/*', ['font']);
});
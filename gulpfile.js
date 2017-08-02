var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
    return gulp.src('sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch('sass/*.sass', ['sass']);
    gulp.watch(['*.html'], reload);
});
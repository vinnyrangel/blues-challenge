// Include gulp
var gulp = require('gulp');
// Include plugins
var concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    sass         = require('gulp-sass'),
    gulpif       = require('gulp-if'),
    useref       = require('gulp-useref'),
    cleanCss     = require('gulp-clean-css'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync').create(),
    spa          = require('browser-sync-spa'),
    imagemin     = require('gulp-imagemin');

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

//convert scss to css
gulp.task('styles', function () {
    gulp
        .src('sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

// Images
gulp.task('images', function () {
    return gulp.src('imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs/')
        );
});

// Fonts
gulp.task('fonts', function () {
    return gulp.src('fonts/*')
        .pipe(gulp.dest('dist/fonts/')
        );
});

//modal
gulp.task('modal', function () {
    return gulp.src('interno/*')
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist/interno/')
        );
});

gulp.task('build', ['fonts', 'images', 'modal'], function () {
    return gulp.src(['**/*.html', '!./interno/', '!./node_modules/**', '!./bower_components/**', '!./dist/**', './Web.config'])
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cleanCss()))
        .pipe(gulp.dest('dist')
        );
});

// Static Server + watching sass/html files
gulp.task('serve', ['styles'], function () {
    browserSync.use(
        spa({
            selector: '[application]',
            history: {
                index: '/index.html'
            }
        })
    );

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./sass/**/*.sass', ['styles']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

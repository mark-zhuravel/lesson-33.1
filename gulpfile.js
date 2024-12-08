// Подключаем CommonJS модули
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'docs/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'docs/js/'
    },
    html: {
        src: 'src/*.html',
        dest: 'docs/'
    }
};

// Функция стилей с динамическим импортом
async function styles() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;

    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Обрабатываем скрипты
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(terser()) // Минифицируем каждый файл
        .pipe(gulp.dest(paths.scripts.dest)) // Копируем как есть
        .pipe(browserSync.stream());
}

// Копируем HTML файлы
function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// Наблюдение за изменениями
function watch() {
    browserSync.init({
        server: {
            baseDir: './docs' // Указываем корень для сервера
        }
    });

    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.html.src, html);
}

// Экспортируем функции для использования в CLI
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watch;

// Устанавливаем задачу по умолчанию
exports.default = gulp.series(
    gulp.parallel(styles, scripts, html),
    watch
);
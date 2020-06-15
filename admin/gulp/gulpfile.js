const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssUglify = require('gulp-minify-css');
const rename = require('gulp-rename');

const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const imageMin = require('gulp-imagemin');
// const pngQuant = require('imagemin-pngquant'); // 深度压缩插件下载失败
const cache = require('gulp-cache');

const htmlMin = require('gulp-htmlmin');
const del = require('del');
const NODE_ENV = process.env.NODE_ENV;

const options = {
    removeComments: true, // 清除HTML注释
    collapseWhitespace: true, // 压缩HTML
    collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, // 删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, // 删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, // 删除<style>和<link>的type="text/css"
    minifyJS: true, // 压缩页面JS
    minifyCSS: true // 压缩页面CSS
};

// 编译sass
gulp.task('sass', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
});

// 压缩css
gulp.task('cssUglify', function () {
    return gulp.src(['src/css/*.css'])
        .pipe(rename({suffixes: '.min'}))
        .pipe(cssUglify())
        .pipe(gulp.dest(path.resolve(__dirname, '../static/css')))
});

// 压缩js
gulp.task('jsUglify', function () {
    return gulp.src(['src/js/**', 'src/api/**', '!src/js/build/**'])
        .pipe(babel())
        .pipe(rename({suffixes: '.min'}))
       /* .pipe(uglify({
            compress: {
                drop_console: NODE_ENV === 'development' ? false :  true, // 过滤 console
                drop_debugger: NODE_ENV === 'development' ? false :  true // 过滤 debugger
            }
        }))*/
        .pipe(gulp.dest(path.resolve(__dirname, '../static/js')))
});

// 压缩js
gulp.task('jsNoBuildUglify', function () {
    return gulp.src(['src/js/build/**'])
      .pipe(gulp.dest(path.resolve(__dirname, '../static/js/build')))
});


gulp.task('img', function () { //
    return gulp.src('src/images/**')
        // .pipe(cache(imageMin({
        //     optimizationLevel: 5, // 取值范围：0-7（优化等级），默认：3
        //     progressive: true, 	// 无损压缩jpg图片，默认：false



        //     interlaced: true, 	// 隔行扫描gif进行渲染，默认：false
        //     multipass: true 		// 多次优化svg直到完全优化，默认：false
        // })))
        .pipe(gulp.dest(path.resolve(__dirname, '../static/images')));
});

/**
 * 打包静态html。生产环境才会打包。开发环境html目录在template下
 */
gulp.task('html', function () {
   // 开发环境html在template, 生产环境是在views
   return gulp.src([`${path.resolve(__dirname, '../template')}/**`, `!${path.resolve(__dirname, '../template')}/error.html`, `!${path.resolve(__dirname, '../template/transition')}/build.html`])
       .pipe(htmlMin(options))
       .pipe(gulp.dest(`${path.resolve(__dirname, '../views')}`))
});

// 不压缩的html
gulp.task('noBuildHtml', function () {
    // 开发环境html在template, 生产环境是在views
    return gulp.src([`${path.resolve(__dirname, '../template')}/error.html`])
      .pipe(gulp.dest(`${path.resolve(__dirname, '../views')}`))
});

gulp.task('fonts', function () {
   return gulp.src('src/fonts/**')
       .pipe(gulp.dest(path.resolve(__dirname, '../static/fonts')))
});

gulp.task('minFonts', function () {
    return gulp.src(path.resolve(__dirname, '../static/fonts/*.css'))
        .pipe(rename({suffixes: '.min'}))
        .pipe(cssUglify())
        .pipe(gulp.dest(path.resolve(__dirname, '../static/fonts')))
});

// 复制后台模版的静态资源。
gulp.task('copyAssets', function () {
    return gulp.src('src/assets/**')
        .pipe(gulp.dest(path.resolve(__dirname, '../static/assets')))
})

gulp.task('watch', () => {
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
    gulp.watch('src/sass/extension/*.scss', gulp.series('sass'));
    gulp.watch('src/css/**', gulp.series('cssUglify'));
    gulp.watch('src/js/**', gulp.series('jsUglify'));
    gulp.watch('src/images/**', gulp.series('img'));
    gulp.watch('src/fonts/**', gulp.series('fonts'));
});

gulp.task('clean', function () {
    return del([
        'dist',
        path.resolve(__dirname, '../static'),
        path.resolve(__dirname, '../views'),
    ], { force: true });
});

gulp.task('build', gulp.series('clean', 'sass', 'cssUglify', 'jsUglify', 'jsNoBuildUglify', 'img', 'fonts', 'minFonts', 'html', 'noBuildHtml', 'copyAssets'));




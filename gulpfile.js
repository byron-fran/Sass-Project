
const {src, dest , watch, series} = require ('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(dest ('build/css'))
    done();

}

function mirar (done){
    watch('src/**/*.scss', css)
    done();
}

exports.css = css;
exports.mirar = mirar;
exports.default = series (css, mirar);

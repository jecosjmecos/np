const projectFolder = "dist";
const sourceFolder = "src";

const path = {
  build: {
    // html: projectFolder + "/",
    pugs: projectFolder + "/",
    css: projectFolder + "/css/",
    js: projectFolder + "/js/",
    images: projectFolder + "/images/",
    fonts: projectFolder + "/fonts/",
  },
  src: {
    // html: [sourceFolder + "/*.html", "!" + sourceFolder + "/_*.html"],
    pugs: [sourceFolder + "/*.pug", "!" + sourceFolder + "/_*.pug"],
    css: sourceFolder + "/scss/style.scss",
    js: sourceFolder + "/js/*.js",
    images: sourceFolder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: sourceFolder + "/fonts/*",
  },
  watch: {
    // html: sourceFolder + "/**/*.html",
    pugs: sourceFolder + "/**/*.pug",
    css: sourceFolder + "/scss/**/*.scss",
    js: sourceFolder + "/js/**/*.js",
    images: sourceFolder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: sourceFolder + "/fonts/*",
  },
  clean: "./" + projectFolder + "/",
};

const { src, dest } = require("gulp");
const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");
const del = require("del");
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const pug = require("gulp-pug");

function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./" + projectFolder + "/",
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function pug2html() {
  return src(path.src.pugs)
    .pipe(pug({ pretty: true }))
    .pipe(dest(path.build.pugs))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "nested",
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true,
      })
    )
    .pipe(dest(path.build.css))
    .pipe(cleanCss())
    .pipe(rename({ extname: ".css" }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js).pipe(dest(path.build.js)).pipe(browsersync.stream());
}

function images() {
  return src(path.src.images)
    .pipe(
      imagemin({
        progressiv: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(dest(path.build.images))
    .pipe(browsersync.stream());
}

function watchFiles() {
  // gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.pugs], pug2html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
  gulp.watch([path.watch.fonts], fonts);
}

function clean() {
  return del(path.clean);
}

const build = gulp.series(
  clean,
  gulp.parallel(js, css, pug2html, images, fonts)
);
const watch = gulp.parallel(build, watchFiles, browserSync);

exports.js = js;
exports.pug2html = pug2html;
exports.fonts = fonts;
exports.images = images;
exports.css = css;
// exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

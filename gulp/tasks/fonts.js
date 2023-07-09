import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff'

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.src.srcFolder}/fonts/*.otf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'OTFTOTTF',
      message: 'Error: <%= error.message %>'
    }))
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${app.path.src.srcFolder}/fonts/*.otf`))
  )
}


export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.src.srcFolder}/fonts/*.ttf`, {})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'OTFTOTTF',
      message: 'Error: <%= error.message %>'
    }))
    .pipe(fonter({
      formats: ['woff']
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(`${app.path.src.srcFolder}/fonts/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
  )
}
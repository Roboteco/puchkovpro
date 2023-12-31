import gulp from 'gulp'
import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js"

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins
}

import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js"
import { fontscopy } from "./gulp/tasks/fonts.js"

function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}
const mainTask = gulp.parallel(copy, html, scss, js, images, fontscopy)

const dev = gulp.series(reset, mainTask,  gulp.parallel(watcher, server))

gulp.task('default', dev)
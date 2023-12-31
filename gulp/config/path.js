import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './dist'
const srcFolder = './src'

export const path ={
  build: {
    html: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`, 
    scss: `${srcFolder}/scss/style.scss`, 
    html: `${srcFolder}/*.html`,
    fonts: `${srcFolder}/fonts/*.*`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    images: `${srcFolder}/img/**/*.{jpg, jpeg, png, gif, webp, svg}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ''
}
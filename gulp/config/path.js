import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); 

const buildFolder = "./dist"; 
const srcFolder = "./src"; 

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`, 
        html: `${buildFolder}/`, 
        files: `${buildFolder}/files/`, 
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    }, 
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        html: `${srcFolder}/*.html`, 
        files: `${srcFolder}/files/**/*.*`, 
        scss: `${srcFolder}/scss/style.scss`, 
    }, 
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        js: `${srcFolder}/js/**/*.js`,         
        scss: `${srcFolder}/scss/**/*.scss`, 
        html: `${srcFolder}/**/*.html`, 
        files: `${srcFolder}/files/**/*.*`, 
    },
    clean: buildFolder, 
    srcFolder: srcFolder, 
    rootFolder: rootFolder,
    ftp: 'test' 
} 
import gulp from 'gulp'; 
import { path } from "./gulp/config/path.js"; 
import { plugins } from "./gulp/config/plugins.js"; 


global.app = { 
    isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp, 
    plugins: plugins
}

// импорт задач
import { copy } from "./gulp/tasks/copy.js"; 
import { reset } from "./gulp/tasks/reset.js"; 
import { html } from "./gulp/tasks/html.js"; 
import { server } from "./gulp/tasks/server.js"; 
import { scss } from "./gulp/tasks/scss.js"; 
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fonstStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";




// наблюдателей за изменениями в файлах
function watcher() { 
    gulp.watch(path.watch.files , copy);
    gulp.watch(path.watch.html , html);
    gulp.watch(path.watch.scss , scss);
    gulp.watch(path.watch.js , js);
    gulp.watch(path.watch.images ,images);
}


// обработка шрифта
const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fonstStyle);

// основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy,html,scss,js,images)); 



// постороение сценариев 
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server)); 
const build = gulp.series(reset, mainTasks);
const deployzip = gulp.series(reset, mainTasks, zip);
const deployftp = gulp.series(reset, mainTasks, zip);


export { deployzip }
export { deployftp }
export { dev }
export { build }


gulp.task("default", dev ); 



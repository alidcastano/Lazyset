#! /usr/bin/env node

/*
LazyLoad Commands
watch: watches directory and automatically creates resized replicas of new images
create: manually resize image at desired widths
*/

var lazyset = require('commander'); // to easily parse input
var pkg = require('./package.json'); // to access package information
var watcher = require('./watcher');
var resize = require('./resize');

var log = console.log.bind(console);

function missingWidth() {
    log('What sizes do you want? e.g. --width 400,700,1200');
    process.exit();
}

lazyset
  .version(pkg.version)
  .usage('[subcommand] [options]')

lazyset
  .command('watch <dir>')
  .description('watch directory and automically resize any new images')
  .option('-w, --width [width]')
  .action(function (dir, ops) {
      if (ops.width == undefined) {
        missingWidth();
      }
      else {
        var widths = ops.width.split(',');
        log('Start writing, I\'ll take care of the images');
        watcher(dir, widths);
      }
  });

lazyset
  .command('create <path>')
  .description('manually resize chosen image')
  .option('-w, --width [width]')
  .action(function (path, ops) {
      if (ops.width == undefined) {
        missingWidth();
      }
      else {
        var dir = path.substring(0, path.lastIndexOf("/")+1);
        var file = path.split('/').pop();
        var widths = ops.width.split(',');
        log('Resized images coming right up!');
        resize.createImg(dir, file, widths);
      }
  });

lazyset.parse(process.argv);

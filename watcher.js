/*
Watcher
watch image directory
when image added, create replicas at desired widths
*/

var resize = require('./resize'); // to generate new images
var chokidar = require('chokidar'); // to watch directory

module.exports = function (dir, widths) {
  var selfCreated = []; // store created images

  // initialize watcher
  var wch = chokidar.watch(dir, {
    ignored: /[\/\\]\./,
    persistent: true
  });

  wch.on('ready', function() {
      // for any new files, create atlernatives at given widths
      wch.on('add', function(path) {
        var newFile = path.split('/').pop();

        // make sure new file is not the one created by task
        if (selfCreated.indexOf(newFile) <= -1) {
          console.log("deteced new file:" + " " + newFile);
          selfCreated = resize.createImg(dir, newFile, widths);
        }
      })

      wch.on('error', function (error) {
        console.log('watcher error: ' + error)
      })
  })
}

/*
IMAGE RESIZE
create different size images based on desired widths
*/

var jimp = require('jimp');

var createdImgs = [];

// wrap jimp operations in function
var resizeImg = function(dir, name, type, width) {
  var orgImg = dir + name + "." + type; // original image
  var newImg = name + "-" + width + "." + type; // append width to new image name
  var newFile = dir + newImg;

  jimp.read(orgImg, function(err, image){
    if (err) throw err;

    image.resize(width, jimp.AUTO).write(newFile);
    // keep track of created images
    createdImgs.push(newImg);
    console.log(" created:" + " " + newFile);
  });
};


exports.createImg = function(dir, file, widths) {
  // extract image name and type from file
  var info = file.split('.');
  var name = info[0];
  var type = info[1];

  // generate image for each desired width
  for (var i = 0; i < widths.length; i++ ) {
    resizeImg(dir, name, type, parseInt(widths[i]));
  }
  return createdImgs;
}

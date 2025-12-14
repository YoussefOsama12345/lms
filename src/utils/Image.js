
const sharp = require('sharp')

const compressImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .resize(800,600)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log('Image compressed successfully');
    return outputPath;

  } catch(error){
    console.error('Error during image compression:', error);
    throw error;
  }
};

const resizeImage = async (inputPath, outputPath, height, width) => {
  try{
    await sharp(inputPath)
      .resize(height, width)
      .toFile(outputPath);

    console.log('Image resized successfully');
    return outputPath;

  } catch(error){
    console.error('Error during image resizing:', error);
    throw error;
  }
}


const changeImageFormat = async (inputPath, outputPath) => {
  try{
    await sharp(inputPath)
    .toFormat(format)
    .toFile(outputPath);

    console.log('Image format changed successfully');
    return outputPath;

  } catch(error){
    console.error('Error during image format change:', error);
    throw error;
  }
}

const processImage = async (inputPath, outputPath, options = {}) => {
  try{
    let pipeline = sharp(inputPath);

    if(options.width || options.height){
      pipeline = pipeline.resize(options.width, options.height);
    }

    if(options.format){
      const formatOptions = {};
      if(options.quality){
        formatOptions.quality = options.quality;
      }

      pipeline = pipeline.toFormat(options.format, formatOptions);
    }

    await pipeline.toFile(outputPath);

    console.log('Image processed successfully');
    return outputPath;

  } catch(error){
    console.error('Error during image processing:', error);
    throw error;
  }
}

module.exports = {
  compressImage,
  changeImageFormat,
  resizeImage,
  processImage
}

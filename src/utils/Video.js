const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const path = require('path');
const fs = require('fs/promises');
const fsSync = require('fs');

ffmpeg.setFfmpegPath(ffmpegStatic);

async function compressVideo(inputPath, outputPath, crf = 28) {
  try {
    if (!fsSync.existsSync(inputPath)) {
      throw new Error('Input file does not exist.');
    }

    const dir = path.dirname(outputPath);
    await fs.mkdir(dir, { recursive: true });

    return await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        .videoCodec('libx264')
        .outputOptions([
          `-crf ${crf}`,
          '-preset veryfast'
        ])
        .on('start', (cmd) => {
          console.log('FFmpeg started with command:', cmd);
        })
        .on('progress', (progress) => {
          console.log(`Compression progress: ${progress.percent?.toFixed(2)}%`);
        })
        .on('end', () => {
          console.log('Video compression completed successfully!');
          resolve(outputPath);
        })
        .on('error', (err, stdout, stderr) => {
          console.error('Error during video compression:', err.message);
          console.error('stderr output:', stderr);
          reject(new Error('Video compression failed.'));
        })
        .save(outputPath);
    });

  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

module.exports = {
  compressVideo
}

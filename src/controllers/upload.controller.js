const cloudinary = require('../config/cloudinary');

const uploadToCloudinary = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'media'
    });

    return res.status(200).json({
      message: 'Upload successful',
      url: result.secure_url,
      public_id: result.public_id
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const uploadController = {
  uploadToCloudinary
};

module.exports = uploadController;

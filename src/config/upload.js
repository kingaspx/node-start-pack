const path = require("path");
const multer = require("multer");

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: function (req, file, cb) {
      let filename = `yourApp-${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
  }),
};
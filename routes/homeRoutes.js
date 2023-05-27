const express = require('express');
const path = require('path')
const homeController = require('../controllers/homeController');





const multer = require("multer");
const { log } = require('console');
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/uploadImages");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const galleryStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/img/gallery");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const galleryUpload = multer({ storage: galleryStorage });


const videoStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/vid");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const videoUpload = multer({ storage: videoStorage });


const router = express.Router();
router
    .route("")
    .get(homeController.getHome);


router
    .route("/admission")
    .get(homeController.getAdmission)
    .post(upload.fields([{ name: 'childPicture', maxCount: 1 }, { name: 'parentPicture', maxCount: 1 },{ name :'birthCertificate', maxcount:1}]), homeController.createAdmisson);



router
    .route("/contact")
    .get(homeController.getContact)
    .post(homeController.createContact)


router 
  .route("/video")
  .get(homeController.getVideos)
  
router 
  .route("/gallery")
  .get(homeController.getGallery)
  
  
  router
  .route('/admin')
  .get(homeController.getadmin)
  // .post(homeController.newcaptions)
  .post(galleryUpload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 },
    { name: 'image6', maxCount: 1 },
    { name: 'image7', maxCount: 1 },
    { name: 'image8', maxCount: 1 },
    { name: 'image9', maxCount: 1 },
  ]),homeController.newImgCaptions);
  
router
  .route('/admin/videos')
  .get(homeController.getadmin)
  // .post(homeController.newcaptions)
  .post(
  videoUpload.fields([
    { name: 'video1', maxCount: 1 },
    { name: 'video2', maxCount: 1 },
    { name: 'video3', maxCount: 1 },
    { name: 'video4', maxCount: 1 },
    { name: 'video5', maxCount: 1 },
    { name: 'video6', maxCount: 1 },
    { name: 'video7', maxCount: 1 },
    { name: 'video8', maxCount: 1 },
    { name: 'video9', maxCount: 1 },
  ]),homeController.newVideoCaption);

router
  .route('/admin/login')
  .post(homeController.login)

router
  .route('/admin/insights')
  .get(homeController.insights)


router.post('/admin/updateData', homeController.updateData);

  
  module.exports = router;
  // router
//   .route('/admin/download')
//   .get(homeController.downloadadmin)



router.use(express.static(path.join(__dirname, 'public')))

module.exports = router;

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
  .route('/enquiries')
  .get(homeController.getEnquiries)
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
  ]), (req, res) => {
    // Handle the uploaded images here
    console.log(req.files);

    // res.status(200).send('Images uploaded successfully');
  });


  
  
router
  .route('/enquiries/download')
  .get(homeController.downloadEnquiries)


router.use(express.static(path.join(__dirname, 'public')))

module.exports = router;

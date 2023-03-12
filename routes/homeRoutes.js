const express = require('express');
const path = require('path')
const homeController = require('../controllers/homeController');

const fs = require("fs");


const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./public/uploadImages");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });


const router = express.Router();
router
    .route("")
    .get(homeController.getHome);


router
    .route("/admission")
    .get(homeController.getAdmission)
    .post(upload.fields([{ name: 'childPicture', maxCount: 1 }, { name: 'parentPicture', maxCount: 1 }]), homeController.createAdmisson);

router
    .route("/registration")
    .get(homeController.getRegistration);


router
    .route("/activity")
    .get(homeController.getActivity);
    

router
    .route("/contact")
    .get(homeController.getContact)
    .post(homeController.createContact)


// router 
//   .route("/enquiries")
//   .get(homeController.getEnquiries)

router 
  .route("/video")
  .get(homeController.getVideos)
  
router 
  .route("/gallery")
  .get(homeController.getGallery)
  
router 
  .route("/enquiries")
  .get(homeController.getEnquiries)
  
  
router
  .route('/enquiries/download')
  .get(homeController.downloadEnquiries)

//     .route("/admission")
//     .get(admissionController.getPage);

// router
//     .route("/registration")
//     .get(registrationController.getPage);

// router
//     .route("/activity")
//     .get(activityController.getPage);
    

// router
//     .route("/contact")
//     .get(contactController.getPage);

router.use(express.static(path.join(__dirname, 'public')))

module.exports = router;

const express = require('express');
const path = require('path')
const homeController = require('../controllers/homeController');
// const admissionController = require('../controllers/admissionController');
// const registrationController = require('../controllers/registrationController');
// const activityController = require('../controllers/activityController');
// const contactController = require('../controllers/contactController');

const router = express.Router();
router
    .route("")
    .get(homeController.getHome);


router
    .route("/admission")
    .get(homeController.getAdmission);

router
    .route("/registration")
    .get(homeController.getRegistration);

router
    .route("/activity")
    .get(homeController.getActivity);
    

router
    .route("/contact")
    .get(homeController.getContact);

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

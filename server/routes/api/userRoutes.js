//imports 
const router = require('express').Router();
const multer = require('multer');

//functions for controllers
const { createUser } = require('../../controllers/userControllers');
const { submitResume, getFile } = require("../../controllers/fileControllers");
// const { getFile } = require('../../controllers/fileControllers')

//route for creating user
router.route('/createUser').post(createUser);

// multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

//route for multer file storage
router.route('/submitResume')
    .post(upload.single("file"), submitResume);


router.route('/getFile/:filename').get(getFile)
module.exports = router;


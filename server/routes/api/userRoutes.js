//imports 
const router = require('express').Router();
const multer = require('multer');
// const cookieParser = require("cookie-parser")
//functions for controllers
const { createUser, loginUser, userAuth } = require('../../controllers/userControllers');
const { submitResume, getFile } = require("../../controllers/fileControllers");

// router.use(cookieParser)

//route for creating user
router.route('/createUser').post(createUser)
router.route('/login').post(loginUser)
router.route('/auth').get(userAuth)

// multer setup
const storage = multer.memoryStorage()
const upload = multer({ storage })

//route for multer file storage
router.route('/submitResume')
    .post(upload.single("file"), submitResume)


router.route('/getFile/:filename').get(getFile)
module.exports = router;


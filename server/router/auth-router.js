const express = require('express');

const router = express.Router();

const {signupSchema, loginSchema} = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');

const Controller = require('../controllers/auth-controller');
const authMiddleware = require('../middlewares/auth-middleware');

// router.get('/', (req,res) => {
//     res.status(200).send("wellcome...");
// })

const multer = require("multer");                               //Upload Images
const path = require("path");


const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null, path.join(__dirname, '../../client/public/userimages'));
    },
    filename : function(req , file , cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name);
    }
})
const upload = multer({storage : storage});

router.route('/').get(Controller.home)


router.route('/register').get(Controller.register)

router.route('/register').post(upload.single('image'), validate(signupSchema), Controller.register)

router.route('/login').post(validate(loginSchema), Controller.login)

router.route('/user').get( authMiddleware, Controller.user);


module.exports = router;
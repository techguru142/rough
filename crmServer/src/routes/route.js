const express = require('express')
const router = express.Router()
const {userRegister, userLogin,logoutUser, getAllUser,allocateTask} = require('../constrollers/userController');
const{data} = require('../constrollers/file')
// var multer = require('multer')

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now());
//     },
//   });
  
//   var upload = multer({ storage: storage });
// Employee router
router.post('/userRegister', userRegister);
router.post('/userLogin', userLogin);
router.get('/userLogout', logoutUser);
router.get('/getUser', getAllUser)

router.post('/task', allocateTask)

//router.post('/data',upload.single('file'),data );

module.exports = router;
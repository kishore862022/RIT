const {Router} =require('express');
const controller = require('./controller');
const router = Router();

router.get('/',controller.getcoursedata);
router.post('/',controller.addcoursdata);

module.exports = router;

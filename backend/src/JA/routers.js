const {Router} =require('express');
const controller = require('./controller');
const router = Router();

router.get('/',controller.getcoursedata);
router.post('/',controller.addcoursdata);
router.post('/university_mark',controller.add_university_mark_data)

module.exports = router;

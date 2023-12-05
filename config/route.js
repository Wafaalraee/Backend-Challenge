const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.goHomePage);
router.post('/feed',controllers.createPost);
router.post('/delete-user/:id', controllers.deleteUser);
router.get('/feed/:id',controllers.getArticle);
router.get('/feed/edit/:id', controllers.editArticle);
router.post('/update-post/:id', controllers.updatePost)

module.exports = router;
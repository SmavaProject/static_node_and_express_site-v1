const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');

router.get('/', (request, response)=>{

    response.render('index', {projects});
});


module.exports = router;

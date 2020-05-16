const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/:id', (req, res) =>{
    data.projects.forEach(project =>{
        if (project.id === req.params.id){
            res.render('project', {project});
        }
    })
});



module.exports = router;

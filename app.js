const express = require('express');
const data = require('./data.json'); //path!!!
const app = express();

app.use('/static', express.static('public'));


const indexRoute = require('./routes'); //An "index" route (/) to render the "Home" page with the locals set to data.projects
app.use(indexRoute);
const about = require('./routes/about.js');
app.use('/about', about);

const project = require('./routes/project.js');
app.use('/project', project);

app.set('view engine', 'pug');

app.use((req,res, next) =>{
    const err = new Error('Page Not Found... Please try something else');
    err.status = 404;
    next(err);
});
//custom error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});


app.listen(3000, ()=> {
    console.log('The app is running on  localhost:3000');
});

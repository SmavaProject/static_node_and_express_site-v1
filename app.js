const express = require('express');
const data = require('./data.json'); //path!!!
const app = express();
//Optionally - the path module which can be used when setting the absolute path in the express.static function.


app.use('/static', express.static('public'));


const indexRoute = require('./routes'); //An "index" route (/) to render the "Home" page with the locals set to data.projects
app.use(indexRoute);
const about = require('./routes/about.js');
app.use('/about', about);
/***
 * Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version of
 * the Pug project template to show off each project.
 * Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
 */
const project = require('./routes/project.js');
app.use('/project', project);

app.set('view engine', 'pug');



//Refer to the video on Error handling Middleware, which is linked in the project resources list.

//function which catches errors and passes them to the error handler
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

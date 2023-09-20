//import database
const db = require('../models/lunchesModels');

//empty object to contain our controller functions
const lunchesController = {};

//GET function - retrieves a randomized restaurant from the total array and adds it to local storage
lunchesController.getLunch = (req, res, next) => {
    const text = 'SELECT * FROM "public"."restaurants"';

    db
    .query(text)
    .then(result => {
        res.locals.lunch = result; //***need to find out what result is so I can filter it
        console.log('this is the query result', result)
        next();
    })
    .catch(err => next({
        log: 'Couldn\'t deliver lunch to you!',
        status: 400,
        message: `lunchesController.getLunch ERROR: ${err}`
    }))
}

module.exports = lunchesController;
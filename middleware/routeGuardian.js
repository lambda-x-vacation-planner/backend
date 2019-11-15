// this middle ware uses our token to validate if the user is signed in
// then checks for their email to confirm this
const { tkTake } = require('./tkservice');
const searchUsers = require('../api/model/user');

// the function requires you to give it a token and the response from the route
function routeGuardian(token, res){
    token === undefined || token === null
    ? res.status(401).json({message: 'You must be logged in to do that.'})
    : searchUsers.findByEmail(tkTake(token, res))
    .then(user => {
        user.email === tkTake(token, res) && user != null && user != undefined
        ? console.log('Request Validated by Authentication')
        : res.status(401).json({message: 'You are not allowed.'});
    }).catch(error =>res.status(500).send(error))
};

module.exports = routeGuardian;
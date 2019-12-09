require('dotenv').config();
// the key MUST be 32 bits or it WILL ERROR OUT
const key = process.env.TOKEN_KEY;
const branca = require('branca')(key);

// the password giver is given a token
function tkGive(email) {
    try {   const token = branca.encode(email);
            return token} 
catch(e){   console.log(e)}
}

// tkTake takes both a token AND a response so it can send status codes
function tkTake(token, res){
    try{    const payload = branca.decode(token);
            return payload.toString();}
catch(e){   console.log(e) && res.status(401).json({ message: 'You are not authorized. Please sign in'});}
}

// this middleware takes care of tokens using the dependency branca
module.exports = { tkGive, tkTake }

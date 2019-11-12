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

// the token giver will receive a secret password
function tkTake(token){
    try{    const payload = branca.decode(token);
            return payload.toString();}
catch(e){   console.log(e)}
}

// this middleware takes care of tokens using the dependancey branca
module.exports = {tkGive, tkTake}

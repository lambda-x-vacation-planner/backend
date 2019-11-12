const key = process.env.TOKEN_KEY;
console.log(key)
const branca = require('branca')(key);

function tkGive(password) {
const token = branca.encode(password);
return token
}

function tkTake(token){
const payload = branca.decode(token);
return payload.toString();
}

// this middleware takes care of tokens using the dependancey branca
module.exports = {tkGive, tkTake}

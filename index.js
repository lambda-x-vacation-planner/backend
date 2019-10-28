const server = require('./server')

let now = new Date().getTime();


const port = process.env.PORT || 5001 || 5002;

server.listen(port, () => {console.log(`SERVER LIVE \nTIME IS ${now}`)})
const server = require('./server')

let now = new Date().toLocaleString();


const port = process.env.PORT || 5001 || 5002;

server.listen(port, () => {console.log(`\n***  Welcome, Developer.  *** \n     SERVER LIVE ON ${port} \n/--------------------------/\n   ${now}\n`)})
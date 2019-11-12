const express = require('express');

function logger(req, res, next){
    if(req){
    const { method, originalUrl } = req;
    let timestamp = new Date().toLocaleDateString();
    console.log(`Request for ${ res.req.rawHeaders[0] }: ${ res.req.rawHeaders[1] }${originalUrl} on ${timestamp}, from ${ res.req.rawHeaders[2] }: ${ res.req.rawHeaders[3] }`,)
    next();
    } else { next(); }
};

module.exports = logger;



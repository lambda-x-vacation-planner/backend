const express = require('express');

function logger(req, res, next){
    if(req){
    const { method, originalUrl } = req;
    let timestamp = new Date().toLocaleDateString();
    console.log(`${method} request from ${originalUrl} on ${timestamp}`)
    next();
    } else { next(); }
};

module.exports = logger;
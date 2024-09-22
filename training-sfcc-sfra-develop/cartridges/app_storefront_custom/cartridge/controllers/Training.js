'use strict';

var server = require('server');
var Resource = require('dw/web/Resource'); // Import the Resource module for localization

// Create a new GET endpoint with the route 'HelloWorld'
server.get('HelloWorld', function (req, res, next) {
    var helloMessage = Resource.msg('hello.world.message', 'training', 'Hello, World!'); // Localized message
    res.render('training/helloWorld', {
        helloMessage: helloMessage // Pass the localized message to the ISML template
    });
    next();
});

module.exports = server.exports();

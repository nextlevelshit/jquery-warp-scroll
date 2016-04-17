// budo example.js --live --host localhost

var warp = require('./index');
var $ = require('jquery');

// Creating slides container
var slides = document.createElement('div');
// Adding attributes
slides.setAttribute('class', 'slides');
// Adding slides container to document body
document.body.appendChild(slides);
// Initiating jquery-warp-scroll on slides container
var test = $('.slides').warp({
    dots: false,
    transition: 'linear'
});

console.log(test.length);
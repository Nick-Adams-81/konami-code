"use strict";

// sound variables
var sound = new Audio('audio/cookie-down.mp3');
var soundEffect = new Audio('click.wav');

// adding sound effect to button 1 hover
$('#btn-1').hover(function() {
    soundEffect.play();
}, function() {
    soundEffect.pause();
})

// hiding the player buttons until code is inputted
$('#btn-2').css('display', 'none');
$('#btn-3').css('display', 'none');

// correct konami code
var thirtyLives = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';

// empty string to store user input
var code = '';
document.documentElement.style.setProperty('--animate-duration', '.5s');

$(document).keyup(function(event) {

    // adding user input to empty string for comparison to konami code
    code += event.key;

    // comparing user input string to correct konami code
    if(code === thirtyLives) {
        alert('You have added 30 lives!');

        // setting the background color to black
        $('body').css('background-color', 'black');

        // hiding the initial header when code is inputted
        $('h1').css('display', 'none');

        // contra main logo
        $('img').attr('src', 'https://dreamteck.io/images/blog/upld/mitko_contra_example.jpg').css('height', '350px').css('width', '100%').attr('class', 'animate__animated animate__fadeInRight').css('--animate-duration', '2s').css('margin-top', '-20px')

        // konami logo
        $('#konami').attr('src', 'https://i.ytimg.com/vi/DIzNo9Y6408/hqdefault.jpg').css('height', '120px').css('width', '200px').css('padding-top', '5px').attr('class', 'animate__animated animate__fadeIn').css('--animate-duration', '6s').css('margin-bottom', '7px').css('margin-left', '500px').css('margin-top', '23px');

        // hiding the try code again button
        $('#btn-1').css('display', 'none');

        // showing the player 1 button when code is inputted
        $('#btn-2').css('display', 'block').attr('class', 'animate__animated animate__fadeIn').css('--animate-duration', '7s').hover(function() {
            soundEffect.play();
        }, function() {
            soundEffect.pause();
        });

        // showing player 2 button when code is inputted
        $('#btn-3').css('display', 'block').attr('class', 'animate__animated animate__fadeIn').css('--animate-duration', '7s').hover(function() {
            soundEffect.play();
        }, function() {
            soundEffect.pause();
        });

        // contra guys image
        $('#img2').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG5O09lUBdZvz33hXfaGIWzYlF_4gDW8sGg6Zx0NBqhe0FvbaT66FM43hBWlhuGEtsxw&usqp=CAU').css('height', '300px').css('width', '300px').css('margin-bottom', '60px').css('z-index', '1').css('border-radius', '10px').css('margin-left', '100px');
        // playng the sound when code is inputted
        sound.play();
    }
});
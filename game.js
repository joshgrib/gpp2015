/* shouldn't be needed because I do it in HTML
//Create the canvas
var canvas = document.createElement("canvas"); //create the canvas
var ctx = canvas.getContext("2d"); //used to issue drawing commands
canvas.width = 1024; //set width
canvas.height = 768; //set height
document.body.appendChild(canvas); //add it to the document
*/

//Background image
var bgReady = false; //waits for the image to load before drawing it to avoid DOM errors
var bgImage = new Image();
bgImage.onload = function() {
    bgReady = true;
};
bgImage.src = "";

//Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function() {
    heroReady = true;
};
heroImage.src = "";

//Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function() {
    monsterReady = true;
};
monsterImage.src = "";

//Game objects
var hero = {
    speed : 100; //pixels per second
    x: 0;
    y: 0;
};
var monster = {
    x: 0;
    y: 0;
};
var monstersCaught = 0;

//keyboard controls
var keysDown = {};
addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

//reset some stuff to begin a new game/level/whatever
var reset = function () {
    /* I don't want this
    //Reset the game when the player catches a monster
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
    */
    //put the monster somewhere random
    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};


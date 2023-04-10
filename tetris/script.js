
//https://www.youtube.com/watch?v=rAUn1Lom6dw

document.addEventListener('DOMContentLoaded', () => {

// Width of board in 1x1 squares
const width = 10;


// Grab our game grid
const grid = document.querySelector('.grid');

// Grabbing each individual square from HTML and creating an array
const squares = Array.from(document.querySelectorAll('.grid div'));

// Grabbing element that display score
const displayScore = document.querySelector('.score-text');

// Grab start button
const startBtn = document.querySelector('#start-btn');


//Colors for tetrominos
const colors = ['#1B5299', '#F5CB5C', ' #4A306D', '#2BA84A', '#A8201A']


//Building out  Game shapes - Using width to help draw shapes

//Each sub array is the different rotations the current shape has.


const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
];

const zTetromino = [
    [0,width,width+1,width*2+1],
    // Will be the same as the last array in this shape
    [width+1, width+2,width*2,width*2+1],
    //Will be the same as the first array in this shape
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
];

// Looks the same any rotation all arrays would be the same
const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
];

const iTetromino = [
    //First and third rotation same
    [1,width+1,width*2+1,width*3+1],
    // Horizontals are the same - last element in array
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ];


//Every single rotation is different
const tTtetromino = [
    [1,width,width+1,width+2],
    //point right
    [1,width+1,width+2,width*2+1],
    //pointing down
    [width,width+1,width+2,width*2+1],
    //pointing left
    [1,width,width+1,width*2+1]
  ];


// Store each tetrominos and their rotations in another array
const tetrominos = [lTetromino, zTetromino, oTetromino, iTetromino, tTtetromino];

//Current position shape is at
let currentPosition = 4;
// Current rotation of the current shape
let currentRotation = 0;


// Need to randomly select a shape 
let random = Math.floor(Math.random()*tetrominos.length);

//Current shape we have based of of the tetrominos array - generates random shape but will start at rotation 0;
let currentShape = tetrominos[random][currentRotation];


// Control - assign functions to keyCodes 
// Left - 37
// Right - 39 
// Space - 32
// Down - 40

function control(e) {
  if(e.keyCode === 37){
    //Move left
    leftMove();
  } else if (e.keyCode === 32) {
    //Rotate
    rotate()
  } else if (e.keyCode === 39) {
    // Move right
    rightMove()
  } else if (e.keyCode === 40) {
    // SpeedUp

  }
}

// Attach control to event listener
document.addEventListener('keyup', control);












//Draw the current shape in the current position and rotation
function drawShape(){
  //Take the current shape
  currentShape.forEach(index => {
    //For each element in the current shape - add a class list that will change the color
    squares[currentPosition + index].classList.add('tetromino');
  })
};

drawShape();


// Undraw the current shape 
function removeDraw(){
  currentShape.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino');
  })
};


//Timer id - be able to clean up setInterval
let timerID = setInterval(moveDown, 0500);

//Running every couple seconds to give the falling effect by adding to the with and drawing/undrawing shape
function moveDown(){
  removeDraw()
  currentPosition += width
  drawShape()
  //Freeze - checks to see if its at bottom and assigns a new shape to start falling
  freeze()
};


function freeze() {
  //Checks to see if current shape has reached a taken square
  if(currentShape.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
    // IF so add the class taken to it as well to stop it from falling
    currentShape.forEach(index => squares[currentPosition + index].classList.add('taken'))
    //start a new tetromino falling
    nextRandom = Math.floor(Math.random() * tetrominos.length)
    random = nextRandom
    current = tetrominos[random][currentRotation]
    currentPosition = 4
    drawShape()
    // displayShape()
    // addScore()
    // gameOver()
  }
}











//Checking edge boundaries - keeps from splitting shape on the edges of array.
function leftMove(){
  removeDraw()
  // If one of the positions of the squares from the current shape is in 10, 20, etc and the width of our grid is 10 remainder is 0 meaning its at the left edge
  const leftEdge = currentShape.some(index => (currentPosition + index) % width === 0) // Returns true/false

  if(!leftEdge){
    currentPosition -= 1
  } // Moves left by 1 

  if(currentShape.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition += 1;
  }
  drawShape()

}


function rightMove(){
  // Un draw shape
  removeDraw();
  // Check to see if at right edge
  const rightEdge = currentShape.some(index => (currentPosition + index) % width === width - 1) // Returns true of false

  // Move it right
  if(!rightEdge) currentPosition += 1;

  if(currentShape.some(index => squares[currentPosition + index].classList.contains(''))){
    currentPosition -= 1;
  }

  //draw shape
  drawShape();
}




//Rotate shape
function rotate(){
  removeDraw();
  // Move to the next 
  currentRotation++
  //Check to see if its reached the end of the array
   if(currentRotation === currentShape.length){
    currentRotation = 0;
   }
   currentShape = tetrominos[random][currentRotation]
  drawShape();
}
























})// Close document event listener
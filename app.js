// document.querySelectorAll('button').addEventListener('click', handleClick);

// function handleClick() {
//     alert('i am clicked')
// }


var numberOfButtons=document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {
        // alert('i got clicked');
        console.log(this);      //<button class="s drum">s</button>
        // this.style.color="white";
        console.log(this.innerHTML);        //s
    });

// above function is an ANONYMYS FUNCTION ie function with no name
}

// HIGHER ORDER FUNCIONS: functions which take other functions as input like addEventListener(input1, function)

// TO PLAY SOUNDS IN JS
var audio=new Audio('sounds/tom-1.mp3');    // new Audio is an object
// here var audio(name can be changed) is a variable which stores the new object Audio
audio.play();


// functions name starting whith CAPITAL LETTERS is a CONSTRUCTOR

// TASK: MAKE A CALCULATOR FUNCTION
// function add(num1, num2) {
// return num1 + num2;
// } 
// function subtract(num1, num2) {
// return num1 - num2;
// } 
// function multiply(num1, num2) {
// return num1 * num2;
// } 
// function divide(num1, num2) {
// return num1 / num2;
// } 
// function calculator(num1, num2, operator) {      // here 'operator' is a function
// return operator(num1, num2);
// }
// calculator(4,5,multiply);
// calculator(3,7,add);

// TO DEGUB IN CONSOLE
// debugger;       //then write the function which you want to debugg
// calculator(3,4, multiply);


// UNDERSTANDING OBJECTS & CONSTRUCTORS
// var bellBoy1={
//     name: "Timmy",
//     age: 19,
//     hasWorkPermit: true,
//     languages: ["French", "English"]
// }

// var bellBoy2={
//     name: "Yash",
//     age: 21,
//     hasWorkPermit: true,
//     languages: ["German", "English"]
// }

// var bellBoy3={
//     name: "Timmy",
//     age: 18,
//     hasWorkPermit: true,
//     languages: ["Spanish", "English"]
// }
// alert("Hello, my name is "+ bellBoy1.name);

// var houseKeeper1={
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleanRepertoire: ["bathroom", "lobby"]
// }


// CONSTRUCTOR FUNCTION (capital name)
// making so many bellboys can be tyring and will have too much repetition so instead we create a function called CONSTRUCTOR
// construc. function takes a number of inputs & these are the inputs which we provide when we create NEW OBJECTS from this constructor function

function BellBoy (name, age, hasWorkPermit, languages){
    this.name= name;
    this.age= age;
    this.hasWorkPermit= hasWorkPermit;
    this.languages= languages;
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var bellBoy2 = new BellBoy("Jimmy", 21, true, ["German", "English"]);

// main differenc in syntax of SIMPLE function and CONSTRUCTOR function is the NEW KEYWORD & CAPITAL LETTER

function houseKeeper(yearsOfExperience, name, cleanRepertoire){
    this.yearsOfExperience= yearsOfExperience;
    this.name=name;
    this.cleanRepertoire=cleanRepertoire;
}

var houseKeeper1= new houseKeeper(12, "Jane",["bathroom", "lobby"])
console.log(houseKeeper1.name)  //Jane

// START FROM VIDEO 167 --> SWITCH CASE
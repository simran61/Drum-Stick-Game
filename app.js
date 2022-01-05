// REVISE VIDEO 171 VERY VERY VERY IMPORTANT (SOME ADVANCED STUFF)

// document.querySelectorAll('button').addEventListener('click', handleClick);

// function handleClick() {
//     alert('i am clicked')
// }


var numberOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function () {  // this function is an ANONYMYS FUNCTION ie function with no name
        // alert('i got clicked');
        console.log(this);      //<button class="s drum">s</button>
        // this.style.color="white";
        console.log(this.innerHTML);        //s

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML);

        // switch (buttonInnerHTML) {
        //     case "w":
        //         // TO PLAY SOUNDS IN JS
        //         var audio = new Audio('sounds/tom-1.mp3');    // new Audio is an object
        //         // here var audio(name can be changed) is a variable which stores the new object Audio
        //         audio.play();
        //         break;

        //     case "a":
        //         var audio = new Audio('sounds/tom-2.mp3');    
        //         audio.play();
        //         break;

        //     case "s":
        //         var audio = new Audio('sounds/tom-3.mp3');    
        //         audio.play();
        //         break;

        //     case "d":
        //         var audio = new Audio('sounds/tom-4.mp3'); 
        //         audio.play();
        //         break;

        //     case "j":
        //         var audio = new Audio('sounds/snare.mp3'); 
        //         audio.play();
        //         break;

        //     case "k":
        //         var audio = new Audio('sounds/crash.mp3');    
        //         audio.play();
        //         break;

        //     case "l":
        //         var audio = new Audio('sounds/kick-bass.mp3');   
        //         audio.play();
        //         break;

        //     default:
        //         console.log(buttonInnerHTML);
        // }
    });
}

document.addEventListener('keypress', function (event) {    //writing 'event' or 'e' or 'evt' will help  us to tap into the event which tiggered the function
    console.log(event);     //KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …}
    // alert('key is pressed')
    makeSound(event.key)

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            // TO PLAY SOUNDS IN JS
            var audio = new Audio('sounds/tom-1.mp3');    // new Audio is an object
            // here var audio(name can be changed) is a variable which stores the new object Audio
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3');    
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3');    
            audio.play();
            break;

        case "d":
            var audio = new Audio('sounds/tom-4.mp3'); 
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/snare.mp3'); 
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/crash.mp3');    
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');   
            audio.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

function  buttonAnimation(currentKey) {
    var activeBtn=document.querySelector("."+currentKey);
    activeBtn.classList.add('pressed')  //this is our css class

    setTimeout(function(){
        activeBtn.classList.remove('pressed')
    }, 200);
}


// HIGHER ORDER FUNCIONS: functions which take other functions as input like addEventListener(input1, function)
// CALLBACK FUNCTIONS: these are given as inputs to another functions. They allow us to wait for something to finish happening like waiting for a click event & THEN CALLED BACK & executed


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

// function BellBoy(name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
// var bellBoy2 = new BellBoy("Jimmy", 21, true, ["German", "English"]);

// main differenc in syntax of SIMPLE function and CONSTRUCTOR function is the NEW KEYWORD & CAPITAL LETTER

// function houseKeeper(yearsOfExperience, name, cleanRepertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleanRepertoire = cleanRepertoire;
// }

// var houseKeeper1 = new houseKeeper(12, "Jane", ["bathroom", "lobby"])
// console.log(houseKeeper1.name)  //Jane

// // OBJECT
// var bellBoy1={
//     name: "Timmy",
//     age: '19',
//     hasWorkPermit: true,
//     languages: ["French", "English"],
//     moveSuitcase: function(){
//         alert("May I take your suitcase?");
//         pickUpSuitcase();
//         move();
//     }
// // }
// bellBoy1.moveSuitcase();

// // CONSTRUCTOR FUNCTION
// function bellBoy1( name, age, hasWorkPermit, languages) {
//     this.name= name;
//     this.age= age;
//     this.hasWorkPermit= hasWorkPermit;
//     this.languages= languages;
//     this.moveSuitcase= function(){
//         alert("May I take your suitcase?");
//         pickUpSuitcase();
//         move();
//     }
// }

// CONSTRUCTOR FUNCTION
// function houseKeeper(yearsOfExperience, name, cleanRepertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleanRepertoire = cleanRepertoire;
//     this.clean= function(){
//         alert("Cleaning in progress..")
//     }
// }

// var houseKeeper1 = new houseKeeper(12, "Jane", ["bathroom", "lobby"])
// houseKeeper1.clean();       //cleaning in progress

// UNDERSTANDING JS PLAY()

// // TO PLAY SOUNDS IN JS
// var tom1=new Audio('sounds/tom-1.mp3');    // new Audio is an object
// // here var audio(name can be changed) is a variable which stores the new object Audio
// tom1.play();

// THIS LOOKS SIMILAR TO A CONSTRUCTIOR FUNCTION WHICH CAN BE AS FOLLOWS

// function Audio(fileLocation) {
//     this.fileLocation=fileLocation;
//     this.play= function (){
//         //tap into the audio hardware
//         // check the file a t file location exists
//         // check the file at fileLocation is a sound file
//         // Play the file at fileLocation
//     }
// }
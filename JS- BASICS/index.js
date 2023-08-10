// document.getElementById("count-el").innerText = 5

//--------------------------------------------------------------------

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
//  console.log(count);

// let myAge = 40;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge, 'years, if i wer a dog');

//----------------------------------------------------------------------

// assigning
// let count = 5;

// re-assigning
// count + 1
// count = count + 1; // 5 + 1 = 6    increment

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);
 
// initialize the count as 0

//-------------------------------------------------------------------------

// function increment() {
//     console.log('the button was clicked');
// }

//------------------------------------------------------------------------

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countdown()

// countdown()

// function romelpogi() {
//     console.log(42);
// }
// romelpogi()

//----------------------------------------------------------------
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;


// function logLapTime() {
//     // let totalTime = lap1 + lap2 + lap3;
//     // console.log(totalTime);
    
//     // or
//     console.log(lap1 + lap2 + lap3);
//     }

// logLapTime()

//-----------------------------------------------------------------------------

// Create a function that increments the lapsCompleted variable with one
// Run it three times

// let lapsCompleted = 0

// function incrementLap(){
//     lapsCompleted = lapsCompleted +1;
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted);

// or

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);
// }
// incrementLap()

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);
// }

// incrementLap()


// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted);
// }

// incrementLap()

// or

// let lapsCompleted = 0

// function incrementLap () {
//     lapsCompleted = lapsCompleted + 1;
 
// }
// incrementLap()

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
   
// }
// incrementLap()

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1;
   
// }
// incrementLap()

// console.log(lapsCompleted);

// ---------------------------------------------------------------------------

// document.getElementById("count").innerText = 5
// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// function increment() {
//      console.log('clicked');     // this is to check if the increment button has bugs
// }

// let countEl = document.getElementById('count-el'); // pass in arguments

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count  
// }

// // 1. Create a function, save(), which logs out the count when it's called


// function save(){
//     console.log(count);
// }

// ------------------------------------------------------------------------------

// let username = 'per';
// // Create a variable, message, that stores the string: "You have tree new notifications"
// // console.log(username);

// let message = 'You have three new notifications';

// let messageToUser = message + ', ' + username + '!';

// console.log(messageToUser);


// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = 'Romel A. Moreno';
// let greeting = 'Hi my name is';
// let myGreeting = greeting + ' ' + name;
// console.log(myGreeting); 

// let points = 4;
// let bonusPoints = '10';
// let totalPoints = points + bonusPoints
// console.log(totalPoints);

// console.log(4 + 5); // 9
// console.log('2' + '4'); // 24
// console.log('5' + 1); // 51
// console.log(100 + '100'); // 100100

//--------------------------------------------------------------------------------------

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById('welcome-el');

// // Create two variables (name & greeting) that contains your name
// // and the greeting we want to render on the page
// let name = 'Romel A. Moreno';
// let greeting = 'Welcome back ';

// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name;

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1
// // welcomeEl.innerText = welcomeEl.innerHTML + '👋'
// //or
// welcomeEl.innerText+= '👋';

//---------------------------------------------------------------------------------------

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}






















// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = 21;
console.log(numToString.toString());

// Write a JavaScript program to convert a string to the number.

let word = "7";
console.log(Number(word));
//TEST TEST TEST

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:


  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.

const adder = (num1, num2) => {
  return num1 + num2
}

console.log(adder(7, 2))


// Write a JavaScript program that runs only when 2 things are true.
let conditionOne = true
let conditionTwo = true

if (conditionOne === true && conditionTwo === true){
  console.log("This message will only run if both conditions are true. ")
}
  else
{
  console.log("This message will only run if one condition is NOT true. ")
}



// Write a JavaScript program that runs when 1 of 2 things are true.

let conditionThree = true
let conditionFour = false

if (conditionThree === true || conditionFour === true){
  console.log("This message will only run if EITHER/OR conditions are true. ")
}


// Write a JavaScript program that runs when both things are not true.  
let conditionFive = false
let conditionSix = false

if (conditionFive === false  && conditionSix === false){
  console.log("This message should only run if both conditions are NOT TRUE.  ")
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

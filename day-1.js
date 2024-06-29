let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  playerOne.special  = prompt("What is player one special?")
  
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.


  
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}? My special move is ${playerOne.special}! `;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  customer.order = prompt("What's your order number?")
  
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  

  
 
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}. Order number ${customer.order}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};
  pet.name = prompt("what is your pet name?")
  pet.age = prompt("What is your pet age?")
  pet.color = prompt("What color is your pet?")

  
  // TODO: create a prompt to ask about a pet

  
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `Well hello, ${pet.name} your owner shared this infomation about you. Your ${pet.age} and ${pet.color}.`;
}
part3.onclick = day1Part3;



// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  let person;
  person = {};
  person.name = prompt("What is your name?")
  person.age = prompt("What is your age?")
  person.favcolor  = prompt("What is your fav color?")
  person.eyecolor = prompt("What color is your eyes?")



  messageParagraph.innerHTML = `Hello, ${person.name} today we asked you for your age which is ${person.age}, your favorite color is ${person.favcolor},and your eye color is ${person.eyecolor}.`;
  

  
}

part4.onclick = day1Part4;
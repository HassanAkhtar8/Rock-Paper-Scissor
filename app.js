const arr = ["rock", "paper", "scissor"];
function getComputerSelection(){
  return arr[Math.floor(Math.random()*3)];
}

const playerSelection = prompt("chose your option:").toLocaleLowerCase();
 console.log(playerSelection);
const computerSelection = getComputerSelection();
console.log(computerSelection);

function playRound(playerSelection, computerSelection){ 
 if( computerSelection === playerSelection){
   return "It's a draw"
 } else if(playerSelection == "rock" && computerSelection == "paper"){
   return "AI won the game"
 } else if(playerSelection == "rock" && computerSelection == "scissor"){
   return "Player won the game"
 } else if(playerSelection == "paper" && computerSelection == "scissor"){
   return "AI won the game"
 } else if(playerSelection == "paper" && computerSelection == "rock"){
   return "Player won the game"
 } else if(playerSelection == "scissor" && computerSelection == "rock"){
   return "AI won the game"
 } else if(playerSelection == "scissor" && computerSelection == "paper"){
   return "Player won the game"
 }
}
console.log(playRound(playerSelection, computerSelection));
const arr = ["rock", "paper", "scissor"];
const result = document.querySelector(".result");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const rockChoice = rock.textContent.toLowerCase();
const paperChoice = paper.textContent.toLowerCase();
const scissorChoice = scissor.textContent.toLowerCase();

const score = document.createElement("p");
const scoreAi = document.createElement("p");



function getComputerSelection(){
  return arr[Math.floor(Math.random()*3)];}
let point = 0;
let points = 0;

function playRound(playerSelection, computerSelection){ 

  score.textContent = "Player score: " + point;
  scoreAi.textContent = "AI score: " + points;
  result.appendChild(score);
  result.appendChild(scoreAi);
if(point==5){
  alert("Player defeated the AI");
  score.textContent +="<br>" + "Player defeated the AI";
  point = 0;
  points = 0;
}

if(points==5){
  alert("AI defeated the Human Player");
  scoreAi.innerHTML += "<br>" + "AI defeated the Human Player";
  points = 0;
  point = 0;
}


  if( computerSelection === playerSelection){
    return "It's a draw"
  } else if(playerSelection == "rock" && computerSelection == "paper"){
    points +=1;
    return "AI won the game"
  } else if(playerSelection == "rock" && computerSelection == "scissor"){
    point +=1;
    return "Player won the game"
  } else if(playerSelection == "paper" && computerSelection == "scissor"){
    points +=1;
    return "AI won the game"
  } else if(playerSelection == "paper" && computerSelection == "rock"){
    point +=1;
    return "Player won the game"
  } else if(playerSelection == "scissor" && computerSelection == "rock"){
    points +=1;
    return "AI won the game"
  } else if(playerSelection == "scissor" && computerSelection == "paper"){
    point +=1;
    return "Player won the game"
  }
}

rock.addEventListener("click", function(){ playRound(rockChoice,getComputerSelection());
});
paper.addEventListener("click", function(){ playRound(paperChoice,getComputerSelection());
});
scissor.addEventListener("click", function(){ playRound(scissorChoice,getComputerSelection());
});

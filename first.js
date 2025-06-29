let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () =>{
  msg.innerText = "Game was draw. Play Again!";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin , userChoice , compChoice) => {
  if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost ! Computer ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) =>{
  //generate comp choice 
  let compChoice = genCompChoice();

if (userChoice === compChoice) { 
      drawGame();
  }else {
    let userWin = true;
    if(userChoice === "stone"){
      //scissor,paper
      userWin = compChoice ==="paper" ? false : true;
    }else if(userChoice === "paper"){
      //stone, scissor
      userWin = compChoice === "scissor" ? false: true;
    }else {
      //stone, paper 
      userWin = compChoice === "stone" ? false: true;
    }
    showWinner(userWin , userChoice , compChoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    })
})
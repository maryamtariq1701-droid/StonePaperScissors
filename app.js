let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user = document.querySelector("#user");
const computer = document.querySelector("#Computer");


const gencompchoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random()*3);
    return option[randomidx];
}
const Gamedraw = () =>{
    msg.innerText = ("Draw Game");
    msg.style.backgroundColor= "#081b31";
}
const showWinner = (userwon ,userchoice ,compchoice) => {
    if(userwon){
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor= "Green";
    }
    else{
        compScore++
        computer.innerText = compScore;
        msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor= "red";
    }
}


const playgame = (userchoice) =>{
    console.log("UserChoice = ", userchoice);
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
     Gamedraw();
    }else{

        let userwon = true;
        if(userchoice === "rock"){
            userwon = compchoice === "paper"? false : true;
        }else if(userchoice === "paper"){
            userwon = compchoice === "scissors" ? false : true;
        }else{
             userwon = compchoice === "rock" ? false : true ;
        }
    
        showWinner(userwon , userchoice ,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
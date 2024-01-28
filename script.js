let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
//draw
const draw=()=>{
    msg.innerText="Draw!!!";
    msg.style.backgroundColor="#fcbf49";
    msg.style.color="black";
}
const getCompChoice=()=>{
    const options=["rock","scissors","paper"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const showWinner=(userWin,computerChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win!!!Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="#52b69a";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Loose!!!${computerChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="#ef233c";
    }
    
}
const playGame=(userChoice)=>{
    console.log(`User choice is ${userChoice}`);
    const computerChoice=getCompChoice();
    console.log(`Computer choice is ${computerChoice}`);
    if(userChoice===computerChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //paper scissors
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock scissors
            userWin=computerChoice==="scissors"?false:true;
        }
        else{
            //rock paper
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,computerChoice,userChoice);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});
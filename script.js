let player=0
let computer=0
let winningtext=document.getElementById("winner")

const newGame = ()=>{
    player=0
    computer=0
    document.getElementById("compscore").innerText="0"
    document.getElementById("userscore").innerText="0"
    winningtext.innerText=''
}

const reset=document.querySelector(".new")

reset.addEventListener("click",newGame)

const score =(score,temp,userchoiceid,computerchoice) =>{
    if (temp==='computer'){
        document.getElementById("compscore").innerText=score
        winningtext.innerText=`You lose! ${computerchoice} beats ${userchoiceid}`
    }
    else{
        document.getElementById("userscore").innerText=score 
        winningtext.innerText = `You won! ${userchoiceid} beats ${computerchoice}` 
    }
}

const draw =()=>{
    winningtext.innerHTML= "It's a draw"
}

const computerchoice=()=>{
    const choices={
        1: 'rock',
        2: 'paper',
        3: 'scissors'
    };

    value = Math.floor(Math.random() * 3) + 1;

    return choices[value]
}

const decision = (userchoiceid)=>{
    if(userchoiceid == computerchoice()){
        draw()
    }

    else if (userchoiceid === 'rock' && computerchoice() ==='paper'){
        let temp='computer'
        score(++computer,temp,"rock","paper")
    }

    else if (userchoiceid === 'rock' && computerchoice() ==='scissors'){
        let temp='user'      
        score(++player,temp,"rock","scissors")
    }

    else if (userchoiceid === 'paper' && computerchoice() ==='rock'){    
        let temp='user'      
        score(++player,temp,"paper","rock")
    }

    else if (userchoiceid === 'paper' && computerchoice() ==='scissors'){
        let temp='computer'
        score(++computer,temp,"paper","scissors")
    }

    else if (userchoiceid === 'scissors' && computerchoice() ==='rock'){
        let temp='computer'
        score(++computer,temp,"scissors","rock")
    }

    else if (userchoiceid === 'scissors' && computerchoice() ==='paper'){
        let temp='computer'
        score(++computer,temp,"scissors","paper")
    }
}

const rps=document.querySelectorAll(".rps")
rps.forEach((rps)=>{
    rps.addEventListener("click",()=>{
        let userchoice = rps
        decision(userchoice.id)
    })
})
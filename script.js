//defining the functions
function getComputerChoice()
{
    let choice = Math.floor((Math.random() * 100) % 3 + 1);

    if(choice == 1)
    {
        document.getElementById("computerPick").innerText = "rock";
        return "rock";
    }
    else if(choice == 2)
    {
        document.getElementById("computerPick").innerText = "paper";
        return "paper";
    }
    else if(choice == 3)
    {
        document.getElementById("computerPick").innerText = "scissors";
        return "scissors";
    }
}

function getHumanChoice(choice)
{
    choice = choice.toLowerCase();
    document.getElementById("humanPick").innerText = choice;
    
    if(choice == "rock")
    {
        return "rock";
    }
    else if(choice == "paper")
    {
        return "paper";
    }
    else if(choice == "scissors")
    {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice === computerChoice)
    {
        document.getElementById("result").innerText = "This round is a draw!";
    }

    if(humanChoice == "rock" && computerChoice == "scissors")
    {
        document.getElementById("result").innerText = "You won this round!";
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper")
    {
        document.getElementById("result").innerText = "You lost this round!";
        computerScore++;
    }

    if(humanChoice == "paper" && computerChoice == "rock")
    {
        document.getElementById("result").innerText = "You won this round!";
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors")
    {
        document.getElementById("result").innerText = "You lost this round!";
        computerScore++;
    }

    if(humanChoice == "scissors" && computerChoice == "paper")
    {
        document.getElementById("result").innerText = "You won this round!";
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        document.getElementById("result").innerText = "You lost this round!";
        computerScore++;
    }

    document.getElementById("humanScore").innerText = String(humanScore);
    document.getElementById("computerScore").innerText = String(computerScore);
}


//main program (implementing the declared functions into the buttons)
let humanScore = 0, computerScore = 0;

const choices = document.querySelectorAll("button");
choices.forEach(element => {
    element.addEventListener("click", e =>
    {
        let choiceString = element.innerText;

        let decisionHuman = getHumanChoice(choiceString);
        let decisionComputer = getComputerChoice();

        playRound(decisionHuman, decisionComputer);
    });
});
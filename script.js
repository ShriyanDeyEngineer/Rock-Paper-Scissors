//console.log("Hello World")


/*--------------------pseudocode--------------------

1. Get computer choice
2. Get human choice
3. Compare choices and determine winner
4. Increment score accordingly
5. Compare overall scores, determine winner, and end the game


----------functions----------

getComputerChoice
{
    assign "rock", "paper", and "scissors" to numbers 1, 2, and 3
    randomly pick 1, 2, or 3 each turn (each time this function is called)

    if 1, computer choose rock

    else if 2, computer choose paper

    else if 3, computer choose scissors


    output the computer's choice to the program
}

getHumanChoice
{
    prompt the user to enter their choice from "rock", "paper", or "scissors"

    either ask them to input a number between 1 and 3 inclusive or ask them to enter the word "rock", "paper", or "scissors"


    output the user's choice to the program
}

playRound(humanChoice, computerChoice)
{
    if user wins, increment humanScore

    else increment computerScore


    Determining winner of a round (each player has 3 choices, and each choice either results in a win, loss, or draw, so there are 9 possible outcomes):
    
    if user picks rock and computer picks rock
    {
        print message: "This round is a draw!"
    }
    else if computer picks scissors
    {
        print message: "You won this round!"
        increment humanScore
    }
    else if computer picks paper
    {
        print message: "You lost this round!"
        increment computerScore
    }

    if user picks paper and computer picks paper
    {
        print message: "This round is a draw!"
    }
    else if computer picks rock
    {
        print message: "You won this round!"
        increment humanScore
    }
    else if computer picks scissors
    {
        print message: "You lost this round!"
        increment computerScore
    }

    if user picks scissors and computer picks scissors
    {
        print message: "This round is a draw!"
    }
    else if computer picks paper
    {
        print message: "You won this round!"
        increment humanScore
    }
    else if computer picks rock
    {
        print message: "You lost this round!"
        increment computerScore
    }
}
-----------------------------


-----main algorithm-----

declare variables "humanScore" and "computerScore" to hold/keep track of the score, initialize them to 0

for 5 times
{
    call getComputerChoice

    call getHumanChoice

    call playRound
}

if(humanScore equals computerScore)
{
    print message: "This game is a draw!"
    print message: "Human: " humanScore "|| Computer: " computerScore
}
else if(humanScore is greater than computerScore)
{
    print message: "You won this game!"
    print message: "Human: " humanScore "|| Computer: " computerScore
}
else if(humanScore is less than computerScore)
{
    print message: "You lost this game!"
    print message: "Human: " humanScore "|| Computer: " computerScore
}
----------------------------------------------------*/



//defining the functions
function getComputerChoice()
{
    let choice = Math.floor((Math.random() * 100) % 3 + 1);
    //console.log("THIS IS THE COMPUTER'S CHOICE NUMBER: " + choice);

    if(choice == 1)
    {
        console.log("The computer picked rock");
        return "rock";
    }
    else if(choice == 2)
    {
        console.log("The computer picked paper");
        return "paper";
    }
    else if(choice == 3)
    {
        console.log("The computer picked scissors");
        return "scissors";
    }
}

function getHumanChoice()
{
    let choice = prompt("'rock', 'paper', or 'scissors'? Enter 5 choices");
    console.log("You picked " + choice);
    //console.log("THIS IS THE USER'S CHOICE: " + choice);

    choice = choice.toLowerCase();
    //console.log("THIS IS THE USER'S CHOICE: " + choice);
    console.log(choice);

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
    if(humanChoice == "rock") //one way to write this is a nested conditional
    {
        if(computerChoice == "rock")
        {
            console.log("This round is a draw!");
        }
        if(computerChoice == "scissors")
        {
            console.log("You won this round!");
            humanScore++;
        }
        if(computerChoice == "paper")
        {
            console.log("You lost this round!");
            computerScore++;
        }
    }

    if(humanChoice == "paper" && computerChoice == "paper") //another way to write this is conditional with if else statements and boolean operators
    {
        console.log("This round is a draw!")
    }
    else if(humanChoice == "paper" && computerChoice == "rock")
    {
        console.log("You won this round!");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "Scissors")
    {
        console.log("You lost this round!");
        computerScore++;
    }

    if(humanChoice == "scissors" && computerChoice == "scissors")
    {
        console.log("This round is a draw!");
    }
    else if(humanChoice == "scissors" && computerChoice == "paper")
    {
        console.log("You won this round!")
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("You lost this round!")
        computerScore++;
    }
}


//main program
let humanScore = 0, computerScore = 0;

for(let i = 1; i <= 5; i++)
{
    console.log("ROUND " + i + ":");

    let cc = getComputerChoice();
    //console.log(cc);

    let hc = getHumanChoice();
    //console.log(hc);

    playRound(hc, cc);
    console.log("");
}

if(humanScore == computerScore)
{
    console.log("This game is a draw!");
    console.log("Human: " + humanScore + " || Computer: " + computerScore);
}
else if(humanScore > computerScore)
{
    console.log("You won this game!");
    console.log("Human: " + humanScore + " || Computer: " + computerScore);
}
else if(humanScore < computerScore)
{
    console.log("You lost this game!");
    console.log("Human: " + humanScore + " || Computer: " + computerScore);
}
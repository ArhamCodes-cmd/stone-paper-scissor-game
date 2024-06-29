let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const messageDiv = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        const compChoice = getCompChoice();
        const result = determineWinner(userChoice, compChoice);
        updateScore(result);
        displayResult(result, userChoice, compChoice);
    });
});

function getCompChoice() {
    const choices = ["hand", "scissors", "stone"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, comp) {
    if (user === comp) {
        return "draw";
    } else if (
        (user === "hand" && comp === "stone") ||
        (user === "scissors" && comp === "hand") ||
        (user === "stone" && comp === "scissors")
    ) {
        return "user";
    } else {
        return "comp";
    }
}

function updateScore(result) {
    if (result === "user") {
        userScore++;
    } else if (result === "comp") {
        compScore++;
    }
    userScoreSpan.textContent = userScore;
    compScoreSpan.textContent = compScore;
}

function displayResult(result, userChoice, compChoice) {
    if (result === "draw") {
        messageDiv.textContent = `It's a draw! Both chose ${userChoice}.`;
    } else if (result === "user") {
        messageDiv.textContent = `You win! ${userChoice} beats ${compChoice}.`;
    } else {
        messageDiv.textContent = `You lose! ${compChoice} beats ${userChoice}.`;
    }
}

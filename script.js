let wins = 0;
let losses = 0;
let darkMode = true;

function playGame(playerChoice) {
    document.getElementById("clickSound").play();
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = '';
    if (playerChoice === computerChoice) {
        result = "It's a tie! 🤝";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = "You win! 🎉";
        wins++;
        document.getElementById("winSound").play();
        document.getElementById("result").classList.add("win-animation");
    } else {
        result = "You lose! 😢";
        losses++;
        document.getElementById("loseSound").play();
        document.getElementById("result").classList.add("lose-animation");
    }
    
    setTimeout(() => {
        document.getElementById("result").classList.remove("win-animation", "lose-animation");
    }, 1000);
    
    document.getElementById('result').innerHTML = `You chose <b>${playerChoice}</b>. Computer chose <b>${computerChoice}</b>. <br> <strong>${result}</strong>`;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}

function resetGame() {
    wins = 0;
    losses = 0;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('result').innerHTML = "";
}

function generateStars() {
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDelay = Math.random() * 3 + "s";
        starsContainer.appendChild(star);
    }
}
generateStars();

function toggleTheme() {
    darkMode = !darkMode;
    document.body.classList.toggle("light-mode", !darkMode);
    document.getElementById("themeToggle").textContent = darkMode ? "🌞 Toggle Theme" : "🌙 Toggle Theme";
}

document.getElementById("themeToggle").addEventListener("click", toggleTheme);

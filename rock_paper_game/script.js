const arr = [
    { name: "Paper", icon: '<i class="fa-regular fa-hand"></i>' },
    { name: "Scissors", icon: `<i class="fa-regular fa-hand-scissors"></i>` },
    { name: "Rock", icon: '<i class="fa-solid fa-hand-back-fist"></i>' }
];

let s1 = 0;
let s2 = 0;
let round = 0;
let move1; // This will hold the user's move

function play() {
    let y = Math.floor(Math.random() * 3); // Random computer move
    let move2 = arr[y]; // Computer move

    // Update the UI with the user's move
    document.getElementById("1").innerHTML = move1.icon; 
    document.getElementById("2").innerHTML = move2.icon;
    round++;

    document.getElementById("round").innerHTML = `${round}th round`;

    // Determine the winner
    if (move1.name === "Rock" && move2.name === "Scissors") {
        document.getElementById("r").innerHTML = "Rock wins";
        s1++;
    } else if (move1.name === "Rock" && move2.name === "Paper") {
        document.getElementById("r").innerHTML = "Paper wins";
        s2++;
    } else if (move1.name === "Paper" && move2.name === "Scissors") {
        document.getElementById("r").innerHTML = "Scissors wins";
        s2++;
    } else if (move1.name === "Paper" && move2.name === "Rock") {
        document.getElementById("r").innerHTML = "Paper wins";
        s1++;
    } else if (move1.name === "Scissors" && move2.name === "Paper") {
        document.getElementById("r").innerHTML = "Scissors wins";
        s1++;
    } else if (move1.name === "Scissors" && move2.name === "Rock") {
        document.getElementById("r").innerHTML = "Rock wins";
        s2++;
    } else {
        document.getElementById("r").innerHTML = "Draw";
    }

    // Update the score display
    document.getElementById("first").value = s1;
    document.getElementById("second").value = s2;
}

function s(event) {
    // Determine the user's move based on the button clicked
    if (event.target.id === "rr") {
        move1 = arr[2]; // Rock
    } else if (event.target.id === "p") {
        move1 = arr[0]; // Paper
    } else if (event.target.id === "s") {
        move1 = arr[1]; // Scissors
    }

    play(); // Call the play function after setting the move
}

// Event listeners for user move buttons
document.getElementById("start").addEventListener("click", () => {
    s1=0;
    s2=0;
    round = 0;
    document.getElementById("first").value = s1;
    document.getElementById("second").value = s2;
    document.getElementById("round").innerHTML = `${round}th round`;

});
document.getElementById("rr").addEventListener("click", s);
document.getElementById("p").addEventListener("click", s);
document.getElementById("s").addEventListener("click", s);

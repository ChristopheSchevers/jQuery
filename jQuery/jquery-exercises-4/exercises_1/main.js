let player = null;
let computer = null;

let totalGames = 0;
let wins = 0;
let ties = 0;
let losses = 0;
let winPercent = 0;

$("#play").click(function() {
    // Add to total games variable
    totalGames++;
    // Get player choice
    player = $("select#player").children("option:selected").val();
    console.log(player);

    computerChoice();
    
    // Generates random number from 0 to 3
    function computerChoice() {
        computer = Math.floor(Math.random() * 3) + 1;
        
        if (computer == 1) {
            computer = "rock";
        } else if (computer == 2) {
            computer = "paper";
        } else {
            computer = "scissors";
        }
    };
    console.log(computer);
    
    // Compare both choices and generate result
    if (player == computer) {
        ties++;
        $("#output").html("It's a tie!");
    } else if (player == "rock" && computer == "paper") {
        losses++;
        $("#output").html("Computer chose Paper. You lose!");
    } else if (player == "paper" && computer == "scissors") {
        losses++;
        $("#output").html("Computer chose Scissors. You lose!");
    } else if (player == "scissors" && computer == "rock") {
        losses++;
        $("#output").html("Computer chose Rock. You lose!");
    } else if (player == "rock" && computer == "scissors") {
        wins++;
        $("#output").html("Computer chose Scissors. You win!");
    } else if (player == "paper" && computer == "rock") {
        wins++;
        $("#output").html("Computer chose Rock. You win!");
    } else if (player == "scissors" && computer == "paper") {
        wins++;
        $("#output").html("Computer chose Paper. You win!");
    } else {
        $("#output").html("Error");
    }
    
    // Calculate win percentage and print to browser
    winPercent = ((0.5 * ties + wins) / totalGames) * 100;
    $("#winPercent").html(`${winPercent.toFixed(2)}% wins.`)
});
// Variable to store button click counter
let counter = 0;

$(window).load(function() {
    // Generates random number from 0 to 100
    const random = Math.floor(Math.random() * 100);
    // console.log(random);
        
    // Compare random number and input
    $("button").click(function() {
        counter++;
        // console.log(counter);
        
        // Variable to store input data
        let input = $("input").val();
        // console.log(input);
        
        // Print message to screen
        if (input < random) {
            $("p").html("more");
        } else if (input > random) {
            $("p").html("less")
        } else if (input == random) {
            $("p").html("right");

            // Alert shows how many turns user needed to find correct number
            alert(`You needed ${counter} turn(s) to find the correct number.`);
        }
        
        // Clear input textbox    
        $("input").val("");
    });
});
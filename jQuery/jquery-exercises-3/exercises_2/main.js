let counter = 0;

$("#add").click(function() {
    counter++;
    $("p").html(counter);
});

$("#subtr").click(function() {
    counter--;
    $("p").html(counter);
});
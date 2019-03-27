let counter = 0;

$("button").click(function() {
    counter++;

    $("p").html(counter);
});
$("#one").click(function() {
    $("#rect").css("min-height", $(this).height()+10);
    
});

$("#two").click(function() {
    $("#rect").css("background-color", "green");
    $("#rect").removeClass("default");
});
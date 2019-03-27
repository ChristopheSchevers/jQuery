$("#rect").css({
    "height": 10,
    "width": 200,
    "margin": 20
});

$("#one").click(function() {
    let height = $("#rect").height();
    
    if (height < 100) {
        $("#rect").height(function(n,c) {
            return c + 10;
        })
    } else {
        $("#rect").height(function(n,c) {
            return c = 10;
        });
    }    
});

$("#two").click(function() {
    $("#rect").css("background-color", "green");
});

$("#three").click(function() {
    $("#rect").css("background-color", "");
});

$("#four").click(function() {
    $("#rect").hide();
});

$("#five").click(function() {
    $("#rect").show();    
});
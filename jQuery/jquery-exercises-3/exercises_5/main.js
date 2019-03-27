let pos = $("#square").position();
let posX = pos.left;
let posY = pos.top;

$(document).keydown(function(e){
    switch (e.which) {
        // Left
        case 37:
        $("#square").finish().animate({
            left: "-= 10"
        });
        break;

        // Up
        case 38:
        $("#square").finish().animate({
            top: "-= 10"
        });
        break;

        // Right
        case 39:
        $("#square").finish().animate({
            left: "+= 10"
        });
        break;

        // Down
        case 40:
        $("#square").finish().animate({
            top: "+= 10"
        });
        break;

        default: return;
    }
    e.preventDefault();
});
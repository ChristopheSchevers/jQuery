/* const vwHeight = $(window).height();
const vwWidth = $(window).width();
console.log(vwHeight);
console.log(vwWidth);

let pos = $("#square").position();
let posX = pos.left;
let posY = pos.top;

if (posX < 0) {
    posX = vwWidth;
} else if (posX > vwWidth) {
    posX = 0;
} else if (posY < 0) {
    posY = vwHeight;
} else if (posY > vwHeight) {
    posY = 0;
} */

$(document).keydown(function(e){
    switch (e.which) {
        // Left
        case 37:
        $("#square").css({
            left: "-=10"
        });
        break;

        // Up
        case 38:
        $("#square").css({
            top: "-=10"
        });
        break;

        // Right
        case 39:
        $("#square").css({
            left: "+=10"
        });
        break;

        // Down
        case 40:
        $("#square").css({
            top: "+=10"
        });
        break;

        default: return;
    }
    e.preventDefault();
});
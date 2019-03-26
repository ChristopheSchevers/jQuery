// Write your solution here
$("#name").focus(function() {
    $(this).css("outline", "1px solid green");
}).focusout(function() {
    $(this).css("outline", "1px solid red");
});

$("#first_name").focus(function() {
    $(this).css("outline", "1px solid green");
}).focusout(function() {
    $(this).css("outline", "1px solid red");
});
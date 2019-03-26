$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("#instructions li:eq(0)").click(function() {
        $("#content*").css("font-size", "120%");
    });
    
    /* On click: Decrease the font size (80%) */
    $("#instructions li:eq(1)").click(function() {
        $("#content").css("font-size", "80%");
    });
    
    /* On click: Bold or normalize the green words */
    $("#instructions li:eq(2)").click(function() {
        $(".green").toggleClass("bold");
    });
    
    /* On click: Underline or normalize the red words */
    $("#instructions li:eq(3)").click(function() {
        $(".red").toggleClass("underline");
    });
    
    /* On hover: Replace the logo with another image */
    $("#instructions li:eq(4)").hover(function() {
        $("img").attr("src","images/koala.jpg");
    }, function() {
        $("img").attr("src","images/jquery-logo.png");
    });
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").attr("data-toggle", "tooltip");      
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("#instructions li:last-child").click(function() {
        $("h2").first().prepend("Chapter 1: ");
        $("h2:eq(1)").prepend("Chapter 2: ");
    });    

});
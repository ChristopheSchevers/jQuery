$("#lName").keydown(function() {
    if ($("#lName")[0].checkValidity()) {
        $("#lName").css("border", "3px solid green");
    } else {
        $("#lName").css("border", "3px solid red");
    }
});

$("#fName").keydown(function() {
    if ($("#fName")[0].checkValidity()) {
        $("#fName").css("border", "3px solid green");
    } else {
        $("#fName").css("border", "3px solid red");
    }
});

$("#eMail").keydown(function() {
    if ($("#eMail")[0].checkValidity()) {
        $("#eMail").css("border", "3px solid green");
    } else {
        $("#eMail").css("border", "3px solid red");
    }
});

$("#pNum").keydown(function() {
    if ($("#pNum")[0].checkValidity()) {
        $("#pNum").css("border", "3px solid green");
    } else {
        $("#pNum").css("border", "3px solid red");
    }
});
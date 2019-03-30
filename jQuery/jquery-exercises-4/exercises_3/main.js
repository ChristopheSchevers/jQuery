// Check name
$("#lName").keydown(function() {
    if ($("#lName")[0].checkValidity()) {
        $("#lName").css("border", "3px solid green");
    } else {
        $("#lName").css("border", "3px solid red");
    }
});

// Check first name
$("#fName").keydown(function() {
    if ($("#fName")[0].checkValidity()) {
        $("#fName").css("border", "3px solid green");
    } else {
        $("#fName").css("border", "3px solid red");
    }
});

// Check email
$("#eMail").keydown(function() {
    if ($("#eMail")[0].checkValidity()) {
        $("#eMail").css("border", "3px solid green");
    } else {
        $("#eMail").css("border", "3px solid red");
    }
});

// Check phone number
$("#pNum").keyup(function() {
    let val = this.value;
    let phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    if (phone.test(val)) {
        $("#pNum").css("border", "3px solid green");
    } else {
        $("#pNum").css("border", "3px solid red");
    }
});
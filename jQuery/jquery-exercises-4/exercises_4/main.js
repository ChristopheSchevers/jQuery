$("button").click(function() {
    // Get form information
    let lName = $("#lName").val();
    let fName = $("#fName").val();
    let dOb = $("#dOb").val();
    let pOb = $("#pOb").val();
    let work = $("#work").val();
    let company = $("#company").val();

    $("#result").html(`${fName} ${lName}, born ${dOb} in ${pOb}, currently a ${work} in ${company}.`);
});
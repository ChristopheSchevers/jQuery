$("button").click(function() {
    // Get form information
    let lName = $("#lName").val();
    let fName = $("#fName").val();
    let dOb = $("#dOb").val();
    let pOb = $("#pOb").val();
    let work = $("#work").val();
    let company = $("#company").val();

    // Date format conversion
    let d = new Date(dOb);
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();

    let newDob = `${day}/${month}/${year}`;

    // Print result to browser
    $("#result").html(`${fName} ${lName}, born ${newDob} in ${pOb}, currently a ${work} in ${company}.`);
});
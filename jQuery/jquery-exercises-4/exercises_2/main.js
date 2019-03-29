// Variables to store input
let salary = 0;
let gender = null;
let kids = 0;

// Variables to store expenses
let expenses = 0.18;
let insurance = 0.07;
let contributions = 0.05;

// Variables to store discount results
let discountFemale = 0;
let discountKids = 0;

$("button").click(function() {
    // Get and store form data
    salary = $("#salary").val();
    gender = $("input[name=gender]:checked").val();
    kids = $("#kids").val();

    // Calculate expenses, insurance and contributions on salary
    let salExp = salary * expenses;
    let salIns = salary * insurance;
    let salContr = salary * contributions;

    // Sum of salary reductions
    let salReduc = salExp + salIns + salContr;

    // Subtotal without discounts
    let subTotal = salary - salReduc;

    // If statements to check if discounts are in effect and if so, calculate them
    if (gender == "male") {
        discountFemale = 0;
    } else if (gender == "female") {discountFemale = salReduc * 0.02}

    if (kids < 3) {
        discountKids = 0;
    } else if (kids == 3) {
        discountKids = salReduc * 0.01;
    } else if (kids >= 4) {
        discountKids = salReduc * 0.02;
    } 

    // Total with discounts
    let total = subTotal + discountFemale + discountKids;

    $("#result").html(`You will have a netto wage of ${total.toFixed(2)}.`)

    // Console logs to test program
    /* console.log(salExp);
    console.log(salIns);
    console.log(salContr);
    console.log(subTotal);
    console.log(discountFemale);
    console.log(discountKids); */
});
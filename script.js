function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Create the Interest text
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";
}


function updateRate() {
    var x = document.getElementById("rate").value;
    document.getElementById("rateSpan").innerHTML = x;
}

function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero || principal == null) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
$(document).ready(function (){
    $("#submitButton").click (calculate);
});


function calculate(event) {
    event.preventDefault()
    //input how many drinks (beer, wine, shots)
    var total= $("input[name=number]");
    var beerDrink = parseFloat($("#numBeers").val());
    var wineDrink = parseFloat($("#numWine").val());
    var shotDrink = parseFloat($("#numShots").val());

    //input weight in lbs
    var weightLbs = parseFloat($("#weight").val());

    //hours before first drink
    var hourDrinkOne = parseFloat($("#hours").val());

    //Calculation!!!
    //multiply number of drinks by alcohol level on drink
    var absorRate = beerDrink * 0.54 + wineDrink * 0.6 + shotDrink * 0.6 * 7.5;
    var bac = absorRate / weightLbs - hourDrinkOne * 0.015;

    //render result
    $("#result").text(bac.toFixed(3));
    $("p.output").show();
};
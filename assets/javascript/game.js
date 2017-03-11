

$(document).ready(function(){

var randomComputer; // random # displayed between 19 and 120
var randomRed;// random # displayed between 1 and 12 
var randomBlue; // random # displayed between 1 and 12 
var randomYellow; // random # displayed between 1 and 12 
var randomGreen; // random # displayed between 1 and 12  
var totalScore = 0;
var wins = 0;
var losses = 0;
resetValues();

function resetValues(){
    randomComputer = Math.floor(Math.random() * 101) + 19;
    randomRed = Math.floor(Math.random() * 11) + 1; // random # displayed between 1 and 12 
    randomBlue = Math.floor(Math.random() * 11) + 1; // random # displayed between 1 and 12 
    randomYellow = Math.floor(Math.random() * 11) + 1; // random # displayed between 1 and 12 
    randomGreen = Math.floor(Math.random() * 11) + 1; // random # displayed between 1 and 12  
    totalScore = 0;
    $("#randomNumber").html(randomComputer);
    $("#yourScore").html("");
}

function results(){
    if(totalScore > randomComputer) {
            $("#statusMessage").html("You lose!");
            losses++;
            resetValues();

    }
    else if(totalScore == randomComputer) {
            $("#statusMessage").html("You win!");
            wins++;
            resetValues();
    }
    var winLoss = "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>";
    $("#winLost").html(winLoss);
}

 $("#red-crystal").click(function(){
    totalScore = totalScore + randomRed;
    $("#yourScore").html(totalScore);
    results();
    });

 $("#blue-crystal").click(function(){
 	totalScore = totalScore + randomBlue;
    $("#yourScore").html(totalScore);
    results();
    });

 $("#yellow-crystal").click(function(){
    totalScore = totalScore + randomYellow;
    $("#yourScore").html(totalScore);
    results();
    });

 $("#green-crystal").click(function(){
    totalScore = totalScore + randomGreen;
    $("#yourScore").html(totalScore);
    results();
    });
 });






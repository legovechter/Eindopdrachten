document.getElementById("onesPlayer").innerHTML = "";
document.getElementById("twosPlayer").innerHTML = "";
document.getElementById("threesPlayer").innerHTML = "";
document.getElementById("foursPlayer").innerHTML = "";
document.getElementById("fivesPlayer").innerHTML = "";
document.getElementById("sixesPlayer").innerHTML = "";
document.getElementById("threeofkindPlayer").innerHTML = "";
document.getElementById("fourofkindPlayer").innerHTML = "";
document.getElementById("fullhousePlayer").innerHTML = "";
document.getElementById("smallPlayer").innerHTML = "";
document.getElementById("bigPlayer").innerHTML = "";
document.getElementById("chancePlayer").innerHTML = "";
document.getElementById("yahtzeePlayer").innerHTML = "";

document.getElementById("onesEnemy").innerHTML = "";
document.getElementById("twosEnemy").innerHTML = "";
document.getElementById("threesEnemy").innerHTML = "";
document.getElementById("foursEnemy").innerHTML = "";
document.getElementById("fivesEnemy").innerHTML = "";
document.getElementById("sixesEnemy").innerHTML = "";
document.getElementById("threeofkindEnemy").innerHTML = "";
document.getElementById("fourofkindEnemy").innerHTML = "";
document.getElementById("fullhouseEnemy").innerHTML = "";
document.getElementById("smallEnemy").innerHTML = "";
document.getElementById("bigEnemy").innerHTML = "";
document.getElementById("chanceEnemy").innerHTML = "";
document.getElementById("yahtzeeEnemy").innerHTML = "";


const dice = [];
var numberHold = [];

var freeze = false;
var freeze1 = false;
var freeze2 = false;
var freeze3 = false;
var freeze4 = false;



function rollDice() {

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomNumber3 = Math.floor(Math.random() * 6) + 1;
    var randomNumber4 = Math.floor(Math.random() * 6) + 1;

    if (freeze == false) {
        numberHold[0] = randomNumber;
    }
    if (freeze1 == false) {
        numberHold[1] = randomNumber1;
    }
    if (freeze2 == false) {
        numberHold[2] = randomNumber2;
    }
    if (freeze3 == true) {
        numberHold[3] = randomNumber3;
    }
    if (freeze4 == true) {
        numberHold[4] = randomNumber4;
    }


    document.getElementById("value").innerHTML = randomNumber;
    document.getElementById("value1").innerHTML = randomNumber1;
    document.getElementById("value2").innerHTML = randomNumber2;
    document.getElementById("value3").innerHTML = randomNumber3;
    document.getElementById("value4").innerHTML = randomNumber4;



    return numberHold[0 - 4];
}

function diceEvent(clicked_id) {
    document.getElementById(clicked_id).disabled = true;
    //document.getElementById(clicked_id).innerHTML = null;

    switch (clicked_id) {
        default: console.log("pressed nothing");
        case 1:
                freeze = true;
            console.log("pressed button 1");
            document.getElementById("numbHold").innerHTML = numberHold[0];
            break;
        case 2:
                freeze1 = true;
            console.log("pressed button 2");
            document.getElementById("numb2Hold").innerHTML = numberHold[1];
            break;
        case 3:
                freeze2 = true;
            console.log("pressed button 3");
            document.getElementById("numb3Hold").innerHTML = numberHold[2];
            break;
        case 4:
                freeze3 = true;
            console.log("pressed button 4");
            document.getElementById("numb4Hold").innerHTML = numberHold[3];
            break;
        case 5:
                freeze4 = true;
            console.log("pressed button 5");
            document.getElementById("numb5Hold").innerHTML = numberHold[4];
            break;

    }
    return freeze, freeze1, freeze2, freeze3, freeze4;
}

//function diceEvent2(clicked_id) {
//    switch (clicked_id) {
//        case "stored":
//            numberHold[0] = null;


//            break;
//        case "stored1":
//            numberHold[1] = null;

//           break;
//        case "stored2":
//            numberHold[2] = null

//            break;
//        case "stored3":
//            numberHold[3] = null

//            break;
//        case "stored4":
//            numberHold[4] = null

//            break;

//    }

//}

function resetTable() {
    var dices = document.getElementsByClassName('dices');
    for (var i = 0; i < dices.length; i++) {
        dices[i].disabled = false;
    }
    document.getElementById("value").innerHTML = null;
    document.getElementById("value1").innerHTML = null;
    document.getElementById("value2").innerHTML = null;
    document.getElementById("value3").innerHTML = null;
    document.getElementById("value4").innerHTML = null;

    freeze = false;
    freeze1 = false;
    freeze2 = false;
    freeze3 = false;
    freeze4 = false;
}
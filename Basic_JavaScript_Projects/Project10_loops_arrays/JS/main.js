function Call_Loop() {            //loop that adds one until condition it met
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

function Length_Check() {           //checks the length of the string
    let text = "Hello World!";
    let length = text.length;
    document.getElementById("length").innerHTML=length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Vilolin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {                             
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function() {       // a Array choice function to print
    var Array = [];
    Array[0] = "Bed";
    Array[1] = "Clock";
    Array[2] = "Chair";
    Array[3] = "Table";
    document.getElementById("Array").innerHTML= "The object you were thinking of is a  " + Array[2] + ".";
}

function constant_function () {      //Constant function checks that cant be changed
    const Magic_Card = {type:"Creature", set:"Futursite", color:"green"};
    Magic_Card.color = "Black";
    Magic_Card.price = "$40";
    document.getElementById("Constant").innerHTML= "The cost of the " + Magic_Card.type + " is " + Magic_Card.price;
}

function let_function () {     // let lets a variable be able to be changed
        let X = 33;
        document.getElementById("Let").innerHTML=("<br>"+X); 
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description() ;

let text = "";         // break function
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
};
document.getElementById("break").innerHTML = text;

let hit = "";       //continue function
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  hit += "The number is " + i + "<br>";
};
document.getElementById("continue").innerHTML = hit;
window.alert('This is a basic page');

var Pets= "House animals", Dog= "Bull Dog", Cat= "Short Hair", Snake= "python", Spider= "Black widow", Pig= "Tea pot";  //Variable set up

var Pets=Pets.fontcolor('Blue');  //Adding text color to Variables
var Dog=Dog.fontcolor('Red');
var Cat=Cat.fontcolor('Green');
var Snake=Snake.fontcolor('Black');
var Spider=Spider.fontcolor('Violet');
var Pig=Pig.fontcolor('Orange');

document.write(Dog);     //Printing Variables on screen

document.write(3+3);    //Making a function

document.write("This is a string value, \"It makes the script look like this!"")

function My_First_Function() {                         //Defining a function and naming it
    var str = "This text is green!";                    //Defining a variable and giving it a string value
    var result=str.fontcolor('green');                  //Using the fontcolor method on a str variable
    document.getElementById("Green_Text").innerHTML=result;    //Putting the value of resultinto HTML element 
}
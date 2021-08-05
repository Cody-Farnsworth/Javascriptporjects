function My_Second_Function() {                                   // This function makes the text "This is green", and changes the color to blue
    var str = "This text is green!";
    var result = str.fontcolor("Blue");
    document.getElementById("Green_Text").innerHTML=result;       //Putting the value of resultinto HTML element 
}

function myFunction() {                                          //This function concatenates the var sentence togeather
    var sentence = "Oh no that didnt come out right";
    sentence += " it should have been green!";
    document.getElementById("Concatenate").innerHTML=sentence      //Putting the value of resultinto HTML element 
}
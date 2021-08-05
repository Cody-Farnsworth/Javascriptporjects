function My_Second_Function() {
    var str = "This text is green!";

    var result = str.fontcolor("Blue");

    document.getElementById("Green_Text").innerHTML=result;
}

function myFunction() {
    var sentence = "Oh no that didnt come out right";
    sentence += "it should have been green!";
    document.getElementById("Concatenate").innerHTML=sentence;
}
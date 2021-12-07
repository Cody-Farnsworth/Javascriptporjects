function full_Sentence() {                   // Concatenate function to put parts into a string
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence. ";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_Method() {                              //Slice takes only a piece of the string out and displays it
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}

function UpperCase_Method() {      //This turns the string all upper case****put in th doc element section
    const Sentence = "This is all about making a sentence Upper Case.";
    console.log(Sentence.toUpperCase());
    document.getElementById("UpperCase").innerHTML=Sentence.toUpperCase();
}

function Search_Method() {       ///This tells you where the value of the word you want to search of the string is
    let text = "Mr. Blue has a blue house";
    let position = text.search(/blue/i);
    document.getElementById("Search").innerHTML= text.search(/blue/i);
}

function string_Method() {       //this turns numbers into string
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML= X.toString();
}

function precision_Method() {        //this only lets the string displayed to the number of your choice
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML= X.toPrecision(10);
}

function Fixed_Method() {        //this rounds and displays for a number to the positon you want
    let num = 5.56789;
    let n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML= num.toFixed(2);
}

function Value_of_Method() {    
    let text = "Hello World!";
    let result = text.valueOf();
    document.getElementById("Value").innerHTML= result;
}
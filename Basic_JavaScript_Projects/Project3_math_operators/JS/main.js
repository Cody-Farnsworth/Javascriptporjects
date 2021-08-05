function Basic_Math() {                                           // Function for addition
    var addition=6+7;
    document.getElementById('Math').innerHTML="6+7=" + addition
}

function Sub_Math() {                                                 // Function for subtraction
    var Subtraction=8-4;
    document.getElementById('Math2').innerHTML="8-4=" + Subtraction
}

function Multi_Math() {                                             // Function for *
    var simple_Math=8*7;
    document.getElementById('Math3').innerHTML='8*7='+simple_Math;
}

function Div_Math() {                                               // Function for /
    var simple_Math=9/3;
    document.getElementById('Math4').innerHTML='9/3='+simple_Math;
}

function more_Math() {                                              // Function for many operations
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("Math5").innerHTML="(1+2)*10/2-5="+simple_Math;
}

function modulus_Operator() {                                       // Function for %
    var simple_Math=25%6;
    document.getElementById('Math6').innerHTML="When you divide 25 by 6 you have a remainder of: "+simple_Math;
}

function negation_Operator() {                                      // Function for negative number
    var x=10;
    document.getElementById('Math7').innerHTML=-x;

}

function  increment_Math() {                                        // Function for ++
    var y=5;
    y++;
    document.getElementById('Math8').innerHTML=y;
}


function  decrement_Math() {                                    // Function for --
    var z=5.25;
    z--;
    document.getElementById('Math9').innerHTML=z;
}

function  random_Math() {                                       // Function for a random number
    var a=(Math.random())
    document.getElementById('Math10').innerHTML=a;
}

function  random1_Math() {                                      // Function for a random number up to 100
    var b=(Math.random()*100)
    document.getElementById('Math11').innerHTML=b;
}

function Pi_Math() {                                            // Function for Pi
    var c=Math.PI;
    document.getElementById('Math12').innerHTML=c;
}

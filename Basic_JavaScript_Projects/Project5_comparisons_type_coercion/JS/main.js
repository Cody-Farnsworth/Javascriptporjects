document.write("10"+3)      //Coercion

document.write(typeof"Word")        //Type of

function my_Function() {                //NaN function that is true
    document.getElementById("Test").innerHTML=isNaN("This is a string")
}

function my_Function1() {               //Nan function that is false
    document.getElementById("Test1").innerHTML=isNaN(007)
}

    document.write(2E310)           //Infi

    document.write(-3E310)          //neg Inf

    document.write(10<4)            //Boonlean False

    document.write(10>4)            //Boonlane True


    console.log(2+2)                // console log

    console.log(10<4)               // Boonlane console

    document.write(10==10)              //Double Equal true

    document.write(1==10)               //Double equal false

    X=10
    Y="10"
    document.write(X===Y)               //Tripple Equal Flase

    A=5
    B=5
    document.write(A===B)           //Tripple Equal True

    document.write(5>2 && 10>4);        //And True
    document.write(5>10 && 10>4);       //And False
    document.write(5>10 || 10>4);       //Or True
    document.write(5>10 || 10>20);      //Or False

    function my_Function2() {       //Not function false
        document.getElementById("Test2").innerHTML=!(20>10)
    }

    function my_Function3() {           //Not function True
        document.getElementById("Test3").innerHTML=!(5>10)
    }
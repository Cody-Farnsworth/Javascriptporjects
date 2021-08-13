var X=10;
function Add_numbers_1(){
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    var Y=11;
    document.write(X+Y)
}
function Add_number_3() {
    document.write(20+X+Y)
}
Add_numbers_1();
Add_numbers_2();
Add_numbers_3();

function get_Date(){
    if (new Date().getHours()<20){
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function my_If() {
    Number=document.getElementById("Number").value;
    if (Number>15){
        Submit="To large"
    }
    else if (Number==15) {
        Submit="Correct"
    }
    else {
        Submit="To Small"
    }
    document.getElementById("What_is_the_number").innerHTML=Submit;
}
function my_Dictionary() {        //Basic function with a defined object
    var Animal={
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;            //Deletes the the char. Sound
    document.getElementById("Dictionary").innerHTML=Animal.Sound;       //Displays the animal sound on HTTML
}
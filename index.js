//Start of Script.
// Detecting button press
var numberOfDrums = document.querySelectorAll(".drum").length;   //The number of button on page
for(var i=0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Detectng Keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Cases to make sound on the key pressed. 
function makeSound(key){
    switch (key) {
        case "w": 
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case "a": 
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case "s": 
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case "d": 
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        case "j": 
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case "k": 
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case "l": 
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        default:
    }
}
function buttonAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
} 
// end of Script.
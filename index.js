let audios = ["sounds/tom-1.mp3", 
"sounds/tom-2.mp3",
 "sounds/tom-3.mp3", 
 "sounds/tom-4.mp3", 
 "sounds/snare.mp3", 
 "sounds/crash.mp3", 
 "sounds/kick-bass.mp3"];

let drums = document.querySelectorAll(".drum");
let drum = [];

for (i = 0; i < drums.length; i++){
    drum.push(drums[i].innerHTML);
    drums[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        makeAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
    var audio = new Audio(audios[drum.indexOf(key)]);
    audio.play();
}

function makeAnimation(key){
    document.querySelector("."+ key ).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}
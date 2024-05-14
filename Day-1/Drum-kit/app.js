//adding functionality for the drum
window.addEventListener("keydown",function(e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${Number(e.keyCode)}"]`);
    if(!sound) return; //if no corresponding key is pressed return
    sound.currentTime = 0;  //set the audio to start from beginning
    sound.play();
    key.classList.add("playing");
} )

//function for removing the transition
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing"); //remove the playing class
}
const keys = document.querySelectorAll(".key");
keys.forEach((key)=>key.addEventListener("transitionend",removeTransition));

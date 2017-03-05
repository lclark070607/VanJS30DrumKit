function playSound(e) {
    //use an attribute selector w/es6 backticks
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //add the animation
    if (!audio) return;//stop the function from running all together.
    // console.log(audio);
    audio.currentTime = 0;  //rewind to start of element so you can hit it over and over in succession
    audio.play();
    key.classList.add('playing');
}
//use a transition end event that will fire when the thing has stopped
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    //console.log(e.propertyName);
    //console.log(this); easy way to find out what "this" is
    this.classList.remove('playing');
}

window.addEventListener('load', function () {
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);
});

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// window.addEventListener('keydown', playSound);

//Lessons:  key events, playing audio, listening for transition end event - could listen for animation end event
//which functions exactly the same way


var playSelected = function(e){
    const selectedAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    if(!selectedAudio) return // 없을경우에 함수 종료 
    selectedAudio.currentTime = 0; // AAA 소리씹힘 방지 
    selectedAudio.play();

    const selectedKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    selectedKey.classList.add('playing');


}


var removeTransition = function(e){
    if(e.propertyName !== 'transform') return 
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSelected);

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

 
 
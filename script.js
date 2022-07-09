let keyKeyboard = document.addEventListener('keydown', playNote);

let keys = document.querySelectorAll('.drum');
keys.forEach(key => {
    key.addEventListener('click', playNote);
});

function playNote(e) {
    let key, audio;
    
    if(e.keyCode) {
        key = document.querySelector(`[data-d="${e.keyCode}"]`);
        audio = document.querySelector(`[data-a="${e.keyCode}"]`);
    }
    else {
        key = e.target;
        audio = document.querySelector(`[data-a="${key.dataset.d}"]`);
    }

    key.classList.add('hit')
    setTimeout(()=>{
        key.classList.remove('hit')
    }, 100);

    audio.currentTime = 0;
    audio.play();
}
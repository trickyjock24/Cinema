let selectedCamera = '0 0 2'

function toggleSound() {
    var crowdSound = document.getElementById('crowd');
    if (crowdSound.paused) {
        crowdSound.play();
    } else {
        crowdSound.pause();
    }
}

function updateMovieChosen() {
    document.getElementById('toNextScene').setAttribute('color', '#00ff00');
}

function toNextScene(){
    color = document.getElementById('toNextScene').getAttribute('color');
    if(color == '#00ff00'){
        location.href="https://www.ing.nl/particulier/klantenservice/beschikbaarheid/index.html";}
}

const cameraClicked = (event) => {
    let cameraElement = event.target;
    let newPosition = cameraElement.getAttribute('position');
    
    document.getElementById('camera').setAttribute('animation', {
        property: 'position',
        dur: 1000, 
        to: newPosition,
        easing: 'easeInOutQuad'
    });
    
    selectedCamera = newPosition;
};
    
const main = () => {
    const cameraList = document.getElementsByClassName('js--camera')
    for(let i = 0; i < cameraList.length; i++){
        const camera = cameraList[i];
        camera.addEventListener('click', cameraClicked)
    }

    const movieButton = document.querySelector('.js--clickable');
    movieButton.addEventListener('click', updateMovieChosen);
}

window.addEventListener("load", main)
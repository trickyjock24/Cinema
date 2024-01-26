function setRandomOpacityForBoxes(boxes, customRandomValue) {
  boxes.forEach(function (box) {
      if (Math.random() < customRandomValue) {
          box.setAttribute('visible', false);
      }
  });
}

function resetOpacity(boxes) {
  boxes.forEach(function (box) {
      box.setAttribute('visible', true);
  });
}

function animateCameraPosition(newPosition) {
  camera.setAttribute('animation', {
      property: 'position',
      to: newPosition,
      dur: 1000,
  });
}

function playAssociatedVideo(plane) {
  let videoDisplay = document.getElementById('videoDisplay');
  let videoId = plane.getAttribute('data-video-id');

  if (videoId) {
      let video = document.getElementById(videoId);
      if (video) {
        videoDisplay.setAttribute('src', '#' + videoId);
      }
  }
}

function main() {
  let planes = document.querySelectorAll(".movie");
  let boxes = document.querySelectorAll(".person");
  let videoDisplay = document.getElementById('videoDisplay');

  planes.forEach(function (plane) {
      plane.addEventListener('click', function () {
          resetOpacity(boxes);
          let customRandomValue = parseFloat(plane.getAttribute('data-random'));
          setRandomOpacityForBoxes(boxes, customRandomValue);
          playAssociatedVideo(plane);
      });
  });

  const places = document.getElementsByClassName('js--place');

  for (let i = 0; i < places.length; i++) {
      places[i].addEventListener('click', function () {
          animateCameraPosition(this.getAttribute('position'));
      });
  }

  const sit = document.getElementsByClassName('js--sit');

  for (let i = 0; i < sit.length; i++) {
      sit[i].addEventListener('click', function () {
          animateCameraPosition(this.getAttribute('position'));
          videoDisplay.setAttribute('visible', 'true');
          videoDisplay.components.material.material.map.image.play();


          for (let j = 0; j < places.length; j++) {
            places[j].setAttribute('visible', 'false');
          }
          
      });
  }
}

window.onload = function () {
  main();
};

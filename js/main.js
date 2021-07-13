(() => {

  let littlefriend = document.querySelector('audio'),
      playbutton = document.querySelector('.playanimation');



  function playAudio() {
    document.querySelector("#tonyvector").classList.add('gotonygo');
    document.querySelectorAll('path').forEach(path => path.classList.add('textanimation'));
    document.querySelector("#typelayout").classList.add('containerturn');
    littlefriend.play();
  }

  playbutton.addEventListener("click", playAudio);
})();

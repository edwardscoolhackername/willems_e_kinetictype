(() => {

  let littlefriend = document.querySelector('audio'),
      playbutton = document.querySelector('.playanimation');



  function playAudio() {
    document.querySelector("#tonyvector").classList.add('gotonygo');
    littlefriend.play();
  }

  playbutton.addEventListener("click", playAudio);
})();

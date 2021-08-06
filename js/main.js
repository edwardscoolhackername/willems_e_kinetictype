(() => {

  let music = document.querySelector('audio'),
      playbutton = document.querySelector('.playanimation');



  function playaudiotony() {
    document.querySelector("#tonyvector").classList.add('gotonygo');
    document.querySelectorAll('path').forEach(path => path.classList.add('textanimation'));
    document.querySelector("#typelayout").classList.add('containerturn');
    littlefriend.play();
  }
  function playaudiowill() {
    document.querySelector("#blooddrop").classList.add('drip');
    document.querySelectorAll('g').forEach(group => group.classList.add('textanimation'));
    music.play();
  }

  playbutton.addEventListener("click", playaudiowill);
})();

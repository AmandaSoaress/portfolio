const projetos = document.querySelector('a[href="#projetos"')
if (projetos) {
  projetos.addEventListener('click', function() {
    document.querySelector('body > header > div.header > div > div > label').click()
  })
}
  
var podcastAudio = document.getElementById('podcast-audio');

var playBtn = document.getElementById('podcast-play');

var pauseBtn = document.getElementById('podcast-pause');

var playShow = function() {
  podcastAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};
var pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};
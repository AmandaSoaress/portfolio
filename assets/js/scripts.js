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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    console.log(coll[i])
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
const podcastAudio = document.getElementById('podcast-audio');

const btnPlayMusic = function () {
  podcastAudio.play();
  document.getElementById('podcast-play').style.display = "none";
  document.getElementById('podcast-pause').style.display = "inline-block";
};

const btnStopMusic = function () {
  podcastAudio.pause();
  document.getElementById('podcast-play').style.display = "inline-block";
  document.getElementById('podcast-pause').style.display = "none";
};
const projetos = document.querySelector('a[href="#projetos"')
if (projetos) {
  projetos.addEventListener('click', function () {
    document.querySelector('body > header > div.header > div > div > label').click()
  })
}

var podcastAudio = document.getElementById('podcast-audio');

var playBtn = document.getElementById('podcast-play');

var pauseBtn = document.getElementById('podcast-pause');

var playShow = function () {
  podcastAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};
var pauseShow = function () {
  podcastAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};

var cardsProjetos = document.getElementsByClassName("collapsible");

for (let i = 0; i < cardsProjetos.length; i++) {
  cardsProjetos[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const elementoDescricao = this.nextElementSibling;
    const tamanhoElementoDescricao = elementoDescricao.style.maxHeight
    const estaAberto = tamanhoElementoDescricao === '' || tamanhoElementoDescricao === '100%'

    if (estaAberto) {
      elementoDescricao.style.maxHeight = "0px";
    } else {
      elementoDescricao.style.maxHeight = "100%";
    }
  });
}
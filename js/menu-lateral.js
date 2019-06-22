document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    fecharMenuLateral()
  }
};

function abrirMenulateral() {
  document.querySelector('.menu-lateral').classList.add('menu-lateral_ativo');
  document.querySelector('.menu-lateral__sobreposicao').classList.add('menu-lateral__sobreposicao_ativo');
  document.querySelector('body').style.overflowY = "hidden";
  document.querySelectorAll('.menu-lateral__item a')[0].focus();
}

function fecharMenuLateral() {
  document.querySelector('.menu-lateral').classList.remove('menu-lateral_ativo');
  document.querySelector('.menu-lateral__sobreposicao').classList.remove('menu-lateral__sobreposicao_ativo');
  document.querySelector('body').style.overflowY = "auto";
}
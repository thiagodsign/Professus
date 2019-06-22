var lista = [
  'Rematricula',
  'Boletim mensal',
  'Boletim bimestral',
  'Conteúdos',
  'Tarefa',
  'Financeiro',
  'Ocorrências',
  'Upload',
  'Recados',
  'Biblioteca',
  'Parecer (Aluno)',
  'Protocolo',
  'Área de estudos'
]

var i;

for (i = 0; i < lista.length; i++) {
  var menuItem = document.createElement("li");
  var textoMenu = document.createTextNode(lista[i]);
  var icone = document.createElement("img");
  var linkMenu = document.createElement("a");
  var menu = document.querySelector(".menu-lateral__itens-do-menu");

  menu.appendChild(menuItem);
  linkMenu.appendChild(icone);
  linkMenu.appendChild(textoMenu);
  menuItem.appendChild(linkMenu);

  menuItem.classList.add('menu-lateral__item');
  icone.classList.add('menu-lateral__icone')
}
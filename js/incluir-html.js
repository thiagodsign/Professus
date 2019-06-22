function incluirHTML() {
  var z, i, elementos, arquivo, xhttp;

  /*Loop em todos os elementos html do arquivo:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elementos = z[i];

    /*Busca de elementos com o atributo incluir-html*/
    arquivo = elementos.getAttribute("incluir-html");
    if (arquivo) {
      /*Solicitação via HTTP usando o valor do atributo como o nome do arquivo*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elementos.innerHTML = this.responseText; }
          if (this.status == 404) { elementos.innerHTML = "Página não encontrada."; }

          /*remove o atributo e chama essa função mais uma vez*/
          elementos.removeAttribute("incluir-html");
          incluirHTML();
        }
      }
      xhttp.open("GET", arquivo, true);
      xhttp.send();

      return;
    }
  }
};

incluirHTML();
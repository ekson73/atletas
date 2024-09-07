function pesquisar() {
  let input = document.getElementById("input-pesquisa").value;
  let resultado = "";
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].nome.toLowerCase().includes(input.toLowerCase()) || dados[i].descricao.toLowerCase().includes(input.toLowerCase())) {
      resultado += `
      <div class="item-resultado">
        <h2>
          <a href="${dados[i].link}" target="_blank">${dados[i].nome}</a>
        </h2>
        <p class="descricao-meta">${dados[i].descricao}</p>
        <a href="${dados[i].link}" translate="yes" target="_blank">Mais informações</a>
      </div>`;
    }
  }

  if (!resultado) {
    resultado = "<p> Nenhum resultado encontrado </p>";
  }
  document.getElementById("resultados-pesquisa").innerHTML = resultado;
}


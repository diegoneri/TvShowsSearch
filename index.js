const handleSearch = async (event) => {
  event.preventDefault();

  const query = document.getElementById("query").value;

  const apiResponse = await fetch(
    `https://api.tvmaze.com/search/shows?q= + ${query}`
  )
    .then((response) => console.log(response))
    .then((result) => exibirMensagem(result.json));

  // implemente a consulta a partir daqui

  //// Exemplo de endpoint: https://api.tvmaze.com/search/shows?q=lost

  //// Elementos de leiaute importantes:

  //  #message: use para exibir mensagens aos usuário, por exemplo:

  //  #shows: conterá os shows, cada um em um <li>, por exemplo:
  // <li>
  //   <img class="poster" src="https://static.tvmaze.com/uploads/images/medium_portrait/0/1389.jpg" />
  //   <span class="show-name">Lost</span>
  // </li>
};

const exibirMensagem = async (result) => {
  const message = document.querySelector("#message");
  message.innerHTML = result.length;
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#search-form")
    .addEventListener("submit", handleSearch);
});

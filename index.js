const handleSearch = async (event) => {
  event.preventDefault();

  const shows = document.querySelector("#shows");
  const message = document.querySelector("#message");

  shows.innerHTML = "";
  message.innerHTML = "searching... not for nemo";

  const query = document.querySelector("#query").value;

  const apiResponse = await fetch(
    `https://api.tvmaze.com/search/shows?q= + ${query}`
  );
  const result = await apiResponse.json();

  if (result.length === 0) {
    message.innerHTML = "not found";
    return;
  }

  message.innerHTML = "";
  exibirResultado(result);
};

const exibirResultado = async (result) => {
  result.forEach((entry) => {
    shows.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <img class="poster" src="${entry?.show?.image?.medium || ""}" />
        <span class="show-name">${entry?.show?.name || ""}</span>
      </li>`
    );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#search-form")
    .addEventListener("submit", handleSearch);
});

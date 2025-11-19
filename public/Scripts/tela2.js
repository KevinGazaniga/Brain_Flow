addEventListener("DOMContentLoaded", () => {
  document.querySelector(
    ".div_pesquisa"
  ).innerHTML = `<a>${localStorage.getItem("nome")}</a>`;
});

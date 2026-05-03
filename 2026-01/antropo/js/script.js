const modal = document.querySelector("#miModal");
const abrir = document.querySelector("#btnAbrir");
const cerrar = document.querySelector("#btnCerrar");

abrir.addEventListener("click", () => modal.showModal());
cerrar.addEventListener("click", () => modal.close());
export default function (ev) {
  const button = ev.currentTarget;
  if (button.innerText === "Copiar") {
    button.innerText = "Copiado!";
    button.classList.add("sucess");
    navigator.clipboard.writeText(document.querySelector("#result").value);
  } else {
    button.innerText = "Copiar";
    button.classList.remove("sucess");
  }
}
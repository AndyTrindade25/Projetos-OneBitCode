function register(ev) {
  console.log(ev);
  const sectionElemento = ev.currentTarget.parentNode;
  const username = sectionElemento.children.username.value;
  const passwordUser = sectionElemento.children.passwordUser.value;
  const confirmPassword = sectionElemento.children.confirmPassword.value;

  if (passwordUser === confirmPassword) {
    alert("Usuário registrado com sucesso!");
  } else {
    alert("Senhas não confere");
  }
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

function removeListener() {
  button.removeEventListener("click", register);
  alert("Event removed");
}

button.addEventListener("mouseover", function (ev) {
  console.log(ev.currentTarget);
});

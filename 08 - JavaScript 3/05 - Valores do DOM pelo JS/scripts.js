function register(element) {
  const username = element.children.username.value;
  const passwordUser = element.children.passwordUser.value;
  const confirmPassword = element.children.confirmPassword.value;

  if (passwordUser === confirmPassword) {
    alert("Usuário " + username + " registrado com sucesso!");
  } else {
    alert("Senhas não conferem!");
  }
}

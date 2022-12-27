function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };

  console.log(usuario);
}

criarUsuario("Anderson", "anderson@email.com", "123");

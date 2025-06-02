 document.getElementById("cadastro-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const cpf = document.getElementById("cpf").value;
  const nascimento = document.getElementById("dataNascimento").value;

  let usuarios = localStorage.getItem("usuarios");
  usuarios = usuarios ? JSON.parse(usuarios) : [];

  const emailExistente = usuarios.some(usuario => usuario.email === email);

  if (emailExistente) {
    alert("Este e-mail já está cadastrado!");
    return;
  }

  const novoUsuario = { nome, email, senha, cpf, dt_nascimento: nascimento };
  usuarios.push(novoUsuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html"; // redireciona para o login
});

    
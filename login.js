document.getElementById("login-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("login-email").value.trim();
      const senha = document.getElementById("login-senha").value;

      let usuarios = localStorage.getItem("usuarios");
      usuarios = usuarios ? JSON.parse(usuarios) : [];

      const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

      if (usuarioValido) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
        window.location.href = "index.html"; // redireciona para a home
      } else {
        alert("Email ou senha inválidos.");
      }
    });
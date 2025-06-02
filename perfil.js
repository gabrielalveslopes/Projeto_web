// Executa quando a página estiver carregada
document.addEventListener("DOMContentLoaded", () => {
    
// Tenta obter os dados do usuário logado do localStorage
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

// Se não estiver logado manda para o login
  if (!usuario) {
    alert("Você precisa estar logado para acessar o perfil.");
    window.location.href = "login.html";
    return;
  }

// Preenche os campos do perfil com os dados
  document.getElementById("perfilNome").textContent = usuario.nome || "Usuário";
  document.getElementById("perfilNomeDetalhe").textContent = usuario.nome || "";
  document.getElementById("perfilEmail").textContent = usuario.email || "";
  document.getElementById("perfilSenha").textContent = usuario.senha || "";
  document.getElementById("perfilCpf").textContent = usuario.cpf || "";
  document.getElementById("perfilNascimento").textContent = usuario.dt_nascimento || "";
});

// Função de logout
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
}

// Executa quando a página estiver carregada
document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) {
    alert("Você precisa estar logado para acessar o perfil.");
    window.location.href = "login.html";
    return;
  }

  preencherPerfil(usuario);
});

// Função para preencher os dados na interface
function preencherPerfil(usuario) {
  document.getElementById("perfilNome").textContent = usuario.nome || "Usuário";
  document.getElementById("perfilNomeDetalhe").textContent = usuario.nome || "";
  document.getElementById("perfilEmail").textContent = usuario.email || "";
  document.getElementById("perfilSenha").textContent = usuario.senha || "";
  document.getElementById("perfilCpf").textContent = usuario.cpf || "";
  document.getElementById("perfilNascimento").textContent = usuario.dt_nascimento || "";

  // Restaura os botões
  document.getElementById("botoesPerfis").innerHTML = `
    <button onclick="editar()" id="butaosair">Editar</button>
  `;    
}

// Função para habilitar a edição
function editar() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  // Troca os textos por inputs
  document.getElementById("perfilNomeDetalhe").innerHTML = `<input type="text" id="inputNome" value="${usuario.nome}">`;
  document.getElementById("perfilEmail").innerHTML = `<input type="email" id="inputEmail" value="${usuario.email}">`;
  document.getElementById("perfilSenha").innerHTML = `<input type="password" id="inputSenha" value="${usuario.senha}">`;
  document.getElementById("perfilCpf").innerHTML = `<input type="text" id="inputCpf" value="${usuario.cpf}">`;
  document.getElementById("perfilNascimento").innerHTML = `<input type="text" id="inputNascimento" value="${usuario.dt_nascimento}">`;

  // Altera os botões para Confirmar e Cancelar
  document.getElementById("botoesPerfis").innerHTML = `
    <button onclick="confirmarEdicao()" id="butaosair" >Confirmar</button>
    <button onclick="cancelarEdicao()" id="butaosair">Cancelar</button>
  `;
}

function eco(){
    console.log("oi")
}

// Função para confirmar (salvar) a edição
function confirmarEdicao() {
  const novoNome = document.getElementById("inputNome").value;
  const novoEmail = document.getElementById("inputEmail").value;
  const novaSenha = document.getElementById("inputSenha").value;
  const novoCpf = document.getElementById("inputCpf").value;
  const novaDt_nascimento = document.getElementById("inputNascimento").value;

  const usuarioAtualizado = {
    nome: novoNome,
    email: novoEmail,
    senha: novaSenha,
    cpf: novoCpf,
    dt_nascimento: novaDt_nascimento
  };

  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));

  preencherPerfil(usuarioAtualizado);
  alert("Dados atualizados com sucesso!");
  console.log("oi")
}

// Função para cancelar a edição
function cancelarEdicao() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
  preencherPerfil(usuario);
}


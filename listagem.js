let dados = JSON.parse(localStorage.getItem('usuarios')) || [];

const tabela = document.querySelector('#tabela tbody');

// Renderiza a tabela
function renderizarTabela(lista) {
  tabela.innerHTML = '';

  if (lista.length === 0) {
    tabela.innerHTML = '<tr><td colspan="5">Nenhum registro encontrado.</td></tr>';
    return;
  }

  lista.forEach((item, index) => {
    const linha = document.createElement('tr');

    linha.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>${item.senha}</td>
      <td>${item.cpf}</td>
      <td>${item.dt_nascimento}</td>
      <td>
        <button onclick="editarRegistro(${index})">Editar</button>
        <button onclick="excluirRegistro(${index})">Excluir</button>
      </td>
    `;

    tabela.appendChild(linha);
  });
}

// 🔍 Filtro por nome OU email
function filtrarTabela() {
  const termo = document.getElementById('busca').value.toLowerCase().trim();

  const filtrados = dados.filter(item => 
    item.nome.toLowerCase().includes(termo) ||
    item.email.toLowerCase().includes(termo)
  );

  renderizarTabela(filtrados);
}

// ✏️ Editar registro
function editarRegistro(index) {
  const registro = dados[index];

  const novoNome = prompt('Digite o novo nome:', registro.nome);
  const novoEmail = prompt('Digite o novo email:', registro.email);
  const novaSenha = prompt('Digite a nova senha:', registro.senha);
  const novoCpf = prompt('Digite o novo CPF:', registro.cpf);
  const novaDataNascimento = prompt('Digite a nova data de nascimento:', registro.dt_nascimento);

  if (novoNome && novoEmail && novaSenha && novoCpf && novaDataNascimento) {
    registro.nome = novoNome;
    registro.email = novoEmail;
    registro.senha = novaSenha;
    registro.cpf = novoCpf;
    registro.dt_nascimento = novaDataNascimento;

    salvarNoLocalStorage();
    filtrarTabela();
    alert('Registro atualizado com sucesso!');
  }
}

// ❌ Excluir registro
function excluirRegistro(index) {
  const confirmar = confirm('Tem certeza que deseja excluir este registro?');
  if (confirmar) {
    dados.splice(index, 1);
    salvarNoLocalStorage();
    filtrarTabela();
    alert('Registro excluído com sucesso!');
  }
}

// 💾 Salvar no localStorage
function salvarNoLocalStorage() {
  localStorage.setItem('usuarios', JSON.stringify(dados));
}

// 🚀 Inicializa a tabela completa
renderizarTabela(dados);


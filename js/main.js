var data = [];

// Atualizar os itens da Tabela sempre que houver adição ou exclusão
function montarTable() {
  const table = document.querySelector('#table');
  table.innerHTML = '<tr> <th>Nome:</th> <th>Email:</th> <th>Telefone:</th> <th>Endereço:</th> <th>Data de nascimento:</th> <th>profissão:</th> <th>linkedin:</th> <th></th> </tr>'

  data.forEach((e, index) => {
    const row = document.createElement('tr');

    const nome = document.createElement('td');
    nome.innerHTML = e.nome ? e.nome : '';
    const email = document.createElement('td');
    email.innerHTML = e.email ? e.email : '';
    const telefone = document.createElement('td');
    telefone.innerHTML = e.telefone ? e.telefone : '';
    const end = document.createElement('td');
    end.innerHTML = e.endereco ? e.endereco : '';
    const dataDeNascimento = document.createElement('td');
    dataDeNascimento.innerHTML = e.dataDeNascimento ? e.dataDeNascimento : '';
    const profissao = document.createElement('td');
    profissao.innerHTML = e.profissao ? e.profissao : '';
    const linkedin = document.createElement('td');

    if(e.linkedin){
      const a = document.createElement('a');

      a.setAttribute('href', `https://www.linkedin.com/in/${e.linkedin}`);
      a.innerHTML = e.linkedin;
      linkedin.appendChild(a);
    }

    const tdButtonExcluir = document.createElement('td');
    const buttonExcluir = document.createElement('button');
    buttonExcluir.className = 'btn btn-danger';
    buttonExcluir.textContent = 'Excluir'
    buttonExcluir.addEventListener('click', () => {
      const newArr = data.filter((e, i) => i != index);
      data = newArr;
      montarTable();
    })
    tdButtonExcluir.appendChild(buttonExcluir);


    row.appendChild(nome);
    row.appendChild(email);
    row.appendChild(telefone);
    row.appendChild(end);
    row.appendChild(dataDeNascimento);
    row.appendChild(profissao);
    row.appendChild(linkedin);
    row.appendChild(tdButtonExcluir);
    table.appendChild(row);
  });
}

// Função para adicionar um contato na Tabela, recurando os valores e criando um novo registro 
function adicionarContato() {
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const telefone = document.querySelector('#telefone').value;
  const endereco = document.querySelector('#endereco').value;
  const dataDeNascimento = document.querySelector('#dataDeNascimento').value;
  const profissao = document.querySelector('#profissao').value;
  const linkedin = document.querySelector('#linkedin').value;

  const contato = new Contact(nome, email, telefone, endereco, dataDeNascimento, profissao, linkedin);
  data.push(contato);
  montarTable();
}

// Montar a tabela a primeira vez assim que carregar a pagina
window.onload = montarTable();
const data = [
  new Contact("carlos vinicius", "viniciusdev@gmail.com", "(85)99999-9999", "rua", "01/02/2020"),
  new Contact("carlos vinicius", "viniciusdev@gmail.com", "(85)99999-9999", "rua", "01/02/2020"),
  new Contact("carlos vinicius", "viniciusdev@gmail.com", "(85)99999-9999", "rua", "01/02/2020"),
];


function montarTable() {
  const table = document.querySelector('#table');
  table.innerHTML = '';

  data.forEach(e => {
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

    row.appendChild(nome);
    row.appendChild(email);
    row.appendChild(telefone);
    row.appendChild(end);
    row.appendChild(dataDeNascimento);
    row.appendChild(profissao);
    row.appendChild(linkedin);
    table.appendChild(row);
  });
}

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

window.onload = montarTable();
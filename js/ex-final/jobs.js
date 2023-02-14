let jobs = [];

function jobList() {
  if (jobs.length === 0) {
    alert('Não existem vagas disponíveis.');
  } else {
    const txtJobs = jobs.reduce(function (finalText, job, index) {
      // 1. nome (x candidatos)
      finalText += index + '. ';
      finalText += job.name;
      finalText += ' (' + job.candidates.length + ' candidatos)\n';
      return finalText;
    }, '');

    alert(txtJobs);
  }
}

function newJob() {
  const name = prompt('Informe um nome para a vaga:');
  const desc = prompt('Informe uma descrição para a vaga:');
  const limitDate = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga:');

  const confirmation = confirm(
    `Deseja criar uma nova vaga com essas informações?\nNome: ${name}\nDescrição: ${desc}\nData limite: ${limitDate}`
  );

  if (confirmation) {
    const newJob = { name, desc, limitDate, candidates: [] };
    jobs.push(newJob);
    alert('Vaga criada.');
  }
}

function showJob() {
  const index = prompt('Informe o índice da vaga que deseja exibir:');

  if (index >= jobs.length && index < 0) {
    alert('Essa vaga não existe.');
    return;
  }

  const job = jobs[index];
  const txtCandidates = job.candidates.reduce(function (finalText, candidate) {
    return finalText + '\n - ' + candidate;
  }, '');

  alert(
    `Vaga nº: ${index}\nName: ${job.name}\nDescrição: ${job.desc}\nData limite: ${job.limitDate}\nQuantidade de candidatos: ${job.candidates.length}\nCandidatos inscritos: ${txtCandidates}`
  );
}

function subscribeCandidate() {
  const candidate = prompt('Informe o nome do candidato:');
  const index = prompt(
    'Informe o index da vaga para a qual o(a) candidato(a) deseja se inscrever:'
  );
  const job = jobs[index];

  const confirmation = confirm(
    'Deseja inscrever o candidato ' +
      candidate +
      ' na vaga ' +
      index +
      '?' +
      '\nNome: ' +
      job.name +
      '\nDescrição: ' +
      job.desc +
      '\nDate limite: ' +
      job.limitDate
  );

  if (confirmation) {
    job.candidates.push(candidate);
    alert('Inscrição realizada.');
  }
}

function deleteJob() {
  const index = prompt('Informe o index da vaga que deseja excluir:');
  const job = jobs[index];

  const confirmation = confirm(
    'Tem certeza que deseja excluir a vaga ' +
      index +
      '?' +
      '\nNome: ' +
      job.name +
      '\nDescrição: ' +
      job.desc +
      '\nDate limite: ' +
      job.limitDate
  );

  if (confirmation) {
    jobs.splice(index, 1);
  }
  alert('Vaga excluída.');
}

function showMenu() {
  let option = prompt(
    '-VAGAS DE EMPREGO-\n\nEscolha uma opção:\n\n1. Listar Vagas\n2. Nova vaga\n3. Visualizar vaga\n4. Inscrever candidato\n5. Excluir vaga\n6. Sair'
  );
  return option;
}

function execute() {
  let option = '';

  do {
    option = showMenu();
    switch (option) {
      case '1':
        jobList();
        break;
      case '2':
        newJob();
        break;
      case '3':
        showJob();
        break;
      case '4':
        subscribeCandidate();
        break;
      case '5':
        deleteJob();
        break;
      case '6':
        alert('Encerrado...');
        break;
      default:
        alert('Opção inválida, tente novamente!');
        break;
    }
  } while (option !== '6');
}

execute();

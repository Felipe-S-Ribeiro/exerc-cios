// aqui ele ta pegando o elemento do html pelo id para usar esse elemento para exibir as informacoes do card.
const divFuncionarios = document.getElementById('funcionarios');

const containerDetalhes = document.getElementById('container-detahes-funcionario');
const nomeFuncionario = document.getElementById('nome-funcionario');
const imagemFuncionario = document.getElementById('imagem-funcionario');
const btnFechar = document.getElementById('btn-fechar');

function mostrarDetalhes(funcionario){
    nomeFuncionario.textContent = funcionario.nome; // aqui eu to acessando o elemento html, que esta na const nomeFuncionario
    imagemFuncionario.src = funcionario.urlFoto;
    containerDetalhes.style.visibility = 'visible'; // quando eu defino o visibility como visible, eu torno o container visível na página, pq inicialmente esse conteiner estava oculto por causa do visibility: hidden, então agora ele vai aparecer com os detalhes do funcionário.   
}

function renderizarCardCFuncionario(funcionario) {
    const card = document.createElement('div');  // ele vai criar uma div para representar o cartão do funcionario
            
    card.className = 'card ' + funcionario.profissao; // aqui eu to add cass.Name a div ue eu acabei de criar 

    card.innerHTML = 'ID:' + funcionario.id + '-' + funcionario.nome; // aqui ta concatenando as strings

    if (!funcionario.flgAtivo) {
        card.style.display = 'none';
    }

    card.addEventListener('click', () => {
        mostrarDetalhes(funcionario);
    });

    divFuncionarios.appendChild(card); // esse metodo aqui ele vai adicionar o elemento card como filho do elemento profissao e vai exibindo o cartão do funcionário na pagina
}

const listaFuncionarios = [];  

/*async function buscarFuncionarios() {
    const response = await fetch('http://localhost:3000/funcionarios');
    const funcionarios = await response.json();
    
    listaFuncionarios.push(...funcionarios);
    
   
    console.log(listaFuncionarios);
}

buscarFuncionarios();*/

async function buscarFuncionarios() {
    const response = await fetch('http://localhost:3000/funcionarios');
    const funcionarios = await response.json();


    listaFuncionarios.push(...funcionarios); //esses 3 pontos ele vai espalhar os funcionarios dentro do arraay


    console.log(listaFuncionarios);
}

async function main() {



    await buscarFuncionarios()

    btnFechar.addEventListener('click', () => {
        containerDetalhes.style.visibility = 'hidden';  // isso aqui vai ocultar de novo a div de detalhes
        nomeFuncionario.textContent = '';
        imagemFuncionario.src = '';
    })

    for (const funcionario of listaFuncionarios) {
        //aque ele vai iniciar um loop que vai percorrer todos os elementos do array acima
        renderizarCardCFuncionario(funcionario);
    }
    console.log(listaFuncionarios)
    if (listaFuncionarios.length === 0) {
        divFuncionarios.innerHTML = 'Nenhum funcionário cadastrado...';
    }
}

main();

document.getElementById('btn-nova-pag').addEventListener('click', function(){
    window.location.href = 'form-funcionario.html';
})
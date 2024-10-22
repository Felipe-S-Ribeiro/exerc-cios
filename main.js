function mostrarDetalhes(funcionario){
    nomeFuncionario.textContent = funcionario.nome; // aqui eu to acessando o elemento html, que esta na const nomeFuncionario
    imagemFuncionario.src = funcionario.urlFoto;
    containerDetalhes.style.visibility = 'visible'; // quando eu defino o visibility como visible, eu torno o container visível na página, pq inicialmente esse conteiner estava oculto por causa do visibility: hidden, então agora ele vai aparecer com os detalhes do funcionário.   
}

const listaFuncionarios = [
    {
        id: 1,
        nome: 'Fulano',
        urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2l4bJzNQBnbaAx5yUJBciqENRQnxf2jtyA&s',
        profissao: 'DEV',
        flgAtivo: true
    },
    {
        id: 2,
        nome: 'Sicrano',
        urlFoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCvStLCfeFNSUSyNlPynR0JfE6cRQIR7HTgloY9yLeB5pkmaPj45BHQSlkNN___Eg_po&usqp=CAU',
        profissao: 'DBA',
        flgAtivo: true 
    },
    {
        id: 3,
        nome: 'Beltrano',
        urlFoto: 'https://cdn-icons-png.flaticon.com/256/537/537245.png',
        profissao: 'DBA',
        flgAtivo: true
    },
    {
        id: 4,
        nome: 'Jurosbalda',
        urlFoto: 'https://cdn-icons-png.flaticon.com/512/560/560236.png',
        profissao: 'DESIGNER',
        flgAtivo: true
    }
];

// aqui ele ta pegando o elemento do html pelo id para usar esse elemento para exibir as informacoes do card.
const divFuncionarios = document.getElementById('funcionarios');

const containerDetalhes = document.getElementById('container-detahes-funcionario');
const nomeFuncionario = document.getElementById('nome-funcionario');
const imagemFuncionario = document.getElementById('imagem-funcionario');
const btnFechar = document.getElementById('btn-fechar');


btnFechar.addEventListener('click', () => {
    containerDetalhes.style.visibility = 'hidden';  // isso aqui vai ocultar de novo a div de detalhes
    nomeFuncionario.textContent = '';
    imagemFuncionario.src = '';
})

for (const funcionario of listaFuncionarios) { //aque ele vaii iniciar um loop que vai percorrer todos os elementos do array acima

        const card = document.createElement('div');  // ele vai criar uma div para representar o cartão do funcionario
        
        card.className = 'card ' + funcionario.profissao; // aqui eu to add cass.Name a div ue eu acabei de criar 

        card.innerHTML = 'ID:' + funcionario.id + '-' + funcionario.nome; // aqui ta concatenando as strings

        if (!funcionario.flgAtivo) {
            card.style.display = 'none';
        }

        card.addEventListener('click', () => {
            mostrarDetalhes(funcionario);
        })
        

    
        divFuncionarios.appendChild(card); // esse metodo aqui ele vai adicionar o elemento card como filho do elemento profissao e vai exibindo o cartão do funcionário na pagina

    // }
}
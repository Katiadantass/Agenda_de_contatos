const form = document.getElementById("form-contatos");
const imgPerfil = '<img src="./imagens/Profile_cicle.png" alt="perfil" />';
const nomes = [];
const telefones = [];
let linhas = "";

form.addEventListener("submit", function (e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById("nome-contato");
    const inputTelefone = document.getElementById("telefone");

    if (telefones.includes(inputTelefone.value)) {
        alert (`O telefone: ${inputTelefone.value} já está na sua lista de contatos!`);
    } else {
        nomes.push(inputNomeCompleto.value);
        telefones.push(inputTelefone.value);

    let linha = "<tr>";
    linha += `<td>${imgPerfil}</td>`;
    linha += `<td>${inputNomeCompleto.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `<td><button class="excluir-btn" onclick="excluirContato(${nomes.length - 1})">Excluir</button></td>`;
    linha += "</tr>";

    linhas += linha;
    }

    // Limpa os campos de entrada
    inputNomeCompleto.value = "";
    inputTelefone.value="";
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function excluirContato(index) {
    // Verifica se o índece é válido antes de remover
    nomes.splice(index, 1);
    telefones.splice(index, 1);
    atualizarLinhas(); // Atualiza a variável 'linhas' corretamente
    atualizaTabela(); //Renderiza a tabela novamente
}

function atualizarLinhas() {
    linhas = "";

    for (let i = 0; i < nomes.length; i++) {

    let linha = "<tr>";
    linha += `<td>${imgPerfil}</td>`;
    linha += `<td>${nomes[i]}</td>`;
    linha += `<td>${telefones[i]}</td>`;
    linha += `<td><button class="excluir-btn" onclick="excluirContato(${i})">Excluir</button></td>`;
    linha += "</tr>";
    linhas += linha;
    }
}
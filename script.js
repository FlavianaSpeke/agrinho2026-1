JavaScript


// Array com dJavaScript


// Array com dicas de sustentabilidade e convivência
const dicas = [
    "Dica 1: Recolha o seu próprio prato e copo logo após o uso. Pequenas ações evitam grandes acúmulos!",
    "Dica 2: Respeite o tempo gasto na limpeza. Se alguém limpou o chão, espere secar antes de andar com calçado sujo.",
    "Dica 3: Na agricultura ou em casa, o desperdício é o inimigo. Não desperdice o esforço de quem cuida do ambiente.",
    "Dica 4: Quem divide as tarefas multiplica o tempo livre de todos na casa!"
];

// Seleciona o botão e o parágrafo no HTML
const botao = document.getElementById('botaoDica');
const texto = document.getElementById('textoDica');

// Adiciona o evento de clique no botão
botao.addEventListener('click', function() {
    // Escolhe uma dica aleatória
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    // Mostra a dica na tela
    texto.textContent = dicas[indiceAleatorio];
});icas de sustentabilidade e convivência
const dicas = [
    "Dica 1: Recolha o seu próprio prato e copo logo após o uso. Pequenas ações evitam grandes acúmulos!",
    "Dica 2: Respeite o tempo gasto na limpeza. Se alguém limpou o chão, espere secar antes de andar com calçado sujo.",
    "Dica 3: Na agricultura ou em casa, o desperdício é o inimigo. Não desperdice o esforço de quem cuida do ambiente.",
    "Dica 4: Quem divide as tarefas multiplica o tempo livre de todos na casa!"
];

// Seleciona o botão e o parágrafo no HTML
const botao = document.getElementById('botaoDica');
const texto = document.getElementById('textoDica');

// Adiciona o evento de clique no botão
botao.addEventListener('click', function() {
    // Escolhe uma dica aleatória
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    // Mostra a dica na tela
    texto.textContent = dicas[indiceAleatorio];
});
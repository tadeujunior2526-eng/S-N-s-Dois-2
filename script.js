```javascript
const perguntas = [
    {
        categoria: "Conhecendo vocês",
        texto: "Qual foi o momento em que você percebeu que gostava de mim?"
    },
    {
        categoria: "Conhecendo vocês",
        texto: "Qual lembrança nossa você gostaria de reviver?"
    },
    {
        categoria: "Conhecendo vocês",
        texto: "Qual é uma coisa que você admira em mim?"
    },
    {
        categoria: "Diversão",
        texto: "Quem dos dois é mais provável de começar uma dança do nada?"
    },
    {
        categoria: "Diversão",
        texto: "Se pudéssemos viajar amanhã, para onde você iria comigo?"
    },
    {
        categoria: "Diversão",
        texto: "Qual filme ou série combina com a nossa história?"
    },
    {
        categoria: "Desafio",
        texto: "Faça um elogio sincero para a outra pessoa."
    },
    {
        categoria: "Desafio",
        texto: "Conte uma coisa que você gostaria de fazer junto comigo."
    },
    {
        categoria: "Desafio",
        texto: "Fiquem alguns segundos olhando um para o outro sem falar."
    },
    {
        categoria: "Romântico",
        texto: "Diga uma coisa que faz você se sentir especial ao meu lado."
    },
    {
        categoria: "Romântico",
        texto: "Qual seria o encontro perfeito para nós dois?"
    },
    {
        categoria: "Romântico",
        texto: "Complete: nossa história é especial porque..."
    }
];

let perguntaAtual = 0;


// COMEÇAR O JOGO
function iniciarJogo() {
    document.getElementById("inicio").classList.remove("ativa");
    document.getElementById("jogo").classList.add("ativa");

    mostrarPergunta();
}


// MOSTRAR PERGUNTA
function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("categoria").textContent =
        pergunta.categoria;

    document.getElementById("numero").textContent =
        `${perguntaAtual + 1}/${perguntas.length}`;

    document.getElementById("pergunta").textContent =
        pergunta.texto;
}


// PRÓXIMA PERGUNTA
function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual >= perguntas.length) {
        perguntaAtual = 0;
    }

    mostrarPergunta();
}


// VOLTAR PARA O INÍCIO
function voltarInicio() {

    perguntaAtual = 0;

    document.getElementById("jogo").classList.remove("ativa");
    document.getElementById("inicio").classList.add("ativa");
}
```

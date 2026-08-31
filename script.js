const perguntas = {

    conhecendo: [
        "Qual foi o momento em que você percebeu que gostava de mim?",

        "Qual lembrança nossa você gostaria de reviver?",

        "Qual é uma coisa que você admira em mim?",

        "O que você acha que torna nossa história especial?",

        "Qual foi um dos momentos mais engraçados que vivemos juntos?",

        "Qual lugar você gostaria de conhecer comigo?",

        "Qual coisa simples que fazemos juntos você mais gosta?"
    ],


    diversao: [
        "Quem dos dois é mais provável de começar uma dança do nada?",

        "Se pudéssemos viajar amanhã, para onde você iria comigo?",

        "Qual filme ou série combina com a nossa história?",

        "Quem dos dois provavelmente faria a maior besteira durante uma viagem?",

        "Se nossa história fosse um filme, qual seria o título?",

        "Quem dos dois demora mais para escolher o que assistir?",

        "Se tivéssemos um dia inteiro livre, o que você gostaria de fazer?"
    ],


    desafios: [
        "Faça um elogio sincero para a outra pessoa.",

        "Conte uma coisa que você gostaria de fazer junto comigo.",

        "Fiquem alguns segundos olhando um para o outro sem falar.",

        "Cada um conte uma coisa engraçada que lembra do outro.",

        "Imite uma mania divertida da outra pessoa.",

        "Conte uma história nossa que sempre faz você sorrir.",

        "Cada um diga uma qualidade que admira no outro."
    ],


    romantico: [
        "Diga uma coisa que faz você se sentir especial ao meu lado.",

        "Qual seria o encontro perfeito para nós dois?",

        "Complete: nossa história é especial porque...",

        "Qual momento nosso você guarda com carinho?",

        "O que você mais gosta nos momentos que passamos juntos?",

        "Qual sonho você gostaria de realizar ao meu lado?",

        "Diga uma coisa pela qual você é grato na nossa história."
    ]

};


let categoriaAtual = "";

let perguntaAtual = 0;


/* ABRIR CATEGORIAS */

function abrirCategorias() {

    esconderTelas();

    document
        .getElementById("categorias")
        .classList.add("ativa");
}


/* INICIAR JOGO */

function iniciarJogo(categoria) {

    categoriaAtual = categoria;

    perguntaAtual = 0;

    esconderTelas();

    document
        .getElementById("jogo")
        .classList.add("ativa");

    mostrarPergunta();
}


/* MOSTRAR PERGUNTA */

function mostrarPergunta() {

    const lista =
        perguntas[categoriaAtual];


    document
        .getElementById("categoria")
        .textContent =
        nomeCategoria(categoriaAtual);


    document
        .getElementById("numero")
        .textContent =
        `${perguntaAtual + 1}/${lista.length}`;


    document
        .getElementById("pergunta")
        .textContent =
        lista[perguntaAtual];
}


/* PRÓXIMA PERGUNTA */

function proximaPergunta() {

    const lista =
        perguntas[categoriaAtual];


    perguntaAtual++;


    if (perguntaAtual >= lista.length) {

        esconderTelas();

        document
            .getElementById("resultado")
            .classList.add("ativa");

        return;
    }


    mostrarPergunta();
}


/* NOMES DAS CATEGORIAS */

function nomeCategoria(categoria) {

    const nomes = {

        conhecendo:
            "💕 Conhecendo vocês",

        diversao:
            "😂 Diversão",

        desafios:
            "🎮 Desafios",

        romantico:
            "❤️ Romântico"

    };


    return nomes[categoria];
}


/* VOLTAR PARA INÍCIO */

function voltarInicio() {

    esconderTelas();

    document
        .getElementById("inicio")
        .classList.add("ativa");

    perguntaAtual = 0;

    categoriaAtual = "";
}


/* ESCONDER TODAS AS TELAS */

function esconderTelas() {

    const telas =
        document.querySelectorAll(".tela");


    telas.forEach(function(tela) {

        tela.classList.remove("ativa");

    });

}

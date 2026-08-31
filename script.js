* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;

    min-height: 100vh;

    background:
        linear-gradient(
            135deg,
            #ff416c,
            #8e2de2
        );

    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}


.app {
    width: 100%;
    max-width: 480px;

    min-height: 100vh;

    padding: 25px;

    display: flex;
    align-items: center;
    justify-content: center;
}


.tela {
    display: none;

    width: 100%;

    text-align: center;

    animation: aparecer 0.4s ease;
}


.tela.ativa {
    display: block;
}


/* INÍCIO */

.coracao {
    font-size: 75px;

    margin-bottom: 20px;

    animation: pulsar 1.5s infinite;
}


.coracao.pequeno {
    font-size: 45px;

    margin-bottom: 5px;
}


h1 {
    font-size: 40px;

    margin-bottom: 10px;
}


p {
    font-size: 17px;

    line-height: 1.5;

    opacity: 0.9;

    margin-bottom: 30px;
}


/* BOTÕES */

button {
    width: 100%;

    border: none;

    padding: 17px;

    border-radius: 18px;

    background: white;

    color: #e83e63;

    font-size: 18px;

    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
}


button:hover {
    transform: translateY(-2px);
}


button:active {
    transform: scale(0.97);
}


/* CATEGORIAS */

.categorias {
    display: flex;

    flex-direction: column;

    gap: 15px;

    margin-top: 25px;
}


.categoria-btn {
    display: flex;

    align-items: center;

    justify-content: flex-start;

    gap: 15px;

    text-align: left;

    padding: 18px 20px;

    background: rgba(255, 255, 255, 0.96);

    color: #333;

    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.15);
}


.categoria-btn span {
    font-size: 17px;
}


/* TOPO DO JOGO */

.topo {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 20px;
}


#categoria {
    background:
        rgba(255, 255, 255, 0.2);

    padding: 9px 14px;

    border-radius: 20px;

    font-size: 14px;

    font-weight: bold;
}


#numero {
    font-size: 14px;

    font-weight: bold;
}


/* CARD */

.card {
    background: white;

    color: #333;

    border-radius: 25px;

    padding: 30px 25px;

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.25);
}


.icone-pergunta {
    font-size: 35px;

    margin-bottom: 15px;
}


.card h2 {
    min-height: 150px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 23px;

    line-height: 1.45;
}


.btn-principal {
    margin-top: 20px;

    background:
        linear-gradient(
            90deg,
            #ff416c,
            #8e2de2
        );

    color: white;
}


/* BOTÃO VOLTAR */

.voltar {
    margin-top: 20px;

    background:
        transparent;

    color: white;

    border:
        1px solid rgba(255, 255, 255, 0.5);
}


/* RESULTADO */

.resultado-card {
    margin-top: 25px;
}


.resultado-card h2 {
    min-height: 100px;
}


/* ANIMAÇÕES */

@keyframes pulsar {

    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.12);
    }

    100% {
        transform: scale(1);
    }

}


@keyframes aparecer {

    from {
        opacity: 0;

        transform:
            translateY(10px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }

}


/* CELULAR */

@media (max-width: 400px) {

    .app {
        padding: 18px;
    }

    h1 {
        font-size: 34px;
    }

    .card {
        padding: 25px 20px;
    }

    .card h2 {
        font-size: 20px;
    }

}

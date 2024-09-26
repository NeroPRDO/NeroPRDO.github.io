// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Título foi mudado utilizando JS!";
});

// Evento de clique para mudança de frases
const changePhrasesBtn = document.getElementById("btn-mudar-frases");
const frases = document.getElementsByClassName("mensagem2");
changePhrasesBtn.addEventListener("click", function () {
  alert("Frases alteradas com sucesso!!!");
  frases[0].textContent = "Frase 1 alterada.";
  frases[1].textContent = "Frase 2 alterada.";
  frases[2].textContent = "Frase 3 alterada.";
});
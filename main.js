// Declarando variáveis
const numeros = document.querySelectorAll('input-valor');
const resultadoTela = document.querySelector("#result"); 
const buttonDarkMode = document.querySelector('.mode');
let conta;

// Teclas
function teclas (value){
    conta = resultadoTela.value += value
}
// Limpar a tela completa
function limpar (){
    resultadoTela.value = ""
}
// Calculando (botão igual '=')
function calcular () {
    const resultado = eval (conta)
    // computa um código JS representado como uma string.
    resultadoTela.value = resultado
}

// Limpando os itens da tela de 1 em 1
function retirar() {
    const palavraCompleta = resultadoTela.value
    const ultimaLetra = palavraCompleta.substring(0, resultadoTela.value.length - 1)
    console.log(ultimaLetra)
  
    resultadoTela.value = ultimaLetra
  }
// Botão DarkMode
buttonDarkMode.addEventListener('click', function() {
    document.documentElement.classList.toggle('ativo')
    buttonDarkMode.classList.toggle('ativo')
  })
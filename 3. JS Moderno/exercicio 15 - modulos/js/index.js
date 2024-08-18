import {calculate} from "./calculate.js"
import switch_theme from "./theme.js"
import copyToClipboard from "./copy.js"

// variaveis
const input = document.getElementById("input")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]         //teclas permitidas

// verificação de teclas
input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    // verificação da lista
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }

    // barra de espaço
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    // enter
    if(ev.key === 'Enter'){
        calculate()
    }
})

// aparecer valores na tela
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click',function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
});

// limpar teclas selecionadas
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

// calcular
document.getElementById('equal').addEventListener('click', calculate)

// mudar tema
document.getElementById('themeSwitcher').addEventListener('click', switch_theme)

// copiar resultado
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
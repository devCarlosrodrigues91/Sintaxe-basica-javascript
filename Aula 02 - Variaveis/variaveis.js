// Variaveis

// Boolean
var VouF = true
console.log (typeof(VouF))

//String
var nome = "Carlos"
console.log(typeof(nome))

//Number
var numero = 1
console.log(typeof(numero))

// Como declarar variaveis

// var
var nome =  'carlos'
console.log(nome)

// Let
let nome2 = 'cadu'
nome2 = 'Cadu'
console.log(nome2)

// Let 2, Podemos tambem mudar o valor da variavel, conforme tambem exemplado acima.

const constante = 'valor fixo'
console.log(constante)

// Escopos

// Escopo Global, declarando a variavel no topo do codigo ela fica disponivel para todo o codigo.
var escoboglobal = 'global'
console.log(escoboglobal)

//Escopo Local, Declarando ela em um local espefico ela serve somente naquele local.
function escopolocal(){
    let escopolocalint = 'Local'
    console.log(escopolocalint)
}
escopolocal();

// Atribuição de valores para variaveis, o sinal de = significa atribuição, ou seja, esta atribuindo um valor a esta variavel.
var atribuição = 'Valor'

// Comparação, para realizar uma comparação no JS usa-se o sinal de = duas vezes, ==.
var comparação = '0' == 0
console.log(comparação)

// Comparação idêntica, para realizar uma comparação idêntica no JS usa-se o sinal de = 3 vezes, ===, ele compara o valor e o tipo da variavel.
var comparacaoidentica = '0' === 0
console.log(comparacaoidentica)

// Operadores aritméticos

//Adição
var adicao = 1+1
console.log(adicao)

// Subtração
var subtracao = 10-5
console.log(subtracao)

// Multiplicação
var multiplicacao = 2*2
console.log(multiplicacao)

// Divisão real
var divisaoreal = 4/2
console.log(divisaoreal)

// Divisão Inteira
var divisaointeira = 5%2
console.log(divisaointeira)

//Potenciação
var potenciacao = 2**10
console.log(potenciacao)

// Operadores relacionais

//Maior que
var maiorque = 5>2
console.log(maiorque)

// Menor que
var menorque = 2<5
console.log(menorque)

// Maior ou igual a
var maiorouigual = 5>=4
console.log(maiorouigual)

// Menor ou igual a
var menorouigual = 5<=5
console.log(menorouigual)

// Operadores logicos

//  e
var e = true && true
console.log(e)

// ou
var ou = true || false
console.log(ou)

// Não
var nao = !false
console.log(nao)

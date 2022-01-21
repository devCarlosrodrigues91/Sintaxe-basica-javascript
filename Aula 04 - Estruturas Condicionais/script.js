// Estruturas condicionais

//if
/*var jogador1 = 0
var jogador2 = 1
var placar*/
/*if (jogador1>0){
    console.log('Jogador marcou ponto')
}*/

//else
/*if (jogador1>0){
    console.log('Jogador1 marcou ponto')
} else{
    console.log('Ninguém marcou ponto')
}*/

//else if
/*if (jogador1>0){
    console.log('Jogador1 marcou ponto')
} else if(jogador2>0){
    console.log('Jogador2 marcou ponto')
} else{
    console.log('Ninguém marcou ponto')
}*/

//if aninhada
/*if (jogador1 != 0){
    console.log('Jogador invalido')
if (jogador1>0){
    console.log('Jogador1 marcou ponto')
} else if(jogador2>0){
    console.log('Jogador2 marcou ponto')
} else{
    console.log('Ninguém marcou ponto')
}}*/

/*//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos'): console.log('Os jogadores são invalidos');

// usando o if
if (jogador1 > 0 && jogador2 == 0 ) {
    console.log('Jogador1 marcou ponto')
    placar = jogador1 > jogador2
} 

//usando elseif
else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador2 marcou ponto')
    placar = jogador2 > jogador1
} 

//usando else
else {
    console.log('Ninguém marcou ponto')
}
switch(placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou')
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou')
        break;
    default:
    console.log('Ninguem ganhou')
}*/

//Estruturas de repetições

var array = ['valor1','valor2','valor3','valor4','valor5']
let object = {propriedade1:'valor1', propriedade2:'valor2',propriedade3:'valor3'}

/*//For
//com array
for (let indice = 0; indice < array.length; indice++) {
        console.log(indice)
}*/

//for/in
//com array
/*for(let i in array){
    console.log(i)
}*/

//com objeto
/*for(i in object){
        console.log(i)
}*/

//for of
/*for(i of array){
    console.log(i)
}*/

//While
var a = 0 
/*while(a<10){
    a++
console.log(a)
}*/

//Do/While
do {
    a++;console.log(a)} while(a<5)
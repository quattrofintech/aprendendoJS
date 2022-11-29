
const loopWhile = () =>{
    let opcao = 2
    while(opcao != -1){
        opcao = getRandomInt(5, -5)
        console.log(`Opção: ${opcao}`)
    }
}

const loopDoWhile = () => {
    let opcao = -1
    do{
        opcao = getRandomInt(5, -5)
        console.log(`Opção: ${opcao}`)
    }while(opcao != -1)
}

const loopFor = () => {
    for(let i = 0; i  < 10; i++){
        console.log(`i = ${i}`)
    }
}

const loopFor2 = () => {
    const notas = [9.5, 5.7, 6.9, 7.3, 8.2, 4.1]
    for(let i in notas){
        console.log(notas[i])
    }
}

const getRandomInt = (max, min) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


//loopFor2()
//loopFor()

//loopWhile()
//loopDoWhile()




// Exercicio 01 - Escrever um programa para exibir 
//                os números de 1 até 50 na tela.
const exercicio1 = () => {
    for(let n = 1; n <= 50; n++){
        console.log(`n = ${n}`)
    }
}
//exercicio1()


// Exercício 02 - Fazer um programa para encontrar 
//                todos os números pares entre 1 e 100.
const exercicio2 = () => {
    for(let n = 1; n <= 100; n++){
        if(n % 2 == 0){
            console.log(`n = ${n}`)
        }
    }
}
//exercicio2()

//Exercício 03 - Ler um valor inteiro (aceitar somente valores 
// entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
const tabuada = (valor) => {
    //  const valor = getRandomInt(10, 1)
    // for(variavel; teste logico; incrementação)
    /*if(valor > 0 && valor < 11){
        for(let n = 1; n < 11; n++){
            console.log(`${valor} x ${n} = ${valor * n}`)
        }
    }else{
        console.log("Número inválido")
    }*/

    let n = 1
    valor = getRandomInt(11, 1)
    // while(teste logico)
    while(valor > 0 && valor < 11 && n < 11){
        console.log(`${valor} x ${n} = ${valor * n}`)
        n++
    }
    
}
tabuada(1)

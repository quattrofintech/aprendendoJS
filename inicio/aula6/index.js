/* 
    Exercicio 01
    - Leia várias idades
    calcule a média entre as idades 
        - média => somaTotal / qntEntradas
*/

// const idades = [18, 24, 46, 57, 13, 19, 28, 56, 45, 23, 100]
// let soma = 0

// // for(variavel; teste logico; incrementação)
// for(let i = 0; i < idades.length; i++ ){
//     soma += idades[i]
// }
// const media = soma/idades.length
// console.log("Média: ", media)






const idades = []
const cadastrarIdades = (e) =>{
    e.preventDefault()
    const p = document.getElementsByClassName("msg")[0]
    p.innerHTML = ""
    const idade = Number(document.getElementsByName("idade")[0].value)
    idades.push(idade)
    const calculos = returnTotalMediaQnt(idades)
    document.getElementsByName("idade")[0].value = ""
    document.getElementsByName("idade")[0].focus()
    exibirMsg(p, `<p>Total : ${calculos[0]}</p>`)
    exibirMsg(p, `<p>Qnt   : ${calculos[2]}</p>`)
    exibirMsg(p, `<p>Média : ${calculos[1]}</p>`)
}

const notasAlunos = (e) => {
    e.preventDefault()
    const notas = [9.5, 7, 6.5, 9, 8, 7.5, 4, 8, 5.5]
    const calculos = returnTotalMediaQnt(notas)
    console.log(`Soma Notas ${calculos[0]}`)
    console.log(`Qnt Notas ${calculos[2]}`)
    console.log(`media Notas ${calculos[1]}`)
}

const somaTotal = () =>{
    let somaTotal = 0
    for(i = 0; i < idades.length; i++){
        somaTotal += idades[i]
    }
    return somaTotal
}

const returnTotalMediaQnt = (array) =>{
    let total = 0
    for(i = 0; i < array.length; i++){
        total += array[i]
    }
    return [total, (total / array.length).toFixed(2), array.length]
}

const exibirMsg = (lugar, msg) => {
    lugar.innerHTML += `${msg}`
}
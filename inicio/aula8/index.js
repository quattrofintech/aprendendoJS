const exercicio1 =  () => {
    const array = []
    let valoresNegativos = 0
    for(let i = 0; i < 5; i++){
        array.push(getRandomInt(-5, 5))
    }
    for(let i in array){
        if(array[i] < 0){
            valoresNegativos++
        }
    }
    exibirTela(`Array: ${array}`, document.querySelector("section.exe1"))
    exibirTela(`Negativos ${valoresNegativos}`, document.querySelector("section.exe1"))
}

const exercicio2 = () => {
    const n = getRandomInt(0, 11)
    let resultado = n
    if(n === 0){
        exibirTela(`R: ${n}! = 1`, document.querySelector("section.exe2"))
    }else{
        for(let i = n - 1; i > 0; i--){
            resultado = resultado * i
        }
        exibirTela(`R: ${n}! = ${resultado}`, document.querySelector("section.exe2"))
    }
}

const exercicio3 = () => {
    const alunos = []

    while(true){
        let nota = 0
        let media = 0
        let codigo = -1
        const aluno = {
            notas: []
        }
        codigo = getRandomInt(0, 10)
        if(codigo !== 0){
            for(let i = 0; i < 3; i++){  
                nota =  getRandomInt(0, 11)
                aluno.notas.push(nota)
                media += nota
            }
            aluno['media'] = parseFloat((media/3).toFixed(2))
            aluno['codigo'] = codigo
            //console.log(aluno)
            alunos.push(aluno)
        }else{
            break
        }
    }

    for(let i in alunos){
        exibirTela(`Codigo: ${alunos[i].codigo} - Notas: ${alunos[i].notas} - Média Final: ${alunos[i].media}`
        , document.querySelector("section.exe3"))

    }
}

const exercicio4 = () => {
    const lista = []
    let menor = 100000;
    let maior = -999999
    for(let i = 0; i < 50; i++){
        lista.push(getRandomInt(0, 100))
    }

    lista.sort(
        function(a, b) {
            return a - b;
        }
    )

    //console.log(lista)
    //console.log(lista[0])
    //console.log(lista[lista.length - 1])

    for(let i in lista){
        if(menor > lista[i]){
            menor = lista[i]
        }
        if(maior < lista[i]){
            maior = lista[i]
        }
    }

    exibirTela(`Lista: ${lista}`, document.querySelector("section.exe4"))
    exibirTela(`Maior: ${maior}`, document.querySelector("section.exe4"))
    exibirTela(`Menor: ${menor}`, document.querySelector("section.exe4"))


}

const exercicio5 = () => {
    const vezes = getRandomInt()
    
    for(let i = 0; i < vezes; i++){
        const n = getRandomInt(0, 11)
        let resultado = n
        if(n === 0){
            exibirTela(`R: ${n}! = 1`, document.querySelector("section.exe5"))
        }else{
            for(let i = n - 1; i > 0; i--){
                resultado = resultado * i
            }
            exibirTela(`R: ${n}! = ${resultado}`, document.querySelector("section.exe5"))
        }
    }
    
}

const exercicio6 = () => {
    const array = []
    for(let i = 0; i < 500; i++){
        const n = getRandomInt(0, 1000)
        if(n >= 0){ 
            array.push(n)
        }
    }
    array.sort(
        function(a, b){
            return a - b
        }
    )
    //console.log(array)
    //console.log(array[0])
    //console.log(array[array.length - 1])

    let soma = 0
    let menor = 999999
    let maior = -99999
    for(let i = 0; i < array.length; i++){
        soma += array[i]
        if(menor > array[i])
            menor = array[i]
        if(maior < array[i])
            maior = array[i]
    }
    
    exibirTela(`Maior R: ${maior}`, document.querySelector("section.exe6"))
    exibirTela(`Menor R: ${menor}`, document.querySelector("section.exe6"))
    exibirTela(`Média R: ${(soma / array.length).toFixed(2)}`, document.querySelector("section.exe6"))


}


function exibirTela(valor, lugar){
    lugar.innerHTML += `<p>${valor} </p>`
}

function getRandomInt(min = 1, max = 5){
    return Math.floor(Math.random() * (max - min) + min)
}


// Chamando as Funções
exercicio1()
exercicio2()
exercicio3()
exercicio4()
exercicio5()
exercicio6()
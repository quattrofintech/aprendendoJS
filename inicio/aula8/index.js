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

function exibirTela(valor, lugar){
    lugar.innerHTML += `<p>${valor} </p>`
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}


// Chamando as Funções
exercicio1()
exercicio2()
exercicio3()
exercicio4()
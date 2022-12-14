// Destructuring 

// Com objetos
console.log("Objeto")

const aluno = {
    nome: 'Akio',
    idade: 24,
    contato: {
        telefone: '(21)9 1234 - 6987',
        email: 'akio@email.com'
    },
    med: 8.7
}

const {nome, idade} = aluno
console.log(nome, idade) // console.log(aluno.nome, aluno.idade)

const {nome: nome_aluno, idade: idade_aluno} = aluno
console.log(nome_aluno, idade_aluno)

const {turma, med = 6} = aluno
console.log(turma, med)

const {contato} = aluno
console.log(contato)
//console.log(contato.email, contato.telefone)

const {contato: {telefone, email, instagram}} = aluno
console.log(telefone, email, instagram)

//const {contatos: {nota1, nota2}} = aluno
//console.log(nota1, nota2)


// Com arrays
console.log("Array")

//               0   1   2   3
const numeros = [10, 20, 30, 40]
//     0  1  2  3  
const [n1, , n3, , n5, n6 = 9999] = numeros
console.log(n1, n3, n5, n6)


// Com funções


// objeto
console.log("Função com Objeto")

function getRandomObj({min = 0, max = 100}){
    return Math.floor(Math.random() * (max - min) + min)
}

const obj = {
    max: 30,
    min: 10
}

console.log(getRandomObj(obj))
console.log(getRandomObj({max: 50, min: 40}))
console.log(getRandomObj({min: 90}))
console.log(getRandomObj({}))
//console.log(getRandomObj())

// array
console.log("Função com Array")
function getRandomArray([min = 100, max = 2000]){
    if(min > max)
        [min, max] = [max, min]
    return Math.floor(Math.random() * (max - min) + min)
}

const a = [600, 605]
console.log(getRandomArray(a))
console.log(getRandomArray([907, 100]))
console.log(getRandomArray([905]))
console.log(getRandomArray([, 905]))
console.log(getRandomArray([, 905]))
console.log(getRandomArray([]))
// console.log(getRandomArray())

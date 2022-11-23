const body = document.body

body.innerHTML += "<h1> Numbers </h1>"
// NÚMEROS
const x = 2
const y = 4
const pi = 3.141592

console.log("Potência")
console.log(Math.pow(x, y))
body.innerHTML += returnTextEdit("Potencia", "Math.pow(x, y)")
body.innerHTML += returnTextEdit(`${x} <sup>${y}</sup> = `, Math.pow(x, y) )

console.log("Raiz Quadrada")
console.log(Math.sqrt(y))
body.innerHTML += returnTextEdit("Raiz Quadrada", "Math.sqrt(x)")
body.innerHTML += returnTextEdit(`√${y} = `, Math.sqrt(y) )

console.log("PI")
console.log(Math.PI)
body.innerHTML += returnTextEdit("PI", "Math.PI")
body.innerHTML += returnTextEdit(`PI = `, Math.PI )

console.log("Arredondamento")
console.log(Math.ceil(pi)) // Arredonda para cima
console.log(Math.floor(pi)) // Arredonda para baixo
console.log(Math.round(pi)) // Arredonda para o inteiro mais prox.
console.log(Math.trunc(pi)) // Exclui as casas decimais

body.innerHTML += returnTextEdit("Tipos de ", "Arredondamento")
body.innerHTML += returnTextEdit(`Arredonda para cima`, "Math.ceil(x) ")
body.innerHTML += returnTextEdit(`${pi} = `, Math.ceil(pi))
body.innerHTML += returnTextEdit(`Arredonda para baixo`, "Math.floor(x) ")
body.innerHTML += returnTextEdit(`${pi} = `, Math.floor(pi))
body.innerHTML += returnTextEdit(`Arredonda para o inteiro mais proximo`, "Math.round(x) ")
body.innerHTML += returnTextEdit(`${pi} = `, Math.round(pi))
body.innerHTML += returnTextEdit(`Exclui as casas decimais`, "Math.trunc(x) ")
body.innerHTML += returnTextEdit(`${pi} = `, Math.trunc(pi))


console.log("Aleatório")
console.log(Math.random())
console.log(Math.floor(Math.random() * 10))
console.log(getRandomInt(50, 100))
body.innerHTML += returnTextEdit(`Aleatório`, "Math.random() ")
body.innerHTML += returnTextEdit("Math.floor(Math.random() * 10) = ", Math.floor(Math.random() * 10))

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}


// Strings 
body.innerHTML += "<h1> Strings </h1>"
const curso = "Quattro Edtech"
console.log(curso)
console.log(curso.length)

body.innerHTML += returnTextEdit("Verificar Tamanho", "str.length")
body.innerHTML += returnTextEdit("Quattro Fintech", curso.length)


console.log("Upper Case")
console.log(curso.toUpperCase())
console.log(curso.toLowerCase())

console.log(curso.charAt(2))
console.log(curso.charAt(15))
console.log(curso.indexOf("e"))
console.log(curso.charCodeAt(2))

console.log(curso.substring(10))
console.log(curso.substring(1, 5))

console.log(curso.slice(-6))

console.log(curso.replace("t", "X"))
console.log(curso.replaceAll("t", "X"))
console.log(curso.replace("t", "X"))

const alunos = "Akio;Sayumi;Kenji;Emerson;Mateus;Davi;Igor;Felipe;Eric"

console.log(alunos)
const list_alunos = alunos.split(";")
console.log(list_alunos)
console.log(list_alunos[9])

console.log(curso)


// Booleans
let continuar = true
console.log(continuar)
continuar = false
console.log(continuar)
console.log(typeof continuar)

continuar = 0
console.log(typeof continuar)
console.log(continuar)

console.log("Teste Bool")
continuar = false
console.log(!!continuar)

console.log("verdadeiros")
console.log(!!15)
console.log(!!" ")
console.log(!!"Texto de teste")
console.log(!![])
console.log(!!{})

console.log("Falsas")
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)





























function returnTextEdit(texto, strong){
    return `<p>${texto} <strong>${strong}</strong></p>`
}
console.log(`'1' == 1 ? R: ${'1' == 1}`) // '1' == 1
console.log(`'1' === 1 ? R: ${'1' === 1}`) // '1' === 1

console.log(`undefined == null ? R: ${undefined == null}`) // undefined == null
console.log(`undefined === null ? R: ${undefined === null}`) // undefined === null

// E && and
// OU || or
// DIF ou XOR !=

// Operador Unário
let num = 0
let teste = 0

console.log(++teste === num++)

num++ // ++num
num-- // --num
console.log(num)

// Pos increment != Pre incremente
console.log(++num) // Pre
console.log(num++) // Pos
console.log(num)

let t = 0
console.log(t++, t)


// Operador Ternário
// teste ? verdadeiro : falso
const bool = 1 < 2 ? 15 : 2
console.log(bool)

const nota = 4
console.log(nota >= 7 ? 'Aprovado' : 'Reprovado')
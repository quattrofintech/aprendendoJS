//console.log("Conectou!!!")

calcularSalario()
calcularPeso()
numero(-55)

function calcularSalario(){
    //console.log("Calcular")

    // A jornada de trabalho semanal de um funcionário é de 40 horas. 
    // O funcionário que trabalhar mais de 40 horas receberá hora 
    // extra, cujo cálculo é o valor da hora regular com um 
    // acréscimo de 50%. Escreva um algoritmo que leia o número de 
    // horas trabalhadas em um mês, o salário por hora e escreva o 
    // salário total do funcionário, que deverá ser acrescido das 
    // horas extras, caso tenham sido trabalhadas (considere que 
    // o mês possua 4 semanas exatas).  
    
    // trab_hr = 40
    // acre = + 50% salario_hora
    // hora_trabalhadas
    // sal_hora

    const horas_trabalhadas = 60
    const sal_hora = 35.67

    let span = document.getElementById("salario-funcionario")

    if(horas_trabalhadas > 40){
        const adicional = (sal_hora * 1.5) * (horas_trabalhadas - 40)
        const salario = (sal_hora * 40) + adicional
        // console.log('Salário Mensal')
        // console.log("R$ " + salario.toFixed(2))
        span.innerText = "R$ " + salario.toFixed(2)
    }else{
        const salario = sal_hora * horas_trabalhadas
        // console.log('Salário Mensal')
        // console.log("R$ " + salario.toFixed(2))
        span.innerText = "R$ " + salario.toFixed(2)
    }
}

function calcularPeso(){
    // Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma 
    // pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:
    //  - para sexo masculino: peso ideal = (72.7 * altura) - 58
    //  - para sexo feminino: peso ideal = (62.1 * altura) - 44.7 

    const nome = "Kenji Hash"
    const altura = 1.74
    const sexo = "M"
    let peso_ideal = 0

    const span = document.getElementById("peso-usuario")

    if(sexo == "M"){
        peso_ideal = (72.7 * altura) - 58
    }else{
        peso_ideal = (62.1 * altura) - 44.7
    }

    // console.log(`${nome} seu peso ideal é ${peso_ideal}`)
    // console.log(nome + " seu peso ideal é " + peso_ideal)
    // console.log(nome , " seu peso ideal é " , peso_ideal)
    span.innerText = `${nome} seu peso ideal é ${peso_ideal}`
}

function numero(){
    // Ler um valor e escrever se é positivo, negativo ou zero
    const numero = document.getElementsByName("numero")[0].value
    const p = document.getElementById("verificar-p")
    if(numero === ""){
        p.innerText = "Digite um valor"
    }else{
        if(numero > 0){
            //console.log(numero + " Número POSITIVO")
            p.innerText = numero + " Número POSITIVO"
        }else if(numero < 0){
            // console.log(numero + " Número NEGATIVO")
            p.innerText = numero + " Número NEGATIVO"
        }else{
            // console.log(numero + " Número ZERO")
            p.innerText = numero + " Número ZERO"
        }
    }
    

}


function login(e){
    e.preventDefault()
    const user = document.getElementsByName("username")[0].value
    const pass = document.getElementsByName("password")[0].value
    console.log(user, pass)
    if(user != "kenji"){
        document.getElementById("res-server").innerText = "Usuário não encontrado"
        document.getElementById("res-server").style.display = "block"
    }else{
        document.getElementById("res-server").innerText = "Usuário conectado"
    }
}
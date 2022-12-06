const alunos = []

// Arrow Function
const formulario = (e) => {
    e.preventDefault()
    //console.log(e.submitter.defaultValue)
    switch(e.submitter.defaultValue){
        case "Cadastrar":
            // faça tal coisa
            cadastrarAluno()
            break
        case "Alterar":
            // faça tal coisa
            alterarAluno()
            break
        case "Pesquisar":
            // faça tal coisa
            console.log("Chamar Função Pesquisar")
            break
        default:
            // faça tal coisa
            console.log("Nenhuma das Opções anteriores")
            break
    }
}

const cadastrarAluno = () => {
    const nome = document.getElementsByName("name")[0].value.trim().toUpperCase()
    const media = Number(document.getElementsByName("mean")[0].value.replace(",", "."))
    let situacao
    if(media < 6){
        situacao = "REPROVADO"
    }else{
        situacao = "APROVADO"
    }
    const id = returnLastID(alunos)
    //console.log(nome, media, situacao, id)
    const aluno = {
        id: id,
        nome: nome,
        media: media,
        situacao: situacao
    }

    alunos.push(aluno)
    exibirTabela(alunos)
    limparCampos()
}

const alterarAluno = () => {
    const id = document.getElementsByName("id")[0].value
    if(id){
        const nome = document.getElementsByName("name")[0].value.trim().toUpperCase()
        const media = Number(document.getElementsByName("mean")[0].value.replace(",", "."))
        let situacao
        if(media >= 6){
            situacao = "APROVADO"
        }else{
            situacao = "REPROVADO"
        }
        const retorno = alterarArray(alunos, id, nome, media, situacao )
        if(retorno){
            exibirTabela(alunos)
            limparCampos()
        }else{
            exibirTabela([])
        }
    }else{
        exibirTabela([])
    }
}

const alterarArray = (array, id, nome, media, situacao) => {
    for(let item in array){
        if(array[item].id == id){
            array[item].nome = nome
            array[item].media = media
            array[item].situacao = situacao
            return true
        }
    }
    return false
}

const pesquisarAluno = () => {
    const id = Number(window.prompt("Digite o código do Aluno").trim())
    if(id){
        const data = pesquisarArray(id)
        if(!data){
            exibirTabela([])
        }else{
            exibirTabela([data])
            document.getElementsByName("id")[0].value = data.id
            document.getElementsByName("name")[0].value = data.nome
            document.getElementsByName("mean")[0].value = data.media
        }
    }else{
        console.log("Nenhum ID digitado!")
        document.querySelector("form").reset()
    }

}

const pesquisarArray = (id) => {
    for(let item in alunos){
        if(alunos[item].id === id){
            return alunos[item]
        }
    }
    return false
}

const listarAlunos = () => {
    exibirTabela(alunos)
    limparCampos()
}

const removerAluno = () => {
    const id = Number(window.prompt("Digite o ID do Aluno para ser REMOVIDO:").trim())
    if(id){
        for(let item in alunos){
            if(alunos[item].id === id){
                // remover
                alunos.splice(item, 1)
                return exibirTabela(alunos)
            }
        }
    }else{
        console.log("Id não encontrado")
    }
    
}

const returnLastID = (array) => {
    if(!array.length){
        return 1
    }else{
        return array[array.length - 1].id + 1 
    }
}

const exibirTabela = (array) => {
    const tbody = document.querySelector("table tbody")
    tbody.innerHTML = ""
    if(!array.length){
        tbody.innerHTML = `
        <tr>
            <td colspan="4">Aluno não encontrado</td>
        </tr>
        `
    }else{
        for(let i = 0; i < array.length; i++){
            tbody.innerHTML +=
            `
            <tr>
                <td>${array[i].id}</td>
                <td>${array[i].nome}</td>
                <td>${array[i].media}</td>
                <td>${array[i].situacao}</td>
            </tr>
            `
        }
    }
}

function limparCampos(){
    document.querySelector("form").reset()
    document.getElementsByName("name")[0].focus()
}

const url = 'https://api-burb.onrender.com/api'
const urlParams = new URLSearchParams(window.location.search)

const searchPackage = async () => {
    try{
        const response = await fetch(`${url}/package/${urlParams.get('id')}`)
        const data = await response.json()
        console.log(data.results)
        showPackage(data.results)
    }catch(error){
        console.log(error.message)
    }
}

const showPackage = (data) => {
    document.title = `Hotel - ${data.nome}`

    document.querySelector('.estrela p').innerText = `Hotel ${data.estrelas} estrelas`
    document.querySelector('.titulo .nome p').innerText = `${data.nome}` 
    document.querySelector('.titulo .preco p').innerText = `R$ ${data.preco / 100}` 
    document.querySelector('.endereco p').innerText = `${data.pais}` 
    
    document.querySelector('.descricao .comprar .diaria')
    .innerText = `${data.dias} ${data.dias > 1 ? 'diárias' : 'diária'}` 
    document.querySelector('.descricao .comprar .valor').innerText = ` R$ ${data.preco /100}` 
    
    //  IMG
    for(let i = 0; i < data.imagens.length; i++){
        const div = document.createElement('div')
        const img = document.createElement('img')
        img.src = `${data.imagens[i]}`
        
        div.appendChild(img)

        document.querySelector('.img').appendChild(div)
    }

    /* INCLUI */
    for(let i = 0; i < data.inclui.length; i++){
        const span = document.createElement('span')
        span.innerText = `${data.inclui[i]}`
        document.querySelector('.comodidade').appendChild(span)
    } 

    /* OPCOES */
    for(let i = 0; i < data.opcoes.length; i++){
        const saida = JSON.parse(data.opcoes[i])
        const p = document.createElement('p')
        p.innerText = ` - ${saida.passagem}`

        document.querySelector('.descricao .desc').appendChild(p)
    }
}

const reservar = async (e) => {
    e.preventDefault()
    document.querySelector('.toast-msg')
    .classList.toggle('hidden')
    await sleep(4000)
    document.querySelector('.toast-msg')
    .classList.toggle('hidden')
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

urlParams.get('id') ? searchPackage() : window.location.href = '../index.html'
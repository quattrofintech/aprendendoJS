const url = 'https://api-burb.onrender.com/api'
const urlParams = new URLSearchParams(window.location.search)

const searchHotel = async () => {
    try{
        const response = await fetch(`${url}/hotel/${urlParams.get('id')}`)
        const data = await response.json()
        console.log(data.results)
        showHotel(data.results)
    }catch(error){
        console.log(error.message)
    }
}

const showHotel = (data) => {
    document.title = `Hotel - ${data.nome}`

    document.querySelector('.estrela p').innerText = `Hotel ${data.estrelas} estrelas`
    document.querySelector('.titulo .nome p').innerText = `${data.nome}` 
    document.querySelector('.titulo .preco p').innerText = `R$ ${data.preco / 100}` 
    document.querySelector('.endereco p').innerText = `${data.endereco}` 
    document.querySelector('.descricao .desc p').innerText = `${data.descricao}` 
    
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

urlParams.get('id') ? searchHotel() : window.location.href = '../index.html'
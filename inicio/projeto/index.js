const url = 'https://api-burb.onrender.com/api'
/* 
    (GET, POST, PUT, DELETE)
    - hotels
    - packages
    - activities
*/

const getAllRequests = () => {
    // Requisição
    listPreviewHotels()
    listPreviewPackages()
    //listPreviewActivities()
}

const listPreviewPackages = async () => {
    try{
        const response = await fetch(`${url}/packages/preview`)
        const data = await response.json()
        showPackages(data.results)
    }catch(error) {
        console.log(error.message)
    }
    
}

const showPackages = (data) => {
    const hotels = document.querySelector('main .packages .card-content')
    for(let i = 0 ; i < data.length; i++){
        const link = document.createElement('a')
        link.setAttribute('href', `pages/pacote.html?id=${data[i].id}`)

        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = data[i].imagens[0]

        const left = document.createElement('div')
        left.classList.add('left')

        const titulo = document.createElement('p')
        titulo.innerText = data[i].nome
        left.appendChild(titulo)

        const right = document.createElement('div')
        right.classList.add('right')

        const preco = document.createElement('p')
        preco.innerText = `R$ ${(data[i].preco / 100)}`
        right.appendChild(preco)

        card.appendChild(img)
        card.appendChild(left)
        card.appendChild(right)

        link.appendChild(card)

        hotels.appendChild(link)
    }
}

const listPreviewHotels = async () => {
    try{
        const response = await fetch(`${url}/hotels/preview`)
        const data = await response.json()
        console.log(data)
        // Exibir
        showHotels(data.results)
    }catch(error) {
        console.log(error.message)
    }
}

const showHotels = (data) => {
    const hotels = document.querySelector('main .hotels .card-content')
    for(let i = 0 ; i < data.length; i++){
        const link = document.createElement('a')
        link.setAttribute('href', `pages/hotel.html?id=${data[i].id}`)

        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = data[i].imagens[0]

        const left = document.createElement('div')
        left.classList.add('left')

        const titulo = document.createElement('p')
        titulo.innerText = data[i].nome
        left.appendChild(titulo)

        const right = document.createElement('div')
        right.classList.add('right')

        const preco = document.createElement('p')
        preco.innerText = `R$ ${(data[i].preco / 100)}`
        right.appendChild(preco)

        card.appendChild(img)
        card.appendChild(left)
        card.appendChild(right)

        link.appendChild(card)

        hotels.appendChild(link)
    }
}

const listPreviewActivities = async () => {
    try{
        const response = await fetch(`${url}/activities`)
        const data = await response.json()
        // console.log(data)
        for(let i = 0; i < data.results.length; i++){
            console.log(data.results[i])
        }
    }catch(error) {
        console.log(error.message)
    }
}

getAllRequests()


const url = 'https://api-burb.onrender.com/api'
/* 
    (GET, POST, PUT, DELETE)
    - hotels
    - packages
    - activities
*/

const getAllRequests = () => {
    // Requisição
    listAllPackages()
    listAllHotels()
    listAllActivities()
}

const listAllPackages = async () => {
    try{
        const response = await fetch(`${url}/packages`)
        const data = await response.json()
        // console.log(data)
        for(let i = 0; i < data.results.length; i++){
            console.log(data.results[i])
        }
    }catch(error) {
        console.log(error.message)
    }
    
}

const showHotels = (data) => {
    const hotels = document.querySelector('main .hotels .card-content')
    for(let i = 0 ; i < data.length; i++){
        const card = document.createElement('div')
        card.classList.add('card')
        hotels.appendChild(card)
    }
}

const listAllHotels = async () => {
    try{
        const response = await fetch(`${url}/hotels`)
        const data = await response.json()
        // console.log(data)
        // Exibir
        showHotels(data.results)
    }catch(error) {
        console.log(error.message)
    }
}

const listAllActivities = async () => {
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


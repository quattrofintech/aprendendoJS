const url = 'https://pokeapi.co/api/v2/pokemon'
const urlParams = new URLSearchParams(window.location.search)

const getAllPokemon = async () => {
    const response = await fetch(`${url}?limit=151`)
    //console.log(response)

    const data = await response.json()
    //console.log(data)

    for(let i = 0; i < data.results.length; i++){
        const div = document.createElement('div')
        const name = document.createElement('h2')
        const link = document.createElement('a')
        const img = document.createElement('img')

        removeView()

        name.innerText = ` ${i + 1} ${data.results[i].name}`
        link.setAttribute('href', `pokedex.html?name=${data.results[i].name}`)
        link.innerText = 'ler mais'

        returnImg(data.results[i].name)
        .then((data) =>{
            //img.setAttribute('src',caminho da imagem )
            img.setAttribute('src', data.sprites.front_default)
        })
        .catch((error) => {
            console.log('Error:', error.status, error.message)
        })

        div.appendChild(img)
        div.appendChild(name)
        div.appendChild(link)

        document.querySelector('#content').appendChild(div)
    }
}

async function pokedex(){
    const response = await fetch(`${url}/${urlParams.get('name')}/`)
    const data = await response.json()
    console.log(data)
    
    removeView()

    const div = document.createElement('div')
    const name = document.createElement('h2')
    name.innerText = (data.name).toUpperCase()

    const number = document.createElement('p')
    number.innerText = `N: ${data.order}º`

    const weight = document.createElement('p')
    weight.innerText = `Peso: ${(data.weight/10).toFixed(2)} kg`
    

    const height = document.createElement('p')
    height.innerText = `Altura: ${(data.height/10).toFixed(2)} ${(data.height/10) < 1 ? 'cm' : 'm'}`

    const img = document.createElement('img')
    img.setAttribute('src', data.sprites.front_default)

    let moves = ''
    for(let i in data.moves){
        moves += `${data.moves[i].move.name}, `
    }
    moves = moves.substring(0, moves.length - 2)
    
    const att = document.createElement('p')
    att.innerText = `Attacks: ${moves}.`

    const type = document.createElement('p')
    type.innerText = `Tipo: ${data.types[0].type.name}`

    div.appendChild(name)
    div.appendChild(img)
    div.appendChild(number)
    div.appendChild(type)
    div.appendChild(height)
    div.appendChild(weight)
    div.appendChild(att)

    document.querySelector('#content').appendChild(div)

}

function removeView(){
    document.querySelector('#loading').classList.add('hide')
    document.querySelector('#content').classList.remove('hide')
}

const returnImg = async (name) => {
    try{
        const response = await fetch(`${url}/${name}`)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
    
}

// Operador Ternário
!urlParams.get('name') ? getAllPokemon() : pokedex()


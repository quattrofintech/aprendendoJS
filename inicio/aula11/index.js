const url = 'https://jsonplaceholder.typicode.com/posts'
const urlParams = new URLSearchParams(window.location.search)

let itens = 0
let number = 0
let data = ''
const qntArtigos = 10


const allPosts = async () => {
    if(!data){
        const response = await fetch(`${url}`)
        data = await response.json()
        //console.log(data)
        // Quantas paginas devem ter para aparecer todos os artigos
        itens = Math.ceil(data.length / qntArtigos) // 20 artigos por pagina
        //console.log(itens)
    }
    
    
    const article = document.querySelector('main article')
    article.innerHTML = ''

    for(let i = number; i < (qntArtigos + number); i++){
        //console.log(data[i].id, data[i].userId, data[i].title, data[i].body)
        const a = document.createElement('a')
        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const icon = document.createElement('img')

        h3.innerText = `${data[i].id} ${data[i].title}`
        p.innerText = data[i].body.replaceAll('\n', '')

        div.appendChild(h3)
        div.appendChild(p)
        a.appendChild(div)
        a.setAttribute('href', 'post.html?id=1')

        document.querySelector('main article').appendChild(a)
    }
    
    const buttons = document.querySelectorAll('main #buttons button')
    //console.log(buttons)
    if(!buttons.length){
        for(let i = 0; i < itens; i++){
            const button = document.createElement('button')
            button.innerText = i + 1 // exibe i + 1
            button.setAttribute('name', i) // nome = i
            button.addEventListener('click', alterPage)
            document.querySelector('main #buttons').appendChild(button)
        }
    }
    
}

function alterPage(e){
    //console.log(e.target.name)
    number = qntArtigos
    number = number * Number(e.target.name)
    allPosts()
    window.scrollTo(0, 0)
}

const readPost = async () => {
    fetch(`${url}/${urlParams.get('id')}`)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data.title)
        //console.log(data.body)
        //console.log(data.userId)
        //console.log(data.id)

        const article = document.querySelector('main article')

        const div = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')

        h3.innerText = `${data.title}`
        p.innerText = `${data.body.replaceAll('\n', '')}`

        div.appendChild(h3)
        div.appendChild(p)

        article.appendChild(div)


    })
    .catch((error) => {
        console.log(error)
    })
}

urlParams.get('id')? readPost() : allPosts()


/* 
artigos/paginas  = 20

pagina 1
comecar -> 20 *0
finalizar -> 20

pagina 2
comaçar -> 20 * 1
finalizar -> 40
    



*/
const url = 'https://api-burb.onrender.com/api'
const urlParams = new URLSearchParams(window.location.search)

const searchPackage = () => {
    alert(`${urlParams.get('id')}`)
}


urlParams.get('id') ? searchPackage() : window.location.href = '../index.html'

const url = 'https://api-burb.onrender.com/api'
const urlParams = new URLSearchParams(window.location.search)

const searchHotel = () => {
    alert(`${urlParams.get('id')}`)
}


urlParams.get('id') ? searchHotel() : window.location.href = '../index.html'
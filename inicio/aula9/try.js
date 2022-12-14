try{
    valor
}catch(err){
    console.error(err.message) // Mensagem do Error
    console.error(err.name) // Nome / Tipo do error
    console.error(err.stack) // Bloco de todo o erro
}finally{
    console.log('Boa noite!')
}
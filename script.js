//1 - crie uma função que exiba uma mensagem no console
function Message(){
    let welcome = "Feliz segunda-feira, seja bem-vindo!"
    console.log(welcome)
}

Message();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function Registration(name1){
    return(name1);
}

console.log(Registration("Thayssa"))

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function Meeting(name2, age, musical){
    console.log(`Nome: ${name2}, idade: ${age} anos, estilo musical preferido: ${musical}`)
}

console.log(Meeting('Thayssa', 26, 'pop'))

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function Favorites(movie, song){
    console.log(`Filme favorito: ${movie} e música favorita: ${song}`)
}

console.log(Favorites("V de vingança", "Wonderwall"))
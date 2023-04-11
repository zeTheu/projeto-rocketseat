function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Matheus dos Reis Fonseca, usando uma camisa preta, cabelo médio, barba rala e bordas desfocadas.')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar-dark.png')
        img.setAttribute('alt', 'Foto de Matheus dos Reis Fonseca, usando uma camisa de banda de rock cinza, cabelo longo, barba rala e bordas desfocadas.')
    }
}
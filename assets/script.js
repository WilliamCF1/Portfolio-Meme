function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    // if(html.classList.contains('light')){
    //   html.classList.remove('light')
    // } else{
    //   html.classList.add('light')
    // }
  
    // Mudar imagem com base na cor do fundo
  
    // pegar tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./foto1.webp")
    }
    // se tiver sem light mode, manter a imagem normal
    else {
      img.setAttribute("src", "./foto1.webp")
    }
  }
  
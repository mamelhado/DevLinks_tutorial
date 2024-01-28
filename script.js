function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    //se tiver lightmode user imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de mike brito sorrindo, usando óculos escuros e jaqueta, sem barba"
    )
  } else {
    //se não imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de mike brito sorrindo, usando óculos e jaqueta, sem barba"
    )
  }
}

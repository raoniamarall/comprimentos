function carregar() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("foto").querySelector("img"); // Seleciona a imagem dentro da div com o ID "foto"
  const data = new Date();
  let hora = data.getHours();

  if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Bom dia! Agora são ${hora} horas.`;
    img.src = "assets/manha.jpg";
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`;
    img.src = "assets/tarde.jpg";
  } else {
    msg.innerHTML = `Boa noite! Agora são ${hora} horas.`;
    img.src = "assets/noite.jpg";
  }
}

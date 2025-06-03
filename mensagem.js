const texto = "Oi, meu amor 💖\nHoje é um dia muito especial...\nO dia em que o mundo ficou mais bonito só porque você nasceu.\n\nTe amo demais! Feliz aniversário! 🎂";
const destino = document.getElementById("mensagem");
let index = 0;

function digitar() {
  if (index < texto.length) {
    destino.innerHTML += texto.charAt(index);
    index++;
    setTimeout(digitar, 50);
  }
}

digitar();

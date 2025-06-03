const botao = document.getElementById('abrirCarta');
const carta = document.getElementById('carta');

botao.addEventListener('click', () => {
  carta.classList.toggle('ativa');
  carta.scrollIntoView({ behavior: "smooth" });
});

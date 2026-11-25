// Se uma imagem não carregar: esconde a logo ou usa a imagem de processador no lugar
document.addEventListener("error", (e) => {
  const el = e.target;
  if (el.tagName !== "IMG" || el.dataset.falhou) return;
  el.dataset.falhou = "1";
  if (el.closest(".logo")) el.style.display = "none";
  else el.src = "imagens/processador.png";
}, true);

const svg = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONES = {
  busca: svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
  user: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>'),
  cart: svg('<path d="M3 4h3l2 12h10l2-8H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>'),
  heart: svg('<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z"/>'),
  filtro: svg('<path d="M4 5h16l-6 8v6l-4-2v-4z"/>'),
  seta: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
};

const logo = (grande) => `<a href="categorias.html" class="logo ${grande ? "logo--grande" : ""}"><img src="imagens/logo.png" alt=""><span>Monkey <b>Store</b></span></a>`;

document.getElementById("topo").innerHTML = `
  <div class="topo__in">
    ${logo()}
    <nav><a href="#">Início</a><a href="#">Produtos</a><a href="categorias.html">Categorias</a><a href="#">Ofertas</a><a href="#">Sobre nós</a><a href="#">Contato</a></nav>
    <form class="busca" action="processadores.html">
      <input name="q" placeholder="O que você está procurando?" aria-label="Buscar">
      <button aria-label="Buscar">${ICONES.busca}</button>
    </form>
    <div class="icones">
      <a href="#" aria-label="Conta">${ICONES.user}</a>
      <a href="#" class="carrinho" aria-label="Carrinho">${ICONES.cart}<i id="qtdCarrinho" hidden></i></a>
      <a href="#" aria-label="Favoritos">${ICONES.heart}</a>
    </div>
  </div>`;

document.getElementById("rodape").innerHTML = `
  <div class="rodape__in">
    <div>
      ${logo(true)}
      <p class="rodape__lema">Performance e qualidade<br>em cada peça.</p>
      <div class="redes"><a href="#" aria-label="Discord">D</a><a href="#" aria-label="Instagram">I</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="TikTok">T</a><a href="#" aria-label="YouTube">▶</a></div>
    </div>
    <form class="news" onsubmit="event.preventDefault(); this.reset(); alert('Obrigado por se inscrever!')">
      <h4>Receba nossas novidades</h4>
      <p>Fique por dentro das melhores<br>ofertas e lançamentos!</p>
      <div class="news__campo"><input type="email" required placeholder="Seu e-mail aqui..." aria-label="E-mail"><button aria-label="Inscrever">${ICONES.seta}</button></div>
    </form>
  </div>`;

function atualizaCarrinho() {
  const n = Number(localStorage.getItem("carrinho") || 0);
  const el = document.getElementById("qtdCarrinho");
  el.textContent = n;
  el.hidden = n === 0;
}
atualizaCarrinho();
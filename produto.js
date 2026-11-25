const id = Number(new URLSearchParams(location.search).get("id"));
const p = PRODUTOS.find((x) => x.id === id);
const raiz = document.getElementById("produto");
const crumb = document.getElementById("crumb");
const base = `<a href="categorias.html">Categorias</a> &gt; <a href="processadores.html">Processadores</a>`;

if (!p) {
  crumb.innerHTML = base;
  raiz.innerHTML = `<p class="vazio">Produto não encontrado. <a href="processadores.html">Voltar para processadores</a></p>`;
} else {
  const titulo = p.nome.replace("Processador ", "");
  document.title = `${titulo} | Monkey Store`;
  crumb.innerHTML = `${base} &gt; <strong>${titulo}</strong>`;

  const imgs = [`imagens/produtos/${p.slug}.png`, `imagens/produtos/${p.slug}-2.png`];
  const desconto = Math.round((1 - p.preco / p.antigo) * 100);
  const favs = () => JSON.parse(localStorage.getItem("favoritos") || "[]");

  raiz.innerHTML = `
    <div class="galeria">
      <div class="galeria__principal">
        <button class="seta seta--esq" id="ant" aria-label="Imagem anterior">${ICONES.esq}</button>
        <img id="imgGrande" src="${imgs[0]}" alt="${p.nome}">
        <button class="seta seta--dir" id="prox" aria-label="Próxima imagem">${ICONES.dir}</button>
      </div>
      <div class="miniaturas">
        ${imgs.map((src, i) => `<button class="mini" data-i="${i}" aria-label="Imagem ${i + 1}"><img src="${src}" alt=""></button>`).join("")}
      </div>
    </div>

    <div class="info">
      <div class="info__topo">
        <span class="selo">${p.marca.toUpperCase()}</span>
        <h1>${titulo}</h1>
        <div class="nota">
          <span class="estrelas" style="--n:${p.nota}" aria-hidden="true">★★★★★</span>
          <b>${String(p.nota).replace(".", ",")}</b>
          <small>(${p.aval} avaliações)</small>
        </div>
        <p class="preco">${brl(p.preco)}</p>
        <p class="antigo"><s>${brl(p.antigo)}</s> <span class="off">${desconto}% OFF</span></p>
      </div>

      <div class="info__meio">
        <hr>
        <div class="specs">
          <div class="spec">${ICONES.raio}<div><b>${p.nucleos} Núcleos</b><span>${p.threads} Threads</span></div></div>
          <div class="spec">${ICONES.gauge}<div><b>Até ${p.clock}</b></div></div>
        </div>
      </div>

      <div class="info__botoes">
        <button class="btn btn--cheio" id="addCarrinho">${ICONES.cart} Adicionar ao carrinho</button>
        <button class="btn btn--vazado" id="addFav"></button>
      </div>
    </div>`;

  // Galeria com animação de deslize
  const img = document.getElementById("imgGrande");
  const minis = document.querySelectorAll(".mini");
  const semAnimacao = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let atual = 0;
  let animando = false;

  const marca = () => minis.forEach((m, k) => m.classList.toggle("ativa", k === atual));

  const ir = (i, dir) => {
    i = (i + imgs.length) % imgs.length;
    if (i === atual || animando) return;
    if (semAnimacao) { atual = i; img.src = imgs[i]; marca(); return; }

    animando = true;
    const sai = img.animate(
      [{ transform: "translateX(0)", opacity: 1 }, { transform: `translateX(${-dir * 80}px)`, opacity: 0 }],
      { duration: 200, easing: "ease-in", fill: "forwards" }
    );
    sai.onfinish = () => {
      atual = i;
      img.src = imgs[i];
      marca();
      const entra = img.animate(
        [{ transform: `translateX(${dir * 80}px)`, opacity: 0 }, { transform: "translateX(0)", opacity: 1 }],
        { duration: 260, easing: "ease-out" }
      );
      sai.cancel();
      entra.onfinish = () => (animando = false);
    };
  };

  document.getElementById("ant").onclick = () => ir(atual - 1, -1);
  document.getElementById("prox").onclick = () => ir(atual + 1, 1);
  minis.forEach((m) => (m.onclick = () => { const i = Number(m.dataset.i); ir(i, i > atual ? 1 : -1); }));
  marca();

  // Carrinho (guarda a quantidade no navegador; ligue ao seu carrinho depois)
  const btnCarrinho = document.getElementById("addCarrinho");
  btnCarrinho.onclick = () => {
    localStorage.setItem("carrinho", Number(localStorage.getItem("carrinho") || 0) + 1);
    btnCarrinho.innerHTML = "Adicionado ✓";
    setTimeout(() => (btnCarrinho.innerHTML = `${ICONES.cart} Adicionar ao carrinho`), 1500);
  };

  // Favoritos
  const btnFav = document.getElementById("addFav");
  const pintaFav = () => {
    const fav = favs().includes(p.id);
    btnFav.innerHTML = `${ICONES.heart} ${fav ? "Remover dos favoritos" : "Adicionar aos favoritos"}`;
    btnFav.classList.toggle("ativo", fav);
  };
  btnFav.onclick = () => {
    const l = favs();
    localStorage.setItem("favoritos", JSON.stringify(l.includes(p.id) ? l.filter((x) => x !== p.id) : [...l, p.id]));
    pintaFav();
  };
  pintaFav();
}
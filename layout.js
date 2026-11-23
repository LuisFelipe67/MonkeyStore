function montarLayout() {
  const header = document.querySelector("#cabecalho");

  if (!header) return;

  header.innerHTML = `
    <a class="marca-loja" href="processadores.html">
      <span class="marca-simbolo">◈</span>
      <span>Monkey <b>Store</b></span>
    </a>

    <nav class="menu-principal">
      <a href="processadores.html">Início</a>
      <a href="processadores.html">Produtos</a>
      <a href="processadores.html">Categorias</a>
      <a href="processadores.html">Ofertas</a>
      <a href="#">Sobre nós</a>
      <a href="#">Contato</a>
    </nav>

    <div class="acoes-header">
      <label class="busca">
        <input
          id="busca-global"
          type="search"
          placeholder="O que você está procurando?"
        >
        <span>⌕</span>
      </label>

      <button class="icone-header">♙</button>
      <button class="icone-header" id="atalho-carrinho">
        🛒
        <i id="contador-carrinho">0</i>
      </button>
      <button class="icone-header">♡</button>
      <button class="menu-mobile" id="menu-mobile">☰</button>
    </div>
  `;

  const menu = header.querySelector(".menu-mobile");

  menu?.addEventListener("click", () => {
    header.classList.toggle("menu-aberto");
  });

  atualizarContadorCarrinho();

  document.querySelector("#atalho-carrinho")
    ?.addEventListener("click", () => {
      alert("Seu carrinho está salvo nesta demonstração.");
    });

  document.querySelector("#busca-global")
    ?.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        const termo = event.currentTarget.value.trim();

        if (termo) {
          location.href =
            `processadores.html?busca=${encodeURIComponent(termo)}`;
        }
      }
    });
}

function atualizarContadorCarrinho() {
  const contador = document.querySelector("#contador-carrinho");

  if (!contador) return;

  const carrinho = JSON.parse(
    localStorage.getItem("monkey-carrinho") || "[]"
  );

  contador.textContent = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );
}

function adicionarAoCarrinho(id) {
  const carrinho = JSON.parse(
    localStorage.getItem("monkey-carrinho") || "[]"
  );

  const item = carrinho.find(
    produto => produto.id === Number(id)
  );

  if (item) {
    item.quantidade += 1;
  } else {
    carrinho.push({
      id: Number(id),
      quantidade: 1
    });
  }

  localStorage.setItem(
    "monkey-carrinho",
    JSON.stringify(carrinho)
  );

  atualizarContadorCarrinho();

  alert("Produto adicionado ao carrinho!");
}

function alternarFavorito(id) {
  const favoritos = JSON.parse(
    localStorage.getItem("monkey-favoritos") || "[]"
  );

  const existe = favoritos.includes(Number(id));

  const atualizados = existe
    ? favoritos.filter(item => item !== Number(id))
    : [...favoritos, Number(id)];

  localStorage.setItem(
    "monkey-favoritos",
    JSON.stringify(atualizados)
  );

  return !existe;
}

document.addEventListener("DOMContentLoaded", montarLayout);
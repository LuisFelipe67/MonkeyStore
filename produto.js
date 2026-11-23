document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(location.search).get("id") || 9;

  const produto = obterProduto(id);

  const area = document.querySelector("#detalhe-produto");

  if (!area) return;

  if (!produto) {
    area.innerHTML = `
      <p class="sem-resultados">
        Produto não encontrado.
        <a href="processadores.html">Voltar à loja</a>
      </p>
    `;
    return;
  }

  document.querySelector("#breadcrumb-produto").innerHTML = `
    Categorias &gt;
    <a href="processadores.html">Processadores</a>
    &gt; ${produto.nome}
  `;

  area.innerHTML = `
    <div class="galeria-produto">

      <div class="imagem-destaque">

        <button class="seta-galeria esquerda">‹</button>

        <img
          id="imagem-principal"
          src="${produto.imagem}"
          alt="${produto.nome}"
        >

        <button class="seta-galeria direita">›</button>

      </div>

      <div class="miniaturas">

        <button class="miniatura selecionada">
          <img src="${produto.imagem}" alt="Imagem principal">
        </button>

        <button class="miniatura">
          <img src="${produto.imagem}" alt="Detalhe do produto">
        </button>

      </div>

    </div>

    <section class="informacoes-produto">

      <span class="etiqueta">${produto.marca}</span>

      <h1>${produto.nome}</h1>

      <div class="avaliacao">
        <span>★★★★★</span>
        <b>4.5</b>
        <small>(145 avaliações)</small>
      </div>

      <div class="preco-detalhe">
        ${formatarPreco(produto.preco)}
      </div>

      <div class="preco-antigo">
        ${formatarPreco(produto.precoAntigo)}
        <span>15% OFF</span>
      </div>

      <div class="linha-divisoria"></div>

      <div class="especificacoes">

        <div>
          <strong>ϟ</strong>
          <span>
            ${produto.nucleos} Núcleos<br>
            ${produto.threads} Threads
          </span>
        </div>

        <div>
          <strong>◉</strong>
          <span>
            Até ${produto.clock}<br>
            de frequência
          </span>
        </div>

      </div>

      <p class="descricao-detalhe">
        ${produto.descricao}
      </p>

      <button
        class="botao-principal botao-comprar"
        id="adicionar-carrinho"
      >
        🛒 Adicionar ao carrinho
      </button>

      <button
        class="botao-favorito"
        id="adicionar-favorito"
      >
        ♥ Adicionar aos favoritos
      </button>

      <p class="entrega">
        ✓ Produto disponível · Envio para todo o Brasil
      </p>

    </section>
  `;

  document.querySelector("#adicionar-carrinho")
    .addEventListener("click", () => {
      adicionarAoCarrinho(produto.id);
    });

  const favorito = document.querySelector("#adicionar-favorito");

  const favoritos = JSON.parse(
    localStorage.getItem("monkey-favoritos") || "[]"
  );

  if (favoritos.includes(produto.id)) {
    favorito.classList.add("ativo");
    favorito.textContent = "♥ Adicionado aos favoritos";
  }

  favorito.addEventListener("click", () => {
    const ativo = alternarFavorito(produto.id);

    favorito.classList.toggle("ativo", ativo);

    favorito.textContent = ativo
      ? "♥ Adicionado aos favoritos"
      : "♥ Adicionar aos favoritos";
  });

  document.querySelectorAll(".miniatura").forEach(miniatura => {
    miniatura.addEventListener("click", () => {
      document.querySelectorAll(".miniatura").forEach(m => {
        m.classList.remove("selecionada");
      });

      miniatura.classList.add("selecionada");
    });
  });
});
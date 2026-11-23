document.addEventListener("DOMContentLoaded", () => {
  const area = document.getElementById("detalhes-produto");
  if (!area) return;

  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get("id");
  const produto = obterProduto(id);

  if (!produto) {
    area.innerHTML = `
      <div class="produto-nao-encontrado">
        <h2>Produto não encontrado</h2>
        <p>Não foi possível localizar esse processador.</p>
        <a href="processadores.html" class="btn-carrinho">Voltar à loja</a>
      </div>
    `;
    return;
  }

  document.title = `${produto.nome} | Monkey Store`;

  area.innerHTML = `
    <div class="produto-imagem-detalhe">
      <span class="tag-destaque">Em destaque</span>
      <img src="${produto.imagem}" alt="${produto.nome}">
    </div>

    <div class="produto-info-detalhe">
      <span class="marca-produto">${produto.marca}</span>
      <h1>${produto.nome}</h1>

      <div class="avaliacao">
        <span>★</span> ${produto.avaliacao} (${produto.avaliacoes} avaliações)
      </div>

      <p class="descricao-curta">${produto.descricao}</p>

      <div class="recursos-produto">
        <div>
          <strong>${produto.nucleos}</strong>
          <span>Núcleos</span>
        </div>
        <div>
          <strong>${produto.threads}</strong>
          <span>Threads</span>
        </div>
        <div>
          <strong>${produto.turbo}</strong>
          <span>Turbo</span>
        </div>
      </div>

      <div class="preco-detalhe">
        <del>${formatarPreco(produto.precoAntigo)}</del>
        <strong>${formatarPreco(produto.preco)}</strong>
      </div>

      <p class="aviso-pagamento">Consulte as condições de pagamento disponíveis.</p>

      <button class="btn-carrinho btn-carrinho-detalhe"
        onclick="adicionarAoCarrinho(${produto.id})">
        🛒 Adicionar ao carrinho
      </button>

      <button class="btn-favorito-detalhe" id="favoritar-detalhe">
        ♡ Adicionar aos favoritos
      </button>
    </div>
  `;

  document.getElementById("descricao-produto").textContent = produto.descricao;

  document.getElementById("especificacoes-produto").innerHTML = `
    <div><span>Marca</span><strong>${produto.marca}</strong></div>
    <div><span>Modelo</span><strong>${produto.nome}</strong></div>
    <div><span>Linha</span><strong>${produto.linha}</strong></div>
    <div><span>Geração</span><strong>${produto.geracao}</strong></div>
    <div><span>Núcleos</span><strong>${produto.nucleos}</strong></div>
    <div><span>Threads</span><strong>${produto.threads}</strong></div>
    <div><span>Clock base</span><strong>${produto.clock}</strong></div>
    <div><span>Clock turbo</span><strong>${produto.turbo}</strong></div>
    <div><span>Socket</span><strong>${produto.socket}</strong></div>
  `;

  const botaoFavorito = document.getElementById("favoritar-detalhe");
  const favoritos = JSON.parse(localStorage.getItem("favoritosMonkey") || "[]");

  if (favoritos.includes(produto.id)) {
    botaoFavorito.textContent = "♥ Adicionado aos favoritos";
  }

  botaoFavorito.addEventListener("click", () => {
    const favoritado = alternarFavorito(produto.id);
    botaoFavorito.textContent = favoritado
      ? "♥ Adicionado aos favoritos"
      : "♡ Adicionar aos favoritos";
  });
});
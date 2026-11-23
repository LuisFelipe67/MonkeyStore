document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-produtos");
  if (!lista) return;

  const contador = document.getElementById("contador-produtos");
  const semProdutos = document.getElementById("sem-produtos");
  const filtroPreco = document.getElementById("filtro-preco");
  const valorPreco = document.getElementById("valor-preco");
  const ordenacao = document.getElementById("ordenacao");
  const limpar = document.getElementById("limpar-filtros");

  function valoresSelecionados(nome) {
    return [...document.querySelectorAll(`input[name="${nome}"]:checked`)]
      .map(input => input.value);
  }

  function renderizarProdutos() {
    const marcas = valoresSelecionados("marca");
    const linhas = valoresSelecionados("linha");
    const geracoes = valoresSelecionados("geracao");
    const precoMaximo = Number(filtroPreco.value);
    const parametros = new URLSearchParams(window.location.search);
    const busca = (parametros.get("busca") || "").toLowerCase();

    let filtrados = produtos.filter(produto => {
      const correspondeMarca = !marcas.length || marcas.includes(produto.marca);
      const correspondeLinha = !linhas.length || linhas.includes(produto.linha);
      const correspondeGeracao = !geracoes.length || geracoes.includes(produto.geracao);
      const correspondePreco = produto.preco <= precoMaximo;
      const correspondeBusca = !busca || produto.nome.toLowerCase().includes(busca);

      return correspondeMarca && correspondeLinha &&
        correspondeGeracao && correspondePreco && correspondeBusca;
    });

    switch (ordenacao.value) {
      case "menor-preco":
        filtrados.sort((a, b) => a.preco - b.preco);
        break;
      case "maior-preco":
        filtrados.sort((a, b) => b.preco - a.preco);
        break;
      case "nome":
        filtrados.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      default:
        filtrados.sort((a, b) => b.avaliacao - a.avaliacao);
    }

    contador.textContent = `Mostrando ${filtrados.length} de ${produtos.length} produtos`;
    semProdutos.hidden = filtrados.length !== 0;

    lista.innerHTML = filtrados.map(produto => {
      const favoritos = JSON.parse(localStorage.getItem("favoritosMonkey") || "[]");
      const favoritado = favoritos.includes(produto.id);

      return `
        <article class="card-produto">
          <div class="imagem-produto">
            <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
            <button class="btn-favorito ${favoritado ? "favoritado" : ""}"
              onclick="clicarFavorito(${produto.id}, this)" aria-label="Favoritar produto">
              ${favoritado ? "♥" : "♡"}
            </button>
          </div>

          <div class="informacoes-produto">
            <span class="marca-produto">${produto.marca}</span>
            <a class="nome-produto" href="produto.html?id=${produto.id}">
              ${produto.nome}
            </a>

            <p class="especificacoes-resumo">
              ${produto.nucleos} núcleos • ${produto.threads} threads • ${produto.turbo}
            </p>

            <div class="avaliacao">
              <span>★</span> ${produto.avaliacao} (${produto.avaliacoes} avaliações)
            </div>

            <div class="preco-produto">
              <del>${formatarPreco(produto.precoAntigo)}</del>
              <strong>${formatarPreco(produto.preco)}</strong>
            </div>

            <button class="btn-carrinho" onclick="adicionarAoCarrinho(${produto.id})">
              🛒 Adicionar ao carrinho
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  window.clicarFavorito = function(id, botao) {
    const favoritado = alternarFavorito(id);
    botao.textContent = favoritado ? "♥" : "♡";
    botao.classList.toggle("favoritado", favoritado);
  };

  document.querySelectorAll(".grupo-filtro input").forEach(input => {
    input.addEventListener("change", renderizarProdutos);
  });

  filtroPreco.addEventListener("input", () => {
    valorPreco.textContent = formatarPreco(Number(filtroPreco.value));
    renderizarProdutos();
  });

  ordenacao.addEventListener("change", renderizarProdutos);

  limpar.addEventListener("click", () => {
    document.querySelectorAll(".grupo-filtro input").forEach(input => {
      input.checked = false;
    });

    filtroPreco.value = 4000;
    valorPreco.textContent = formatarPreco(4000);
    ordenacao.value = "popular";
    renderizarProdutos();
  });

  valorPreco.textContent = formatarPreco(4000);
  renderizarProdutos();
});
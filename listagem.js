document.addEventListener("DOMContentLoaded", () => {
  const grade = document.querySelector("#grade-produtos");

  if (!grade) return;

  const params = new URLSearchParams(location.search);
  const buscaInicial = params.get("busca") || "";

  const campoBusca = document.querySelector("#busca-produtos");

  if (campoBusca) {
    campoBusca.value = buscaInicial;
  }

  const filtros = {
    marcas: [...document.querySelectorAll("[name='marca']")],
    geracoes: [...document.querySelectorAll("[name='geracao']")],
    precos: [...document.querySelectorAll("[name='preco']")]
  };

  function renderizar() {
    const termo = (campoBusca?.value || "")
      .toLowerCase()
      .trim();

    const marcasAtivas = filtros.marcas
      .filter(el => el.checked)
      .map(el => el.value);

    const geracoesAtivas = filtros.geracoes
      .filter(el => el.checked)
      .map(el => el.value);

    const precoAtivo =
      filtros.precos.find(el => el.checked)?.value || "todos";

    const ordem = document.querySelector("#ordenar")?.value || "popular";

    let lista = produtos.filter(p => {
      const combinaBusca =
        `${p.nome} ${p.marca} ${p.geracao}`
          .toLowerCase()
          .includes(termo);

      const combinaMarca =
        !marcasAtivas.length || marcasAtivas.includes(p.marca);

      const combinaGeracao =
        !geracoesAtivas.length || geracoesAtivas.includes(p.geracao);

      let combinaPreco = true;

      if (precoAtivo === "0-1000") {
        combinaPreco = p.preco <= 1000;
      }

      if (precoAtivo === "1000-2000") {
        combinaPreco = p.preco > 1000 && p.preco <= 2000;
      }

      if (precoAtivo === "2000-4000") {
        combinaPreco = p.preco > 2000 && p.preco <= 4000;
      }

      if (precoAtivo === "4000+") {
        combinaPreco = p.preco > 4000;
      }

      return combinaBusca &&
        combinaMarca &&
        combinaGeracao &&
        combinaPreco;
    });

    if (ordem === "menor") {
      lista.sort((a, b) => a.preco - b.preco);
    }

    if (ordem === "maior") {
      lista.sort((a, b) => b.preco - a.preco);
    }

    if (ordem === "nome") {
      lista.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    document.querySelector("#quantidade-resultados").textContent =
      `Mostrando ${lista.length} de ${produtos.length}`;

    grade.innerHTML = lista.length
      ? lista.map(p => `
        <article class="produto-card">

          <button
            class="card-favorito"
            data-favorito="${p.id}"
            aria-label="Favoritar"
          >♡</button>

          <a class="imagem-card" href="produto.html?id=${p.id}">
            <img src="${p.imagem}" alt="${p.nome}" loading="lazy">
          </a>

          <a class="nome-card" href="produto.html?id=${p.id}">
            ${p.nome}
          </a>

          <p class="descricao-card">
            Potência e performance<br>
            para o seu setup.
          </p>

          <div class="preco-card">
            ${formatarPreco(p.preco)}
          </div>

          <button
            class="botao-principal botao-card"
            data-ver="${p.id}"
          >
            Ver produto <span>→</span>
          </button>

        </article>
      `).join("")
      : `
        <p class="sem-resultados">
          Nenhum processador encontrado.
          Tente mudar os filtros.
        </p>
      `;

    grade.querySelectorAll("[data-ver]").forEach(botao => {
      botao.addEventListener("click", () => {
        location.href = `produto.html?id=${botao.dataset.ver}`;
      });
    });

    grade.querySelectorAll("[data-favorito]").forEach(botao => {
      botao.addEventListener("click", () => {
        const ativo = alternarFavorito(botao.dataset.favorito);
        botao.classList.toggle("ativo", ativo);
      });
    });
  }

  [
    ...filtros.marcas,
    ...filtros.geracoes,
    ...filtros.precos
  ].forEach(el => {
    el.addEventListener("change", renderizar);
  });

  campoBusca?.addEventListener("input", renderizar);

  document.querySelector("#ordenar")
    ?.addEventListener("change", renderizar);

  document.querySelector("#limpar-filtros")
    ?.addEventListener("click", () => {
      [
        ...filtros.marcas,
        ...filtros.geracoes,
        ...filtros.precos
      ].forEach(el => el.checked = false);

      if (campoBusca) campoBusca.value = "";

      renderizar();
    });

  renderizar();
});
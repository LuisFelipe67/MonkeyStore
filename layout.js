document.addEventListener("DOMContentLoaded", () => {
  const cabecalho = document.getElementById("cabecalho");
  const rodape = document.getElementById("rodape");

  if (cabecalho) {
    cabecalho.innerHTML = `
      <header class="header">
        <div class="header-conteudo">
          <a href="processadores.html" class="logo">
            <span class="logo-simbolo">M</span>
            <span>Monkey <strong>Store</strong></span>
          </a>

          <nav class="navegacao">
            <a href="processadores.html">Início</a>
            <a href="processadores.html">Produtos</a>
            <a href="processadores.html">Categorias</a>
            <a href="processadores.html">Ofertas</a>
            <a href="processadores.html">Sobre nós</a>
            <a href="processadores.html">Contato</a>
          </nav>

          <div class="acoes-header">
            <input type="search" id="busca-header" placeholder="O que você está procurando?">
            <a href="#" aria-label="Favoritos">♡</a>
            <a href="#" aria-label="Carrinho">🛒 <span id="quantidade-carrinho">0</span></a>
          </div>
        </div>
      </header>
    `;
  }

  if (rodape) {
    rodape.innerHTML = `
      <footer class="rodape">
        <div class="rodape-conteudo">
          <a href="processadores.html" class="logo">
            <span class="logo-simbolo">M</span>
            <span>Monkey <strong>Store</strong></span>
          </a>

          <div class="links-rodape">
            <a href="#">Políticas</a>
            <a href="#">Atendimento</a>
            <a href="#">Termos de uso</a>
            <a href="#">Privacidade</a>
          </div>
        </div>

        <div class="rodape-final">
          <span>© 2025 Monkey Store. Todos os direitos reservados.</span>
          <strong>Monte. Jogue. Evolua.</strong>
        </div>
      </footer>
    `;
  }

  atualizarCarrinho();

  const busca = document.getElementById("busca-header");
  if (busca) {
    busca.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        const termo = busca.value.trim();
        if (termo) {
          window.location.href = `processadores.html?busca=${encodeURIComponent(termo)}`;
        }
      }
    });
  }
});

function atualizarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinhoMonkey") || "[]");
  const quantidade = carrinho.reduce((total, item) => total + item.quantidade, 0);
  const elemento = document.getElementById("quantidade-carrinho");

  if (elemento) elemento.textContent = quantidade;
}

function adicionarAoCarrinho(id) {
  const carrinho = JSON.parse(localStorage.getItem("carrinhoMonkey") || "[]");
  const item = carrinho.find(produto => produto.id === Number(id));

  if (item) {
    item.quantidade++;
  } else {
    carrinho.push({ id: Number(id), quantidade: 1 });
  }

  localStorage.setItem("carrinhoMonkey", JSON.stringify(carrinho));
  atualizarCarrinho();
  alert("Produto adicionado ao carrinho!");
}

function alternarFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem("favoritosMonkey") || "[]");
  const indice = favoritos.indexOf(Number(id));

  if (indice >= 0) {
    favoritos.splice(indice, 1);
  } else {
    favoritos.push(Number(id));
  }

  localStorage.setItem("favoritosMonkey", JSON.stringify(favoritos));
  return favoritos.includes(Number(id));
}
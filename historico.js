document.addEventListener("DOMContentLoaded", () => {

  const lista = document.getElementById("lista-pedidos");

  const pedidos = [
    {
      numero: "#5847",
      data: "10 de Nov. de 2026",
      pagamento: "Pix",
      status: "Entregue",
      classe: "entregue",
      valor: "928,05",
      botao: "Ver rastreamento",

      produtos: [
        {
          nome: "Placa de vídeo GT 730",
          quantidade: "1 unidade",
          imagem: "🎮"
        },
        {
          nome: "Mouse Logitech G Pro X",
          quantidade: "1 unidade",
          imagem: "🖱️"
        }
      ],

      entrega: "Pedido entregue ao destinatário.",
      codigo: "MS58470001"
    },

    {
      numero: "#5620",
      data: "22 de Out. de 2026",
      pagamento: "Pix",
      status: "Em preparação",
      classe: "preparacao",
      valor: "1.399,80",
      botao: "Acompanhar pedido",

      produtos: [
        {
          nome: "Processador Ryzen 5 5600GT",
          quantidade: "1 unidade",
          imagem: "🖥️"
        },
        {
          nome: "Placa-mãe A520 Gigabyte",
          quantidade: "1 unidade",
          imagem: "💻"
        }
      ],

      entrega: "Seu pedido está sendo preparado para envio.",
      codigo: "MS56200002"
    },

    {
      numero: "#5483",
      data: "05 de Out. de 2026",
      pagamento: "Pix",
      status: "Em trânsito",
      classe: "transito",
      valor: "586,90",
      botao: "Ver rastreamento",

      produtos: [
        {
          nome: "Headset Gamer Sem Fio",
          quantidade: "1 unidade",
          imagem: "🎧"
        },
        {
          nome: "Teclado Magnético Fun Full Black Layout 60%",
          quantidade: "1 unidade",
          imagem: "⌨️"
        }
      ],

      entrega: "Seu pedido está a caminho do endereço informado.",
      codigo: "MS54830003"
    },

    {
      numero: "#5620",
      data: "18 de Set. de 2026",
      pagamento: "Pix",
      status: "Cancelado",
      classe: "cancelado",
      valor: "329,90",
      botao: "Ver detalhes",

      produtos: [
        {
          nome: "Gabinete Gamer Kalkan Asgard, Mid Tower, ATX, KKL00040.",
          quantidade: "1 unidade",
          imagem: "🖥️"
        }
      ],

      entrega: "Este pedido foi cancelado.",
      codigo: "MS56200004"
    }
  ];

  function criarProduto(produto) {
    return `
      <div class="pedido__produto">
        <div class="pedido__imagem">${produto.imagem}</div>

        <div class="pedido__produto-info">
          <h3>${produto.nome}</h3>
          <p>${produto.quantidade}</p>
        </div>
      </div>
    `;
  }

  function criarPedido(pedido, indice) {

    const produtosHTML = pedido.produtos
      .map(criarProduto)
      .join("");

    const icones = {
      entregue: "✓",
      preparacao: "▣",
      transito: "↗",
      cancelado: "×"
    };

    return `
      <article class="pedido">

        <div class="pedido__topo">

          <div class="pedido__identificacao">
            <h2>Pedido ${pedido.numero}</h2>

            <div class="pedido__dados">
              <span class="pedido__dado">
                ▣ ${pedido.data}
              </span>

              <span class="pedido__dado">
                ▤ ${pedido.pagamento}
              </span>
            </div>
          </div>

          <div class="pedido__status-area">

            <span class="pedido__status status--${pedido.classe}">
              ${icones[pedido.classe]} ${pedido.status}
            </span>

            <button
              class="pedido__detalhes-btn"
              data-acao="detalhes"
              data-indice="${indice}"
            >
              Ver detalhes ›
            </button>

          </div>

        </div>

        <div class="pedido__conteudo">

          <div class="pedido__produtos">
            ${produtosHTML}
          </div>

          <div class="pedido__divisor"></div>

          <div class="pedido__resumo">

            <small>Total do pedido</small>

            <span class="pedido__valor">
              R$ ${pedido.valor}
            </span>

            <button
              class="pedido__rastreio"
              data-acao="rastreio"
              data-indice="${indice}"
            >
              ${pedido.botao} ›
            </button>

          </div>

        </div>

        <div class="pedido__extra" id="extra-${indice}">

          <h3>Informações do pedido</h3>

          <p>
            <strong>Número:</strong> ${pedido.numero}
          </p>

          <p>
            <strong>Pagamento:</strong> ${pedido.pagamento}
          </p>

          <p>
            <strong>Status:</strong> ${pedido.status}
          </p>

          <p>
            <strong>Atualização:</strong> ${pedido.entrega}
          </p>

          <p>
            <strong>Código do pedido:</strong> ${pedido.codigo}
          </p>

        </div>

      </article>
    `;
  }

  function renderizarPedidos() {
    lista.innerHTML = pedidos.map(criarPedido).join("");
  }

  lista.addEventListener("click", (evento) => {

    const botao = evento.target.closest("button[data-acao]");

    if (!botao) return;

    const indice = botao.dataset.indice;
    const acao = botao.dataset.acao;

    const painel = document.getElementById(`extra-${indice}`);

    if (acao === "detalhes") {
      painel.classList.toggle("aberto");

      botao.textContent = painel.classList.contains("aberto")
        ? "Fechar detalhes ↑"
        : "Ver detalhes ›";
    }

    if (acao === "rastreio") {
      painel.classList.toggle("aberto");

      botao.textContent = painel.classList.contains("aberto")
        ? "Fechar rastreamento ↑"
        : pedidos[indice].botao + " ›";
    }

  });

  renderizarPedidos();

});
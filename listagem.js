const $ = (s) => document.querySelector(s);
const FAIXAS = [[0, 1000], [1000, 2000], [2000, 4000], [4000, Infinity]];
const GERACOES = ["12ª geração", "13ª geração", "14ª geração", "Ryzen 5000", "Ryzen 7000", "Ryzen 9000"];
const busca = (new URLSearchParams(location.search).get("q") || "").toLowerCase();

$("#ico-filtro").insertAdjacentHTML("afterbegin", ICONES.filtro);

// Monta os checkboxes de marca e geração com a contagem de produtos
const conta = (campo, valor) => PRODUTOS.filter((p) => p[campo] === valor).length;
const marcas = [...new Set(PRODUTOS.map((p) => p.marca))];
$("#f-marca").insertAdjacentHTML("beforeend", marcas.map((m) =>
  `<label><input type="checkbox" name="marca" value="${m}"> ${m} <small>(${conta("marca", m)})</small></label>`).join(""));
$("#f-geracao").insertAdjacentHTML("beforeend", GERACOES.map((g) =>
  `<label><input type="checkbox" name="geracao" value="${g}"> ${g}</label>`).join(""));

const marcados = (nome) => [...document.querySelectorAll(`input[name="${nome}"]:checked`)].map((i) => i.value);

function filtrar() {
  const faixas = marcados("faixa").map((i) => FAIXAS[i]);
  const ms = marcados("marca");
  const gs = marcados("geracao");
  const min = parseFloat($("#min").value) || 0;
  const max = parseFloat($("#max").value) || Infinity;

  const lista = PRODUTOS.filter((p) =>
    (!busca || p.nome.toLowerCase().includes(busca)) &&
    p.preco >= min && p.preco <= max &&
    (!faixas.length || faixas.some(([a, b]) => p.preco >= a && p.preco < b)) &&
    (!ms.length || ms.includes(p.marca)) &&
    (!gs.length || gs.includes(p.geracao)));

  const ordem = $("#ordem").value;
  lista.sort((a, b) =>
    ordem === "menor" ? a.preco - b.preco :
    ordem === "maior" ? b.preco - a.preco :
    ordem === "nome" ? a.nome.localeCompare(b.nome) : b.pop - a.pop);

  $("#contagem").textContent = `Mostrando ${lista.length} de ${PRODUTOS.length}`;
  $("#grade").innerHTML = lista.length ? lista.map((p) => `
    <a class="pcard" href="produto.html?id=${p.id}">
      <img src="imagens/produtos/${p.slug}.png" alt="${p.nome}" loading="lazy">
      <h3>${p.nome}</h3>
      <p>Potência e performance<br>para o seu setup.</p>
      <span class="btn btn--mini">Ver produto ${ICONES.seta}</span>
    </a>`).join("") : `<p class="vazio">Nenhum produto encontrado com esses filtros.</p>`;
}

$("#filtros").addEventListener("input", filtrar);
$("#filtros").addEventListener("reset", () => setTimeout(filtrar));
$("#ordem").addEventListener("change", filtrar);
filtrar();
// Se uma imagem não carregar, usa o processador.png no lugar
document.addEventListener("error", (e) => {
  const el = e.target;
  if (el.tagName !== "IMG" || el.dataset.falhou) return;
  el.dataset.falhou = "1";
  el.src = "imagens/processador.png";
}, true);

// Ícones (SVG)
const svg = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONES = {
  cart: svg('<path d="M3 4h3l2 12h10l2-8H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>'),
  heart: svg('<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-3 4.5 4.5 0 018 3c0 6-8 11-8 11z"/>'),
  filtro: svg('<path d="M4 5h16l-6 8v6l-4-2v-4z"/>'),
  seta: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  esq: svg('<path d="M15 5l-7 7 7 7"/>'),
  dir: svg('<path d="M9 5l7 7-7 7"/>'),
  raio: svg('<path d="M13 2L4 14h7l-1 8 9-12h-7z" fill="currentColor"/>'),
  gauge: svg('<path d="M4 18a9 9 0 1116 0"/><path d="M12 14l4-5"/><circle cx="12" cy="14" r="1.2" fill="currentColor"/>'),
};

// Preços e dados técnicos são exemplos: troque pelos reais (ou por uma API).
// Imagens: imagens/produtos/<slug>.png e imagens/produtos/<slug>-2.png
// Colunas: slug, nome, marca, geração, preço, preço antigo, núcleos, threads, GHz, nota, avaliações, popularidade
const DADOS = [
  ["ryzen-5-5600gt", "Processador Ryzen 5 5600GT", "AMD", "Ryzen 5000", 899.9, 1099.9, 6, 12, 4.6, 4.6, 210, 80],
  ["ryzen-7-9800x3d", "Processador Ryzen 9800X3D", "AMD", "Ryzen 9000", 3899.9, 4299.9, 8, 16, 5.2, 4.9, 540, 100],
  ["i5-12400f", "Processador Intel i5-12400F", "Intel", "12ª geração", 749.9, 899.9, 6, 12, 4.4, 4.7, 980, 95],
  ["ryzen-7-5700x", "Processador Ryzen 7 5700X", "AMD", "Ryzen 5000", 1199.9, 1399.9, 8, 16, 4.6, 4.8, 620, 90],
  ["i5-14600kf", "Processador Intel i5-14600KF", "Intel", "14ª geração", 1749.9, 1999.9, 14, 20, 5.3, 4.7, 330, 85],
  ["ultra-5-245kf", "Processador Intel Ultra 5 245KF 3.6 Ghz", "Intel", "", 1899.9, 2099.9, 14, 14, 5.2, 4.5, 90, 60],
  ["ryzen-5-9600x", "Processador Ryzen 5 9600X", "AMD", "Ryzen 9000", 1599.9, 1799.9, 6, 12, 5.4, 4.7, 275, 88],
  ["ryzen-9-9950x3d", "Processador Ryzen 9 9950X3D", "AMD", "Ryzen 9000", 5999.9, 6499.9, 16, 32, 5.7, 4.9, 120, 70],
  ["i9-14900k", "Intel Core i9-14900K", "Intel", "14ª geração", 2786.99, 3240.99, 24, 32, 6.0, 4.5, 345, 92],

  ["ryzen-5-5500", "Processador Ryzen 5 5500", "AMD", "Ryzen 5000", 619.9, 749.9, 6, 12, 4.2, 4.5, 760, 78],
  ["ryzen-5-5600", "Processador Ryzen 5 5600", "AMD", "Ryzen 5000", 749.9, 899.9, 6, 12, 4.4, 4.7, 1120, 94],
  ["ryzen-5-5600x", "Processador Ryzen 5 5600X", "AMD", "Ryzen 5000", 849.9, 999.9, 6, 12, 4.6, 4.7, 890, 89],
  ["ryzen-7-5800x3d", "Processador Ryzen 7 5800X3D", "AMD", "Ryzen 5000", 1899.9, 2199.9, 8, 16, 4.5, 4.9, 430, 82],
  ["ryzen-9-5900x", "Processador Ryzen 9 5900X", "AMD", "Ryzen 5000", 1699.9, 1999.9, 12, 24, 4.8, 4.8, 310, 66],
  ["ryzen-5-7500f", "Processador Ryzen 5 7500F", "AMD", "Ryzen 7000", 1049.9, 1249.9, 6, 12, 5.0, 4.7, 650, 86],
  ["ryzen-5-7600", "Processador Ryzen 5 7600", "AMD", "Ryzen 7000", 1199.9, 1399.9, 6, 12, 5.1, 4.8, 480, 84],
  ["ryzen-7-7700", "Processador Ryzen 7 7700", "AMD", "Ryzen 7000", 1799.9, 2049.9, 8, 16, 5.3, 4.8, 260, 72],
  ["ryzen-7-7800x3d", "Processador Ryzen 7 7800X3D", "AMD", "Ryzen 7000", 2799.9, 3199.9, 8, 16, 5.0, 4.9, 710, 97],
  ["ryzen-9-7900x", "Processador Ryzen 9 7900X", "AMD", "Ryzen 7000", 2399.9, 2799.9, 12, 24, 5.6, 4.7, 190, 64],
  ["ryzen-9-7950x", "Processador Ryzen 9 7950X", "AMD", "Ryzen 7000", 3399.9, 3899.9, 16, 32, 5.7, 4.8, 150, 61],
  ["ryzen-7-9700x", "Processador Ryzen 7 9700X", "AMD", "Ryzen 9000", 2399.9, 2699.9, 8, 16, 5.5, 4.8, 340, 87],
  ["ryzen-9-9900x", "Processador Ryzen 9 9900X", "AMD", "Ryzen 9000", 3199.9, 3599.9, 12, 24, 5.6, 4.7, 140, 63],
  ["i3-12100f", "Processador Intel i3-12100F", "Intel", "12ª geração", 429.9, 519.9, 4, 8, 4.3, 4.6, 1500, 91],
  ["i5-12400", "Processador Intel i5-12400", "Intel", "12ª geração", 799.9, 949.9, 6, 12, 4.4, 4.6, 420, 74],
  ["i5-12600kf", "Processador Intel i5-12600KF", "Intel", "12ª geração", 1099.9, 1299.9, 10, 16, 4.9, 4.7, 360, 77],
  ["i7-12700kf", "Processador Intel i7-12700KF", "Intel", "12ª geração", 1499.9, 1749.9, 12, 20, 5.0, 4.7, 210, 68],
  ["i9-12900k", "Processador Intel i9-12900K", "Intel", "12ª geração", 1999.9, 2399.9, 16, 24, 5.2, 4.6, 160, 58],
  ["i3-13100f", "Processador Intel i3-13100F", "Intel", "13ª geração", 549.9, 649.9, 4, 8, 4.5, 4.6, 540, 79],
  ["i5-13400f", "Processador Intel i5-13400F", "Intel", "13ª geração", 1099.9, 1249.9, 10, 16, 4.6, 4.7, 780, 83],
  ["i5-13600k", "Processador Intel i5-13600K", "Intel", "13ª geração", 1799.9, 2099.9, 14, 20, 5.1, 4.8, 520, 81],
  ["i7-13700k", "Processador Intel i7-13700K", "Intel", "13ª geração", 2399.9, 2799.9, 16, 24, 5.4, 4.8, 300, 73],
  ["i9-13900k", "Processador Intel i9-13900K", "Intel", "13ª geração", 3199.9, 3699.9, 24, 32, 5.8, 4.7, 220, 67],
  ["i3-14100f", "Processador Intel i3-14100F", "Intel", "14ª geração", 599.9, 699.9, 4, 8, 4.7, 4.6, 280, 69],
  ["i5-14400f", "Processador Intel i5-14400F", "Intel", "14ª geração", 1299.9, 1499.9, 10, 16, 4.7, 4.7, 410, 76],
  ["i7-14700k", "Processador Intel i7-14700K", "Intel", "14ª geração", 2899.9, 3299.9, 20, 28, 5.6, 4.8, 390, 85],
];

const PRODUTOS = DADOS.map(([slug, nome, marca, geracao, preco, antigo, nucleos, threads, ghz, nota, aval, pop], i) => ({
  id: i + 1, slug, nome, marca, geracao, preco, antigo, nucleos, threads, clock: `${ghz.toFixed(1)} GHz`, nota, aval, pop,
}));

const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
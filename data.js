const produtos = [
  {
    id: 1, nome: "Intel Core i5-12400F", marca: "Intel", linha: "Intel Core",
    geracao: "12ª Geração", preco: 749.90, precoAntigo: 899.90,
    nucleos: 6, threads: 12, clock: "2.5 GHz", turbo: "4.4 GHz",
    socket: "LGA 1700", avaliacao: 4.8, avaliacoes: 562,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i5 de 12ª geração, indicado para jogos e multitarefas."
  },
  {
    id: 2, nome: "AMD Ryzen 7 5700X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 1299.90, precoAntigo: 1499.90,
    nucleos: 8, threads: 16, clock: "3.4 GHz", turbo: "4.6 GHz",
    socket: "AM4", avaliacao: 4.9, avaliacoes: 378,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador AMD Ryzen 7 com ótimo desempenho para jogos e produtividade."
  },
  {
    id: 3, nome: "Intel Core i7-13700F", marca: "Intel", linha: "Intel Core",
    geracao: "13ª Geração", preco: 1999.90, precoAntigo: 2199.90,
    nucleos: 16, threads: 24, clock: "2.1 GHz", turbo: "5.2 GHz",
    socket: "LGA 1700", avaliacao: 4.8, avaliacoes: 294,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i7 de 13ª geração para alto desempenho."
  },
  {
    id: 4, nome: "AMD Ryzen 5 7600", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 7000", preco: 1099.90, precoAntigo: 1299.90,
    nucleos: 6, threads: 12, clock: "3.8 GHz", turbo: "5.1 GHz",
    socket: "AM5", avaliacao: 4.7, avaliacoes: 256,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador AMD Ryzen 5 da série 7000, com arquitetura moderna."
  },
  {
    id: 5, nome: "Intel Core i9-13900K", marca: "Intel", linha: "Intel Core",
    geracao: "13ª Geração", preco: 3499.90, precoAntigo: 3799.90,
    nucleos: 24, threads: 32, clock: "3.0 GHz", turbo: "5.8 GHz",
    socket: "LGA 1700", avaliacao: 4.9, avaliacoes: 312,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i9 desenvolvido para tarefas exigentes."
  },
  {
    id: 6, nome: "AMD Ryzen 9 7950X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 7000", preco: 3299.90, precoAntigo: 3599.90,
    nucleos: 16, threads: 32, clock: "4.5 GHz", turbo: "5.7 GHz",
    socket: "AM5", avaliacao: 4.9, avaliacoes: 176,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador AMD Ryzen 9 de alto desempenho para criação e jogos."
  },
  {
    id: 7, nome: "AMD Ryzen 5 5600", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 739.90, precoAntigo: 849.90,
    nucleos: 6, threads: 12, clock: "3.5 GHz", turbo: "4.4 GHz",
    socket: "AM4", avaliacao: 4.8, avaliacoes: 892,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 5 com excelente custo-benefício para jogos."
  },
  {
    id: 8, nome: "Intel Core i5-13600K", marca: "Intel", linha: "Intel Core",
    geracao: "13ª Geração", preco: 1799.90, precoAntigo: 1999.90,
    nucleos: 14, threads: 20, clock: "3.5 GHz", turbo: "5.1 GHz",
    socket: "LGA 1700", avaliacao: 4.8, avaliacoes: 198,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i5 desbloqueado para alto desempenho."
  },
  {
    id: 9, nome: "AMD Ryzen 9 7900X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 7000", preco: 2499.90, precoAntigo: 2799.90,
    nucleos: 12, threads: 24, clock: "4.7 GHz", turbo: "5.6 GHz",
    socket: "AM5", avaliacao: 4.9, avaliacoes: 187,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 9 para jogos, edição e tarefas profissionais."
  },
  {
    id: 10, nome: "AMD Ryzen 7 7800X3D", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 7000", preco: 2299.90, precoAntigo: 2599.90,
    nucleos: 8, threads: 16, clock: "4.2 GHz", turbo: "5.0 GHz",
    socket: "AM5", avaliacao: 4.9, avaliacoes: 427,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen com tecnologia 3D V-Cache, voltado especialmente para jogos."
  },
  {
    id: 11, nome: "Intel Core i7-12700F", marca: "Intel", linha: "Intel Core",
    geracao: "12ª Geração", preco: 1399.90, precoAntigo: 1599.90,
    nucleos: 12, threads: 20, clock: "2.1 GHz", turbo: "4.9 GHz",
    socket: "LGA 1700", avaliacao: 4.6, avaliacoes: 231,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i7 para jogos e produtividade."
  },
  {
    id: 12, nome: "Intel Core Ultra 7 265K", marca: "Intel", linha: "Intel Core Ultra",
    geracao: "Core Ultra", preco: 2799.90, precoAntigo: 2999.90,
    nucleos: 20, threads: 20, clock: "3.3 GHz", turbo: "5.5 GHz",
    socket: "LGA 1851", avaliacao: 4.8, avaliacoes: 142,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core Ultra de nova geração para alto desempenho."
  },
  {
    id: 13, nome: "Intel Core i3-12100F", marca: "Intel", linha: "Intel Core",
    geracao: "12ª Geração", preco: 499.90, precoAntigo: 579.90,
    nucleos: 4, threads: 8, clock: "3.3 GHz", turbo: "4.3 GHz",
    socket: "LGA 1700", avaliacao: 4.7, avaliacoes: 185,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador de entrada para computadores domésticos e jogos."
  },
  {
    id: 14, nome: "Intel Core i5-12600KF", marca: "Intel", linha: "Intel Core",
    geracao: "12ª Geração", preco: 1099.90, precoAntigo: 1249.90,
    nucleos: 10, threads: 16, clock: "3.7 GHz", turbo: "4.9 GHz",
    socket: "LGA 1700", avaliacao: 4.8, avaliacoes: 167,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i5 desbloqueado para configurações gamer."
  },
  {
    id: 15, nome: "Intel Core i7-12700KF", marca: "Intel", linha: "Intel Core",
    geracao: "12ª Geração", preco: 1499.90, precoAntigo: 1699.90,
    nucleos: 12, threads: 20, clock: "3.6 GHz", turbo: "5.0 GHz",
    socket: "LGA 1700", avaliacao: 4.7, avaliacoes: 142,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i7 desbloqueado para alto desempenho."
  },
  {
    id: 16, nome: "Intel Core i9-12900K", marca: "Intel", linha: "Intel Core",
    geracao: "12ª Geração", preco: 2199.90, precoAntigo: 2399.90,
    nucleos: 16, threads: 24, clock: "3.2 GHz", turbo: "5.2 GHz",
    socket: "LGA 1700", avaliacao: 4.8, avaliacoes: 206,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i9 para aplicações pesadas."
  },
  {
    id: 17, nome: "Intel Core i5-13400F", marca: "Intel", linha: "Intel Core",
    geracao: "13ª Geração", preco: 999.90, precoAntigo: 1149.90,
    nucleos: 10, threads: 16, clock: "2.5 GHz", turbo: "4.6 GHz",
    socket: "LGA 1700", avaliacao: 4.8, avaliacoes: 194,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i5 de 13ª geração para jogos e tarefas diárias."
  },
  {
    id: 18, nome: "Intel Core i7-13700K", marca: "Intel", linha: "Intel Core",
    geracao: "13ª Geração", preco: 2299.90, precoAntigo: 2499.90,
    nucleos: 16, threads: 24, clock: "3.4 GHz", turbo: "5.4 GHz",
    socket: "LGA 1700", avaliacao: 4.9, avaliacoes: 211,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i7 desbloqueado de 13ª geração."
  },
  {
    id: 19, nome: "Intel Core i9-13900KF", marca: "Intel", linha: "Intel Core",
    geracao: "13ª Geração", preco: 2999.90, precoAntigo: 3299.90,
    nucleos: 24, threads: 32, clock: "3.0 GHz", turbo: "5.8 GHz",
    socket: "LGA 1700", avaliacao: 4.9, avaliacoes: 183,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i9 para computadores de alto desempenho."
  },
  {
    id: 20, nome: "Intel Core i5-14400F", marca: "Intel", linha: "Intel Core",
    geracao: "14ª Geração", preco: 1099.90, precoAntigo: 1249.90,
    nucleos: 10, threads: 16, clock: "2.5 GHz", turbo: "4.7 GHz",
    socket: "LGA 1700", avaliacao: 4.7, avaliacoes: 156,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i5 de 14ª geração."
  },
  {
    id: 21, nome: "Intel Core i7-14700K", marca: "Intel", linha: "Intel Core",
    geracao: "14ª Geração", preco: 2699.90, precoAntigo: 2899.90,
    nucleos: 20, threads: 28, clock: "3.4 GHz", turbo: "5.6 GHz",
    socket: "LGA 1700", avaliacao: 4.9, avaliacoes: 198,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i7 de 14ª geração para alto desempenho."
  },
  {
    id: 22, nome: "Intel Core i9-14900K", marca: "Intel", linha: "Intel Core",
    geracao: "14ª Geração", preco: 2786.99, precoAntigo: 3099.90,
    nucleos: 24, threads: 32, clock: "3.2 GHz", turbo: "6.0 GHz",
    socket: "LGA 1700", avaliacao: 4.9, avaliacoes: 312,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core i9 de 14ª geração, desenvolvido para tarefas exigentes."
  },
  {
    id: 23, nome: "Intel Core i9-14900KF", marca: "Intel", linha: "Intel Core",
    geracao: "14ª Geração", preco: 2799.90, precoAntigo: 3199.90,
    nucleos: 24, threads: 32, clock: "3.2 GHz", turbo: "6.0 GHz",
    socket: "LGA 1700", avaliacao: 4.9, avaliacoes: 410,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Versão desbloqueada sem vídeo integrado da linha Intel Core i9."
  },
  {
    id: 24, nome: "Intel Core Ultra 5 225F", marca: "Intel", linha: "Intel Core Ultra",
    geracao: "Core Ultra", preco: 1299.90, precoAntigo: 1449.90,
    nucleos: 10, threads: 10, clock: "3.3 GHz", turbo: "4.9 GHz",
    socket: "LGA 1851", avaliacao: 4.7, avaliacoes: 95,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core Ultra 5 para plataformas mais recentes."
  },
  {
    id: 25, nome: "Intel Core Ultra 5 245KF", marca: "Intel", linha: "Intel Core Ultra",
    geracao: "Core Ultra", preco: 1749.90, precoAntigo: 1899.90,
    nucleos: 14, threads: 14, clock: "4.2 GHz", turbo: "5.2 GHz",
    socket: "LGA 1851", avaliacao: 4.8, avaliacoes: 112,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core Ultra 5 desbloqueado."
  },
  {
    id: 26, nome: "Intel Core Ultra 9 285K", marca: "Intel", linha: "Intel Core Ultra",
    geracao: "Core Ultra", preco: 3699.90, precoAntigo: 3999.90,
    nucleos: 24, threads: 24, clock: "3.7 GHz", turbo: "5.7 GHz",
    socket: "LGA 1851", avaliacao: 4.9, avaliacoes: 86,
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600",
    descricao: "Processador Intel Core Ultra 9 para configurações avançadas."
  },
  {
    id: 27, nome: "AMD Ryzen 5 5500", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 579.90, precoAntigo: 649.90,
    nucleos: 6, threads: 12, clock: "3.6 GHz", turbo: "4.2 GHz",
    socket: "AM4", avaliacao: 4.7, avaliacoes: 311,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 5 de entrada para computadores domésticos e gamer."
  },
  {
    id: 28, nome: "AMD Ryzen 5 5600GT", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 789.90, precoAntigo: 899.90,
    nucleos: 6, threads: 12, clock: "3.6 GHz", turbo: "4.6 GHz",
    socket: "AM4", avaliacao: 4.8, avaliacoes: 267,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen com gráficos integrados para diferentes configurações."
  },
  {
    id: 29, nome: "AMD Ryzen 7 5800X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 1199.90, precoAntigo: 1399.90,
    nucleos: 8, threads: 16, clock: "3.8 GHz", turbo: "4.7 GHz",
    socket: "AM4", avaliacao: 4.8, avaliacoes: 221,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 7 para jogos e produtividade."
  },
  {
    id: 30, nome: "AMD Ryzen 7 5800X3D", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 1799.90, precoAntigo: 1999.90,
    nucleos: 8, threads: 16, clock: "3.4 GHz", turbo: "4.5 GHz",
    socket: "AM4", avaliacao: 4.9, avaliacoes: 427,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen com tecnologia 3D V-Cache."
  },
  {
    id: 31, nome: "AMD Ryzen 9 5900X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 1799.90, precoAntigo: 1999.90,
    nucleos: 12, threads: 24, clock: "3.7 GHz", turbo: "4.8 GHz",
    socket: "AM4", avaliacao: 4.8, avaliacoes: 176,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 9 com múltiplos núcleos para produtividade."
  },
  {
    id: 32, nome: "AMD Ryzen 9 5950X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 5000", preco: 2299.90, precoAntigo: 2499.90,
    nucleos: 16, threads: 32, clock: "3.4 GHz", turbo: "4.9 GHz",
    socket: "AM4", avaliacao: 4.9, avaliacoes: 152,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 9 de 16 núcleos para cargas de trabalho intensas."
  },
  {
    id: 33, nome: "AMD Ryzen 5 7600X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 7000", preco: 1299.90, precoAntigo: 1449.90,
    nucleos: 6, threads: 12, clock: "4.7 GHz", turbo: "5.3 GHz",
    socket: "AM5", avaliacao: 4.8, avaliacoes: 188,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 5 desbloqueado da série 7000."
  },
  {
    id: 34, nome: "AMD Ryzen 7 7700X", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 7000", preco: 1899.90, precoAntigo: 2099.90,
    nucleos: 8, threads: 16, clock: "4.5 GHz", turbo: "5.4 GHz",
    socket: "AM5", avaliacao: 4.8, avaliacoes: 164,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 7 para jogos e aplicações profissionais."
  },
  {
    id: 35, nome: "AMD Ryzen 9 9900X3D", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 9000", preco: 3299.90, precoAntigo: 3599.90,
    nucleos: 12, threads: 24, clock: "4.4 GHz", turbo: "5.5 GHz",
    socket: "AM5", avaliacao: 4.9, avaliacoes: 93,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 9 com tecnologia 3D V-Cache."
  },
  {
    id: 36, nome: "AMD Ryzen 9 9950X3D", marca: "AMD", linha: "AMD Ryzen",
    geracao: "Ryzen 9000", preco: 4499.90, precoAntigo: 4799.90,
    nucleos: 16, threads: 32, clock: "4.3 GHz", turbo: "5.7 GHz",
    socket: "AM5", avaliacao: 4.9, avaliacoes: 118,
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600",
    descricao: "Processador Ryzen 9 de alto desempenho com tecnologia 3D V-Cache."
  }
];

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function obterProduto(id) {
  return produtos.find(produto => produto.id === Number(id));
}
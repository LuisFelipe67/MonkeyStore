const produtos = [
  {
    id: 1,
    nome: "AMD Ryzen 5 5600GT",
    marca: "AMD",
    geracao: "Ryzen 5000",
    preco: 789.90,
    precoAntigo: 899.90,
    nucleos: 6,
    threads: 12,
    clock: "4.6 GHz",
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=85",
    descricao: "Desempenho eficiente para jogos e tarefas do dia a dia."
  },
  {
    id: 2,
    nome: "AMD Ryzen 9 9900X3D",
    marca: "AMD",
    geracao: "Ryzen 9000",
    preco: 3299.90,
    precoAntigo: 3599.90,
    nucleos: 12,
    threads: 24,
    clock: "5.5 GHz",
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
    descricao: "Processador de alto desempenho para jogos e criação de conteúdo."
  },
  {
    id: 3,
    nome: "Intel i5-12400F",
    marca: "Intel",
    geracao: "12ª geração",
    preco: 699.90,
    precoAntigo: 799.90,
    nucleos: 6,
    threads: 12,
    clock: "4.4 GHz",
    imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
    descricao: "Ótimo equilíbrio entre desempenho e custo-benefício."
  },
  {
    id: 4,
    nome: "AMD Ryzen 7 5700X",
    marca: "AMD",
    geracao: "Ryzen 5000",
    preco: 999.90,
    precoAntigo: 1149.90,
    nucleos: 8,
    threads: 16,
    clock: "4.6 GHz",
    imagem: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85",
    descricao: "Potência para multitarefa, jogos e aplicações exigentes."
  },
  {
    id: 5,
    nome: "Intel i5-14600KF",
    marca: "Intel",
    geracao: "14ª geração",
    preco: 1899.90,
    precoAntigo: 2099.90,
    nucleos: 14,
    threads: 20,
    clock: "5.3 GHz",
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=85",
    descricao: "Performance avançada para setups gamer e profissionais."
  },
  {
    id: 6,
    nome: "Intel Core Ultra 5 245KF",
    marca: "Intel",
    geracao: "Core Ultra",
    preco: 1749.90,
    precoAntigo: 1899.90,
    nucleos: 14,
    threads: 14,
    clock: "5.2 GHz",
    imagem: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
    descricao: "Arquitetura moderna para alto desempenho e produtividade."
  },
  {
    id: 7,
    nome: "AMD Ryzen 5 9600X",
    marca: "AMD",
    geracao: "Ryzen 9000",
    preco: 1599.90,
    precoAntigo: 1799.90,
    nucleos: 6,
    threads: 12,
    clock: "5.4 GHz",
    imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
    descricao: "Excelente resposta em jogos e aplicações modernas."
  },
  {
    id: 8,
    nome: "AMD Ryzen 9 9950X3D",
    marca: "AMD",
    geracao: "Ryzen 9000",
    preco: 4499.90,
    precoAntigo: 4799.90,
    nucleos: 16,
    threads: 32,
    clock: "5.7 GHz",
    imagem: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85",
    descricao: "Máximo desempenho para quem exige muito do computador."
  },
  {
    id: 9,
    nome: "Intel Core i9-14900K",
    marca: "Intel",
    geracao: "14ª geração",
    preco: 2786.99,
    precoAntigo: 3249.99,
    nucleos: 24,
    threads: 32,
    clock: "6.0 GHz",
    imagem: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=85",
    descricao: "Processador topo de linha para jogos, streaming e criação."
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
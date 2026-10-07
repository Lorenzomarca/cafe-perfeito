import "./Main.css";

function Main() {
  const produtos = [
    {
      id: 1,
      nome: "Café Pantera",
      descricao:
        "Café que te deixa veloz e energético, perfeito para quem precisa de um boost de energia.",
      preco: "R$ 6,99",
      imagem: "",
    },
    {
      id: 2,
      nome: "Café Genio",
      descricao:
        "Café que te deixa mais inteligente e criativo, perfeito para quem precisa de um boost de criatividade.",
      preco: "R$ 7,99",
      imagem: "",
    },

    {
      id: 3,
      nome: "Café Camaleão",
      descricao:
        "Café que te deixa mais adaptável e flexível, perfeito para quem precisa de um boost de adaptação.",
      preco: "R$ 8,99",
      imagem: "",
    },
  ];
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <span>WESTMINSTER - LONDRES</span>
          <h1>O café perfeito para o seu momento</h1>

          <p>
            Cafés selecionados e preparados com cuidado para proporcionar a
            melhor experiência de sabor e aroma.
          </p>

          <a href="#catalogo" className="hero-button">
            Ver catálogo
          </a>
        </div>

        <div className="hero-image">{}</div>
      </section>

      <section className="catalogo" id="catalogo">
        <div className="catalogo-header">
          <div>
            <span className="catalogo-subtitle">NOSSO CARDÁPIO</span>
            <h2>Mais pedidos</h2>

            <p>Confira alguns dos favoritos da nossa cafeteria.</p>
          </div>
          <a href="#" className="catalogo-link">
            Ver catálogo completo →
          </a>
        </div>

        <div className="produtos">
          <article className="produto-card">
            <div className="produto-imagem"></div>

            <div className="produto-info">
              <div className="produto-bottom"></div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
export default Main;

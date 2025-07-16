import React from "react";

export default function Header() {
  return (
    <header className="header-hero">
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1>Agência Flower</h1>
        <p className="tagline">
          Transforme sua presença digital com estratégia e criatividade.
        </p>
        <a href="#contato" className="btn-cta">Fale Conosco</a>
      </div>
    </header>
  );
}

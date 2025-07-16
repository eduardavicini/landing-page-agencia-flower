import React from "react";

export default function Contact() {
  return (
    <section id="contato" className="contact container">
      <h2>Contato</h2>
      <p>
        Quer conversar com a gente? Envie um e-mail ou fale pelo WhatsApp clicando nos botões abaixo.
      </p>
      <div className="social-buttons">
        <a href="mailto:contato@agenciaflower.com.br" className="btn-social email">E-mail</a>
        <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer" className="btn-social wpp">WhatsApp</a>
      </div>
    </section>
  );
}

import React from "react";

const members = [
  { name: "Ana Silva", role: "Diretora de Criação" },
  { name: "João Lima", role: "Especialista em Mídias Sociais" },
  { name: "Marina Costa", role: "Desenvolvedora Web" }
];

export default function Team() {
  return (
    <section id="time" className="team container">
      <h2>Nosso Time</h2>
      <p>
        Conheça as mentes criativas por trás da Agência Flower. Somos um time apaixonado por estratégia, design e resultados. Cada projeto é conduzido com dedicação e muito cuidado para florescer da melhor forma possível.
      </p>
      <div className="team-members">
        {members.map(({ name, role }) => (
          <div className="member-card" key={name}>
            <h4>{name}</h4>
            <p>{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

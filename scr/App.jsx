import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <About />
        <Services />
        <Team />
        <Contact />
      </main>
      <footer className="footer container">
        <p>© 2025 Agência Flower — Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function gerarImagem() {
    setLoading(true);
    const res = await fetch("/api/gerar-imagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setImage(data.image);
    setLoading(false);
  }

  return (
    <div className="container">
      <h1>Gerador Premium de Lavouras</h1>
      <p>Crie imagens institucionais de alto padrão para o agronegócio.</p>

      <textarea
        rows="4"
        placeholder="Ex: Lavoura agrícola brasileira extremamente luxuosa, amanhecer, luz dourada, alta tecnologia..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={gerarImagem}>
        {loading ? "Gerando imagem..." : "Gerar imagem"}
      </button>

      {image && <img src={image} alt="Imagem gerada da lavoura" />}
    </div>
  );
}

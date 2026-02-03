import OpenAI from "openai";

export const runtime = "nodejs"; 

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt || "Lavoura agrícola brasileira luxuosa, corporativa, fotografia premium",
      size: "1792x1024"
    });

    return new Response(
      JSON.stringify({ image: result.data[0].url }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Erro ao gerar imagem" }),
      { status: 500 }
    );
  }
}

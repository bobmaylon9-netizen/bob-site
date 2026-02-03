import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req) {
  const { prompt } = await req.json();

  const image = await openai.images.generate({
    model: "gpt-image-1",
    prompt: prompt || "Lavoura agrícola brasileira luxuosa, corporativa, fotografia premium",
    size: "1792x1024"
  });

  return Response.json({
    image: image.data[0].url
  });
}

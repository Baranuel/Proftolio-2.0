import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) return;
  console.log("configuration.apiKey", configuration.apiKey);
  try {
    const prompt = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Tell me how are you?",
      temperature: 0.6,
    });
    return res.status(200).json({ result: prompt.data.choices[0].text });
  } catch (error) {
    return console.log(error);
  }
}

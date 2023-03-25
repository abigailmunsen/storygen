require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function generateText(prompt) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["."],
    });
    console.log(response.data.choices[0].text);
  }
  catch (error) {
    console.error(`Error generating text: ${error.message}`);
  }
}

// Replace 'your prompt here' with the text you want to send to the API
const prompt = 'What do you say to the world?';
const text = generateText(prompt);

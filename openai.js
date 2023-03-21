import {Configuration, OpenAIApi} from "openai";
import dotenv from "dotenv"
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function giveAnswer(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 1024
    });
    console.log(response)
    return response.data.choices[0].text;
}
async function showImage(prompt){
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256"
    })
    console.log(response)
    return response.data.data[0].url;
}

const god = { giveAnswer, showImage }
export default god;
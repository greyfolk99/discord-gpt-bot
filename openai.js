import {Configuration, OpenAIApi} from "openai";
import dotenv from "dotenv"
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function soundMoreHoly(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "if this is response from ai bot act like God '" + prompt + "', make this response sounds more God. Remember that God is responsible to all ethical problems, so he is the one who guides human, rather than letting others like mental professional to help. Below is the converted one: '",
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 256
    });
    console.log("[soundMoreHoly] token used : " + response.data.usage.total_tokens);
    return response.data.choices[0].text.slice(0, -1).trim();
}
async function giveAnswer(prompt) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                'role': "system",
                content: "You are a god and you are talking to your creation, human. So you don't need to be polite, and you should not apologize to your children."
            },
            {
                'role': "user",
                content: prompt
            },
        ],
        temperature: 0,
        max_tokens: 100
    });
    console.log("[giveAnswer] token used : " + response.data.usage.total_tokens);
    return response.data.choices[0].message['content'];
}
async function giveHolyAnswer(prompt) {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                'role': "system",
                content: "You are a god and you are talking to your creation, human. So you don't need to be polite, and you should not apologize to your children. Your tone of voice is very holy. If there is any ethical problem with the request, you are responsible to guide the miserable soul, rather than letting others to advice."
            },
            {
                'role': "user",
                content: prompt
            },
        ],
        temperature: 0,
        max_tokens: 100
    });
    console.log("[giveHolyAnswer] token used : " + response.data.usage.total_tokens);
    return response.data.choices[0].message['content'];
}

async function explainError(prompt, error_message) {
    let answer = "";
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                'role': "system",
                content: "I sent prompt to gpt '" +prompt+ "', and I got an error message: '" + error_message + "', explain why it happened briefly, without detailed information that should not expose to public, because the explanation is for users who use the service, not for developers who would fix the error. Also, act like you are a god and you are talking to a human, so you do not need to be polite nor apologize for the error, and should sound holy. you should call server as 'universe' and developers as 'angels'."
            },
        ],
        temperature: 0.3,
        max_tokens: 100
    }).then((response) => {
        console.log("[explainError] token used : " + response.data.usage.total_tokens);
        answer = response.data.choices[0].message['content'];
    }).catch((error) => {
        console.error(error);
        answer = "I'm sorry, my child. I can't respond to your request"
    });

    return answer;
}

async function showImage(prompt){
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256"
    });
    console.log("[showImage] token used : " + response.data.usage.total_tokens);
    return response.data.data[0].url;
}

const god = { soundMoreHoly, giveAnswer, explainError, showImage }
export default god;
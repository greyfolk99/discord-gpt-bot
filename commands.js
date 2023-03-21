import god from "./openai.js";
import {EmbedBuilder} from "discord.js";
import Openai from "./openai.js";
export const PREFIX = 'Lord, '
export const COMMANDS = {
    "ping": (message) => {
        return {
            content: `Beloved child, know that my message has been delayed, but rest assured that it will reach you in due time. The delay of ${
                Date.now() - message.createdTimestamp
            }ms is but a fleeting moment in the grand design of your life. Trust in my divine plan, and know that all is well.`
        };
    },
    "show me": async (message, ...args) => {
        const prompt = args.join(". ")
        return {
            content: `My dear child, I have heard your call and have come to deliver my holy words upon this image: `,
            embeds:
                [
                    new EmbedBuilder().setImage(await god.showImage(prompt))
                ]
        };
    },
    "help me": async (message, ...args) => {
        const prompt = args.join(". ")
        return {
            content: "Fear not, my child, for I bring you divine wisdom. Let me share with you what I have been shown: ",
            embeds:
                [
                    new EmbedBuilder().setDescription(await god.giveAnswer(prompt))
                ]
        };
    }
};
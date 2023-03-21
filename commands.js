import god from "./openai.js";
import {EmbedBuilder} from "discord.js";
import Openai from "./openai.js";
export const PREFIX = 'Lord, '
export const COMMANDS = {
    "ping": {
        description: "show ping",
        example : `${PREFIX}ping`,
        response: (message) => {
            const now = new Date();
            const userTimezoneOffset = now.getTimezoneOffset() * 60000; // in milliseconds
            const messageTime = new Date(message.createdTimestamp + userTimezoneOffset);
            const ping = now - messageTime;
            return {
                content: `Beloved child, know that my message has been delayed, but rest assured that it will reach you in due time. The delay of ${ping}ms is but a fleeting moment in the grand design of your life. Trust in my divine plan, and know that all is well.`
            };
        }
    },

    "show me": {
        description: "get an image from prompt",
        example: `${PREFIX}show me. a cat wearing a hat.`,
        response: async (message, ...args) => {
            const prompt = args.join(". ");
            try {
                const imageUrl = await god.showImage(prompt);
                return {
                    content: `My dear child, I have heard your call and have come to deliver my holy words upon this image:`,
                    embeds: [
                        new EmbedBuilder().setImage(imageUrl)
                    ]
                };
            } catch (error) {
                return {
                    content: "I'm sorry, my child. An error occurred while retrieving the image. Please try again later.",
                    embeds: [
                        new EmbedBuilder().setTitle("Error")
                            .setDescription(error.message)
                    ]
                };
            }
        }
    },
    "help me": {
        description: "get text from prompt",
        example: `${PREFIX}help me. what is happiness?`,
        response: async (message, ...args) => {
            const prompt = args.join(". ")
            try {
                const answer = await god.giveAnswer(prompt);
                return {
                    content: "Fear not, my child, for I bring you divine wisdom. Let me share with you what I have been shown: ",
                    embeds: [new EmbedBuilder().setDescription(answer)]
                };
            } catch (error) {
                console.error(error);
                return {
                    content: "I'm sorry, my child. An error has occurred while processing your request."
                };
            }
        }
    },
    "Divine Law": {
        description: "show commands available",
        example: `${PREFIX}Divine Law`,
        response: (message, ...args) => {
            const commandEmbeds = Object.entries(COMMANDS).map(([name, {description, example}]) => {
                return new EmbedBuilder()
                    .setTitle(`${PREFIX}${name}`)
                    .setDescription(`${description}\nex) ${example}`);
            });
            return {
                content: "Here are the rules you must follow:",
                embeds: commandEmbeds
            };
        }
    }
}
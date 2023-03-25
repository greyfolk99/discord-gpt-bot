import god from "./openai.js";
import {EmbedBuilder} from "discord.js";
import Openai from "./openai.js";

export const PREFIX = 'Lord, '
export const COMMANDS = {
    
    "ping": {
        description: "show ping",
        example : `${PREFIX}ping`,
        response: async (message) => {
            return {
                content: await god.soundMoreHoly(`ping is ${Math.abs(Date.now() - message.createdTimestamp)}ms`)
            };
        }
    },

    "show me": {
        description: "get an image from prompt",
        example: `${PREFIX}show me. a cat wearing a hat.`,
        response: async (message, ...args) => {
            const prompt = args.join(". ");
            let res;
            let imageUrl = await god.showImage(prompt)
                .then(async (imageUrl) => {
                    res = {
                        content: await god.soundMoreHoly('here is the image you requested'),
                        embeds: [
                            new EmbedBuilder().setImage(imageUrl)
                        ]
                    };
                })
                .catch(async (error) => {
                    res = {
                        content: await god.explainError(prompt, error.message)
                    }
                });
            return res;
        }
    },

    "help me": {
        description: "get text from prompt",
        example: `${PREFIX}help me. what is happiness?`,

        response: async (message, ...args) => {
            const prompt = args.join(". ")

            let res;
            await god.giveAnswer(prompt)
                .then(async (answer) => {
                    res = {
                        content: await god.soundMoreHoly(answer)
                    }
                })
                .catch(async (error) => {
                    res = {
                        content: await god.explainError(prompt, error.message)
                    }
                });
            return res;
        },
    },

    "Divine Law": {
        description: "show commands available",
        example: `${PREFIX}Divine Law`,
        response: (message, ...args) => {
            const commandEmbeds = Object.entries(COMMANDS)
                .map(([name, {description, example}]) => {
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
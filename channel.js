import {COMMANDS, PREFIX} from "./commands.js";

const createMessage = async (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const [...args] = message.content
        .slice(PREFIX.length)
        .trim()
        .split(/\.\s+/);

    const commandFunc = COMMANDS[args[0]];
    if (commandFunc) {
        const response = await commandFunc(message, ...args);
        message.channel.send(response);
    }
}
export const channel = {
    createMessage
}

export default channel;
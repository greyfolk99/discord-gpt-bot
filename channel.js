import {COMMANDS, PREFIX} from "./commands.js";

const createMessage = async (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const [...args] = message.content
        .slice(PREFIX.length)
        .trim()
        .split(/\.\s+/);

    const command = COMMANDS[args[0]];
    if (command) {
        const response = await command.response(message, ...args);
        message.channel.send(response);
    }
}
export const channel = {
    createMessage
}

export default channel;
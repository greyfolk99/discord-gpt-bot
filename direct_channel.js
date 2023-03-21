import {COMMANDS, PREFIX} from "./commands.js";

// todo : 추후 업데이트
async function replyMessage(message) {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const [...args] = message.content
        .slice(PREFIX.length)
        .trim()
        .split(/\.\s+/);
    const command = COMMANDS[args[0]];
    if (command) {
        const response = await command.response(message, ...args);
        await message.author.send(response);
    }
}
const dm = {replyMessage}
export default dm;
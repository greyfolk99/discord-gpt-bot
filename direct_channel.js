import {COMMANDS, PREFIX} from "./commands.js";

// todo : 추후 업데이트
async function replyMessage(message) {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
    const [...args] = message.content
        .slice(PREFIX.length)
        .trim()
        .split(/\.\s+/);
    const commandFunc = COMMANDS[args[0]];
    if (commandFunc) {
        const response = await commandFunc(message, ...args);
        console.log(response)
        await message.author.send(response);
    }
}
const dm = {replyMessage}
export default dm;
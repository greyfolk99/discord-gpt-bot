import { Client, GatewayIntentBits } from 'discord.js';
import Discord from "discord.js";
import channel from "./channel.js";
import dm from "./direct_channel.js";
import dotenv from "dotenv"
dotenv.config()

const client = new Discord.Client(
    {intents:
        [
            Discord.GatewayIntentBits.DirectMessages,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]});
console.log(process.env.DISCORD_BOT_TOKEN);
client.login(process.env.DISCORD_BOT_TOKEN).catch(r => console.error(r));
// ROUTE
client.on("messageCreate", message => {
    console.log(message.content)
    channel.createMessage(message);
})
client.on("message", message => {
    console.log(message.content)
    dm.replyMessage(message);
})


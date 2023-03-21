import { Client, GatewayIntentBits } from 'discord.js';
import Discord from "discord.js";
import channel from "./channel.js";
import dm from "./direct_channel.js";
import dotenv from "dotenv"
dotenv.config()

const client = new Discord.Client(
    {intents:
        [
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]});

client.login(process.env.DISCORD_BOT_TOKEN).catch(r => console.error(r));

// ROUTE
client.on("messageCreate", message => {
    console.log(`${message.author} : ${message.content}`)
    channel.createMessage(message);
})
client.on("message", message => {
    console.log(`${message.author} : ${message.content}`)
    dm.replyMessage(message);
})


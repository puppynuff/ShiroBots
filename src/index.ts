//* Developed by ShiroDev
//* My website: https://shirodev.dev/
//* Modified by : 
//* Please leave credits.

//* Importing modules
import dotenv from "dotenv";
import Shiro from "./Shiro/shiro";
import Suzu from "./Suzu/suzu";
import database from "./database-handler";
import mathathon from "./mathathon/mathathon";

//* Confing dotenv
dotenv.config();

let SHIRO: Shiro | undefined;
let user_database: database | undefined;

if (process.env.SHIROTOKEN) {
    SHIRO = new Shiro(process.env.SHIROTOKEN, ["GuildMessages", "GuildMessageTyping", "GuildMembers", "Guilds", "MessageContent", "GuildPresences"]);
    user_database = new database(`${process.cwd().replaceAll("\\", "/")}/database`);
}

if (process.env.SUZUTOKEN) {
    const SUZU = new Suzu(process.env.SUZUTOKEN, ["GuildMessages", "GuildMessageTyping", "GuildMembers", "Guilds", "MessageContent"]);
}

if (process.env.MATH_BOT_TOKEN) {
    const math_bot = new mathathon(process.env.MATH_BOT_TOKEN, ["GuildMessages", "GuildMessageTyping", "GuildMembers", "Guilds", "MessageContent"]);
}

export default user_database;

export { SHIRO };
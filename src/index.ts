//* Developed by ShiroDev
//* My website: https://shirodev.dev/
//* Modified by : 
//* Please leave credits.

//* Importing modules
import dotenv from "dotenv";
import Shiro from "./Shiro/shiro";

//* Confing dotenv
dotenv.config();

//? Get the tokens and create the bots.
if (!process.env.SHIROTOKEN) throw new Error();

const SHIRO = new Shiro(process.env.SHIROTOKEN, ["GuildMessages", "GuildMessageTyping", "GuildMembers", "Guilds"]);
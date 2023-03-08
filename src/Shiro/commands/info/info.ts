//* Import libraries
import { command } from "../../shiro";
import { EmbedBuilder } from "@discordjs/builders";

//* Creating the command
let info: command = {
    help: {
        name: "Info",
        description: "Sends info on the discord bot!",
        options: []
    },
    interaction: {
        name: "info",
        description: "Sends info on this bot!"
    },
    message: {
        name: "info",
        description: "Sends info on this bot!"
    },
    run: async function run(shiro, interaction, message, args) {
        const EMBED = new EmbedBuilder().addFields({
            name: "Developer(s)",
            value: "ShiroDev",
            inline: true
        }, {
            name: "Version",
            value: "0.1.0"
        }, {
            name: "Prefix",
            value: "s!"
        }, {
            name: "Discord",
            value: "https://discord.gg/t29Wr6zZR8 "
        }, {
            name: "Sister Bot Invite",
            value: "https://discord.com/api/oauth2/authorize?client_id=907385763178627142&permissions=8&scope=bot%20applications.commands"
        }).setFooter({ text: `Currently in ${shiro.client.guilds.cache.size} guilds!` }).setAuthor({
            name: "Shiro",
            iconURL: `${shiro.client.user?.avatarURL()}`,
            url: "https://shirodev.dev/"
        });

        if (interaction) {
            return interaction.followUp({ embeds: [EMBED] });
        }

        if (message) {
            return message.reply({ embeds: [EMBED] })
        }
    },
    patreon: false,
    early_access: false
}

export default info;
//* Import libraries
import { command } from "../../suzu";
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
    run: function run(suzu, interaction, message, args) {
        const EMBED = new EmbedBuilder().addFields({
            name: "Developer(s)",
            value: "ShiroDev",
            inline: true
        }, {
            name: "Version",
            value: "0.1.0"
        }, {
            name: "Prefix",
            value: "."
        }, {
            name: "Discord",
            value: "https://discord.gg/t29Wr6zZR8 "
        }, {
            name: "Sister Bot Invite",
            value: "https://discord.com/api/oauth2/authorize?client_id=1029651276272775218&permissions=274881087552&scope=bot%20applications.commands"
        }).setFooter({ text: `Currently in ${suzu.client.guilds.cache.size} guilds!` }).setAuthor({
            name: "Suzu",
            iconURL: `${suzu.client.user?.avatarURL()}`,
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
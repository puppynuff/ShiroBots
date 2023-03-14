import { EmbedBuilder } from "@discordjs/builders";
import { command } from "../../shiro";

let economy_info: command = {
    interaction: {
        name: "economy-info",
        description: "Sends info on the economy of the bot!"
    },
    message: {
        name: "economy-info",
        description: "Sends info on the economy of the bot!"
    },
    help: {
        name: "economy-info",
        description: "Sends info on the economy of the bot!",
        options: []
    },
    patreon: false,
    early_access: false,
    async run(shiro, interaction, message, args) {
        let EMBED = new EmbedBuilder().setAuthor({
            name: "Shiro Economy",
            url: "https://shirodev.dev/ShiroBots/"
        }).addFields({
            name: "Currently WIP",
            value: "Bot doesn't have any economy type things."
        });

        if (interaction) {
            return interaction.followUp({ embeds: [EMBED] });
        } else if (message) {
            return message.reply({ embeds: [EMBED] });
        }
    },
}

export default economy_info;
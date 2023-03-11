import { command } from "../../shiro";
import user_database from "../../..";

let show_info: command = {
    interaction: {
        name: "show-info",
        description: "PM's you saved info (JSON format)"
    },
    message: {
        name: "show-info",
        description: "PM's you saved info (JSON format)"
    },
    help: {
        name: "show-info",
        description: "PM's you saved info (JSON format)",
        options: []
    },
    early_access: false,
    patreon: false,
    async run(shiro, interaction, message, args) {
        if (interaction) {
            let data = user_database.find_user_data(interaction.user.id);
            if (!data) return interaction.followUp("Either we don't have any info, or there was an error getting the data!");

            interaction.user.send(JSON.stringify(data, null, 4) ? JSON.stringify(data, null, 4) : "Failed to stringify data");

            return interaction.followUp("Sent all data!");
        }

        if (message) {
            let data = user_database.find_user_data(message.author.id);
            if (!data) return message.reply("Either we don't have any info, or there was an error getting the data!");
            message.author.send(JSON.stringify(data, null, 4) ? JSON.stringify(data, null, 4) : "Failed to stringify data");

            return message.reply("Sent all data!");
        }
    },
}

export default show_info;
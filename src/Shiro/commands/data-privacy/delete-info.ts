import { command } from "../../shiro";
import user_database from "../../..";

let delete_info: command = {
    interaction: {
        name: "delete-info",
        description: "Deletes all data on you"
    },
    message: {
        name: "delete-info",
        description: "Deletes all data on you"
    },
    help: {
        name: "delete-info",
        description: "Deletes all data on you",
        options: []
    },
    early_access: false,
    patreon: false,
    async run(shiro, interaction, message, args) {
        if (interaction) {
            if (!user_database) return interaction.followUp("Database failed to generate!");
            let data = user_database.delete_user_data(interaction.user.id);
            if (!data) return interaction.followUp("Either we don't have any info, or there was an error finding the file!");

            return interaction.followUp("Deleted all data!");
        }

        if (message) {
            if (!user_database) return message.reply("Database failed to generate!");
            let data = user_database.delete_user_data(message.author.id);
            if (!data) return message.reply("Either we don't have any info, or there was an error finding the file");

            return message.reply("Deleted all data!");
        }
    },
}

export default delete_info;
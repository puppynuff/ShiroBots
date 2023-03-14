
//? Update imports
import { command, CommandOptionType } from "../../shiro";
import user_database from "../../..";

const forget_birthday: command = {
    interaction: {
        name: "forget-birthday",
        description: "removes your birthday from the bot",
        options: []
    },

    message: {
        name: "forget-birthday",
        description: "removes your birthday from the bot",
        options: []
    },

    help: {
        name: "forget-birthday",
        description: "removes your birthday from the bot",
        options: []
    },

    early_access: false,
    patreon: false,
    async run(shiro, interaction, message, args) {
        if (interaction) {
            if (!user_database) return interaction.followUp("Database failed to generate!");
            let data = user_database.find_user_data(interaction.user.id);
            if (!data) return interaction.followUp("Failed to retrieve data");
            data.data.birthdayInfo = undefined;
            user_database.save_user_data(interaction.id, data);

            return interaction.followUp("Successfully cleared birthday info!");
        }


        if (message && args) {
            if (!user_database) return message.reply("Database failed to generate!");
            let data = user_database.find_user_data(message.author.id);
            if (!data) return message.reply("Failed to retrieve data");
            data.data.birthdayInfo = undefined;
            user_database.save_user_data(message.author.id, data);

            return message.reply("Successfully cleared birthday info!");
        }
    },
}

export default forget_birthday;
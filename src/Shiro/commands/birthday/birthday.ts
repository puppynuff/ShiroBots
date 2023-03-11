import { command, CommandOptionType } from "../../shiro";
import user_database from "../../..";

let show_info: command = {
    interaction: {
        name: "birthday",
        description: "Sends you info on your or someone elses birthday",
        options: [{
            name: "member",
            description: "If their birthday is public, it will show it to you (if its yours it will just send it)",
            type: CommandOptionType.USER
        }]
    },
    message: {
        name: "birthday",
        description: "Sends you info on your or someone elses birthday"
    },
    help: {
        name: "birthday",
        description: "Sends you info on your or someone elses birthday",
        options: []
    },
    early_access: false,
    patreon: false,
    async run(shiro, interaction, message, args) {
        if (interaction) {
            let user = interaction.options.data.find((value) => value.name == "member");

            if (user) {
                if (!interaction.guild) return interaction.followUp("For user support you need to be in a server");

                if (typeof user.value !== "string") return interaction.followUp("Failed to get userID");
                let userData = shiro.client.guilds.cache.get(interaction.guild?.id)?.members.cache.get(user.value ?? "1");
                if (!userData) return "Failed to get user";
                let data = user_database.find_user_data(userData.id);

                if (!data || !data.data) return interaction.followUp("User is not in the database!");

                if (!data.data.birthdayInfo?.birthday) return interaction.followUp("User never set their birthday!");
                if (data.data.birthdayInfo.isPublic != true && userData.id != interaction.user.id) return interaction.followUp("User wants their birthday to be private, sorry!");

                return interaction.followUp(`${userData.user.tag}'s birthday is ${data.data.birthdayInfo.birthday}`);
            } else {
                let data = user_database.find_user_data(interaction.user.id);
                if (!data) return interaction.followUp("Failed to get data!");
                if (!data || !data.data) return interaction.followUp("You are not in the database!");

                if (!data.data.birthdayInfo?.birthday) return interaction.followUp("You never set your birthday!");
                return interaction.followUp(`${interaction.user.tag}'s birthday is ${data.data.birthdayInfo.birthday}`);
            }
        }

        if (message) {
            if (message.mentions.members == null) {
                let data = user_database.find_user_data(message.author.id);
                if (!data) return message.reply("Failed to get data!");
                if (!data || !data.data) return message.reply("You are not in the database!");

                if (!data.data.birthdayInfo?.birthday) return message.reply("You never set your birthday!");
                return message.reply(`${message.author.tag}'s birthday is ${data.data.birthdayInfo.birthday}`);
            }

            let user = message.mentions.members.find((value) => value);
            if (!user) {
                let data = user_database.find_user_data(message.author.id);
                if (!data) return message.reply("Failed to get data!");
                if (!data || !data.data) return message.reply("You are not in the database!");

                if (!data.data.birthdayInfo?.birthday) return message.reply("You never set your birthday!");
                return message.reply(`${message.author.tag}'s birthday is ${data.data.birthdayInfo.birthday}`);
            }

            if (message.guildId == null) return message.reply("Failed to get guildID");

            let data = user_database.find_user_data(user.id);

            if (!data || !data.data) return message.reply("User is not in the database!");

            if (!data.data.birthdayInfo?.birthday) return message.reply("User never set their birthday!");
            if (data.data.birthdayInfo.isPublic != true && user.id != message.author.id) return message.reply("User wants their birthday to be private, sorry!");

            return message.reply(`${user.user.tag}'s birthday is ${data.data.birthdayInfo.birthday}`);
        }
    },
}

export default show_info;
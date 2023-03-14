import { command, CommandOptionType } from "../../shiro";
import user_database from "../../..";

let year = new Date().getFullYear();

let numberMonths: any = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
}

const remember_birthday: command = {
    interaction: {
        name: "remember-birthday",
        description: "Add your birthday to the bot!",
        options: [{
            name: "day",
            description: "Day which you are born on (1-31)",
            type: CommandOptionType.INTEGER,
            min_value: 1,
            max_value: 31,
            required: true
        }, {
            name: "month",
            description: "Month you are born (ex : May)",
            type: CommandOptionType.STRING,
            choices: [{
                name: "January",
                value: "january",
            }, {
                name: "Febuary",
                value: "february"
            }, {
                name: "March",
                value: "march"
            }, {
                name: "April",
                value: "april"
            }, {
                name: "May",
                value: "may"
            }, {
                name: "June",
                value: "june"
            }, {
                name: "July",
                value: "july"
            }, {
                name: "August",
                value: "august"
            }, {
                name: "September",
                value: "september"
            }, {
                name: "October",
                value: "october"
            }, {
                name: "November",
                value: "november"
            }, {
                name: "December",
                value: "december"
            }],
            required: true
        }, {
            name: "year",
            description: "Year you were born",
            type: CommandOptionType.NUMBER,
            min_value: 0,
            max_value: year - 13,
            required: true
        }, {
            name: "public",
            description: "Whether or not you want your birthday public",
            type: CommandOptionType.BOOLEAN
        }]
    },

    message: {
        name: "remember-birthday",
        description: "Add your birthday to the bot!",
        options: ["day", "month", "year", "public"]
    },

    help: {
        name: "remember-birthday",
        description: "Add your birthday to the bot!",
        options: [
            {
                name: "day",
                description: "Day you were born on",
                options: [],
                type: "Number"
            }, {
                name: "Month",
                description: "Moth you were born in",
                options: [],
                type: "String"
            }, {
                name: "Year",
                description: "The year you were born in",
                options: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                type: "String"
            },
            {
                name: "public",
                description: "Whether or not you want your birthday public",
                options: [],
                type: "Boolean"
            }
        ]
    },

    early_access: false,
    patreon: false,
    async run(shiro, interaction, message, args) {
        if (interaction) {
            if (!user_database) return interaction.followUp("Database failed to generate!");
            let day = interaction.options.data.find((value) => value.name == "day");
            let month = interaction.options.data.find((value) => value.name == "month");
            let year = interaction.options.data.find((value) => value.name == "year");
            let isPublicData = interaction.options.data.find((value) => value.name == "public");
            if ((!day || !month || !year) || (typeof month.value != "string" || typeof day.value != "number" || typeof year.value != "number")) return interaction.followUp("Failed to get options!");

            let isPublic = false;
            if (isPublicData?.value == true) isPublic = true;

            let monthNumber = numberMonths[month.value || "january"];

            let data = user_database.find_user_data(interaction.user.id);

            if (!data) {
                user_database.save_user_data(interaction.user.id, {
                    userID: interaction.user.id,
                    data: {
                        birthdayInfo: {
                            birthday: `${day.value}/${monthNumber}/${year.value}`,
                            isPublic: isPublic
                        }
                    }
                })
            } else {
                if (!data.data.birthdayInfo) data.data.birthdayInfo = {};
                data.data.birthdayInfo.birthday = `${day.value}/${monthNumber}/${year.value}`;
                data.data.birthdayInfo.isPublic = isPublic;
                user_database.save_user_data(interaction.user.id, data);
            }

            interaction.followUp("Successfully added your birthday!");
        }


        if (message && args) {
            if (!user_database) return message.reply("Database failed to generate!");
            let day = isNaN(Number(args[1]));
            let month = args[2];
            let year = isNaN(Number(args[3]));

            if (!day) return message.reply("Day must be a number");
            if (!year) return message.reply("Year must be a number");
            if (!numberMonths[month.toLowerCase()]) return message.reply("month is not a real month!");

            let isPublic = false;
            if (args[4].toString() == "true") {
                isPublic = true;
            }


            let data = user_database.find_user_data(message.author.id);

            if (!data) {
                user_database.save_user_data(message.author.id, {
                    userID: message.author.id,
                    data: {
                        birthdayInfo: {
                            birthday: `${args[1]}/${numberMonths[month]}/${args[3]}`,
                            isPublic: isPublic
                        }
                    }
                })
            } else {
                if (!data.data.birthdayInfo) data.data.birthdayInfo = {};
                data.data.birthdayInfo.birthday = `${args[1]}/${numberMonths[month]}/${args[3]}`;
                data.data.birthdayInfo.isPublic = isPublic;
                user_database.save_user_data(message.author.id, data);
            }

            message.reply("Successfully saved info!");
        }
    },
}

export default remember_birthday;
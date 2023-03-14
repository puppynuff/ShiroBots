import { EmbedBuilder } from "@discordjs/builders";
import user_database from "../../..";
import { command, CommandOptionType } from "../../shiro";

let economy_info: command = {
    interaction: {
        name: "rps",
        description: "Play rock-paper-scissors for credits!",
        options: [{
            name: "amount",
            description: "The amount of credits to bet",
            type: CommandOptionType.NUMBER,
            min_value: 1,
            max_value: 500
        }, {
            name: "type",
            description: "The type of object to throw!",
            type: CommandOptionType.NUMBER,
            choices: [{
                name: "Rock",
                value: 1
            }, {
                name: "Paper",
                value: 2
            }, {
                name: "Scissors",
                value: 3
            }]
        }]
    },
    message: {
        name: "rps",
        description: "Play rock-paper-scissors for credits!",
        options: ["amount", "type"]
    },
    help: {
        name: "rps",
        description: "Play rock-paper-scissors for credits!",
        options: [{
            name: "amount",
            description: "The amount of credits to bet",
            options: ["Any number 1 -> 500"],
            type: "number"
        }, {
            name: "type",
            description: "The type of object to play",
            options: ["Rock", "Paper", "Scissors"],
            type: "String"
        }]
    },
    patreon: false,
    early_access: false,
    async run(shiro, interaction, message, args) {
        if (interaction) {
            if (!user_database) return interaction.followUp("Database failed to generate!");
            let amount = interaction.options.data.find((value) => value.name === "amount");
            let type = interaction.options.data.find((value) => value.name === "type");

            if ((!amount || !type) || (typeof amount.value !== "number" || typeof type.value !== "number")) return interaction.followUp("Failed to get user information!");

            let userData = user_database.find_user_data(interaction.user.id);
            if (!userData) return interaction.followUp("You are not in the database!");
            if (!userData.data.economy) return interaction.followUp("You don't have any economy info");
            if (userData.data.economy.credits < amount.value) return interaction.followUp("You don't have enough credits!");

            let objectNumber = Math.round(Math.random() * (3 - 1) + 1);

            let object = "Rock";
            if (objectNumber == 2) object = "Paper";
            if (objectNumber == 3) object = "Scissors"

            let winner = getResult(objectNumber, type.value);

            if (winner == "draw") {
                return interaction.followUp(`You chose ${type.value} and the bot chose ${object}! You guys drew, and won no credits!`);
            }

            if (winner == "loss") {
                userData.data.economy.credits -= amount.value;
                user_database.save_user_data(interaction.user.id, userData);

                return interaction.followUp(`You chose ${type.value} and the bot chose ${object}! You lost ${amount.value} credits!`);
            }

            if (winner == "win") {
                userData.data.economy.credits += amount.value;
                user_database.save_user_data(interaction.user.id, userData);

                return interaction.followUp(`You chose ${type.value} and the bot chose ${object}! You won ${amount.value} credits!`);
            }

        } else if (message) {
            if (!user_database) return message.reply("Database failed to generate!");
        }
    },
}

//? Object number is rng, type is user
//? 1 is rock, 2 is paper, 3 is scissors
function getResult(objectNumber: number, type: number) {
    if (objectNumber === type) return "draw";

    if (objectNumber == 1 && type == 2) return "win";
    if (objectNumber == 1 && type == 3) return "loss";

    if (objectNumber == 2 && type == 1) return "loss";
    if (objectNumber == 2 && type == 3) return "win";

    if (objectNumber == 3 && type == 2) return "win";
    if (objectNumber == 3 && type == 1) return "loss";

    return "draw";
}

export default economy_info;
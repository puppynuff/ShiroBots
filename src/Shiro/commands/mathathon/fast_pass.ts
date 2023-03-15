import { command, CommandOptionType } from "../../shiro";
import { os } from "./r_run";
import { glob } from "glob";
import fs from "fs";
import path from "path";

const command: command = {
    interaction: {
        name: "fast_pass",
        description: "Gets a question for the mathathon",
        options: [{
            name: "catpick",
            description: "The Catpick for the question!",
            type: CommandOptionType.INTEGER,
            min_value: 1,
            max_value: 7,
            required: true
        }, {
            name: "grade",
            description: "The grade to get the question for!",
            type: CommandOptionType.INTEGER,
            min_value: 3,
            max_value: 5,
            required: true
        }]
    },
    message: {
        name: "fast_pass",
        description: "Gets a question for the mathathon",
        options: ["catpick", "grade"]
    },
    help: {
        name: "fast_pass",
        description: "Gets a question for the mathathon",
        options: [{
            name: "catpick",
            description: "The Catpick for the question",
            type: "Number",
            options: ["1", "2", "3", "4", "5", "6", "7"]
        }, {
            name: "grade",
            description: "The grade for the question",
            type: "Number",
            options: ["3", "4", "5"]
        }]
    },
    async run(shiro, interaction, message, args) {
        let command: string = `#loading CSV files\n`;
        glob(`${process.cwd().replaceAll("\\", "/")}/r_code/command_code/*.csv`, (err, files) => {
            if (err) {
                if (message) {
                    return message?.reply("Failed to load CSV files");
                }
                if (interaction) return interaction.followUp("Failed to load CSV files");
            }
            for (let i = 0; i < files.length; i++) {
                let baseName = path.basename(files[i]);
                command += `${baseName.replace(".csv", "")} <- read.csv(file = '${files[i]}')\n`;
            }

            let catpick;
            let grade;

            if (args && message) {
                catpick = args[1];
                grade = args[2];
                if (!catpick || isNaN(Number(catpick))) return message.reply("Failed to get the catpick!");
                if (!grade || isNaN(Number(grade))) return message.reply("Failed to get the grade!");
            }
            if (interaction) {
                catpick = interaction.options.data?.find((value) => value.name == "catpick")?.value;
                grade = interaction.options.data?.find((value) => value.name == "grade")?.value;

                if (!catpick || isNaN(Number(catpick))) return interaction.followUp("Failed to get the catpick!");
                if (!grade || isNaN(Number(grade))) return interaction.followUp("Failed to get the grade!");
            }

            command += `source("${process.cwd().replaceAll("\\", "/")}/r_code/command_code/imports/FastPassV1.R")\n`;
            command += `FastPassQuest(${catpick}, ${grade})`

            fs.mkdirSync(`${process.cwd().replaceAll("\\", "/")}/r_code/command_code/`, { recursive: true });

            fs.writeFileSync(`${process.cwd().replaceAll("\\", "/")}/r_code/command_code/code.r`, command);

            os.execCommand(`R < ${process.cwd()}\\r_code\\command_code\\code.r --no-save`, (output) => {

                let editText = output.toString();
                let outputText: string = `R version 4.2.2 (2022-10-31 ucrt) -- "Innocent and Trusting"
    Copyright (C) 2022 The R Foundation for Statistical Computing
    Platform: x86_64-w64-mingw32/x64 (64-bit)\n`;

                if (editText.length >= 720) {
                    for (let i = 720; i < editText.length; i++) {
                        outputText += editText[i];
                    }
                } else {
                    outputText += editText;
                }
                if (interaction && outputText.length > 2000) {
                    let returnText = outputText.slice(0, 2000);
                    interaction.followUp(returnText);
                    outputText = outputText.replace(returnText, "");
                }
                while (outputText.length > 2000) {
                    let returnText = outputText.slice(0, 2000);
                    if (message) {
                        message.reply(returnText);
                    } else if (interaction) {
                        interaction.channel?.send(returnText);
                    }
                    outputText = outputText.replace(returnText, "");
                }
                if (message) {
                    message.reply(outputText);
                } else if (interaction) {
                    interaction.channel?.send(outputText);
                }
            })
        });
    },
    patreon: false,
    early_access: false
}


export default command;
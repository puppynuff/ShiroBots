import { command, CommandOptionType } from "../../shiro";
import { exec } from "child_process";
import fs from "fs";
import { glob } from "glob";
import path from "path";

class os_func {
    execCommand(cmd: string, callback: (output: string) => any) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                callback(error.message);
                return;
            }

            callback(stdout);
        });
    }
}
var os = new os_func();

let mathathon: command = {
    patreon: false,
    early_access: false,
    help: {
        name: "r_run",
        description: "Runs R code (For mathnasium mathathon)",
        options: [{
            name: "code",
            description: "code to run",
            type: "string",
            options: []
        }]
    },
    message: {
        name: "r_run",
        description: "Runs R code (For mathnasium mathathon",
        options: ["code"]
    },

    interaction: {
        name: "r_run",
        description: "Runs R Code (For mathnasium mathathon)",
        options: [{
            name: "r_run",
            description: "Code to run",
            required: true,
            type: CommandOptionType.STRING
        }]
    },

    async run(shiro, interaction, message, args) {
        if (interaction) return interaction.followUp("Due to option limitations, this command cannot be used as an interaction");

        let command: string = `#loading CSV files\n`;

        glob(`${process.cwd().replaceAll("\\", "/")}/r_code/command_code/*.csv`, (err, files) => {
            if (err) return message?.reply("Failed to load CSV files");
            for (let i = 0; i < files.length; i++) {
                let baseName = path.basename(files[i]);
                command += `${baseName.replace(".csv", "")} <- read.csv(file = '${files[i]}')\n`;
            }

            command += `source("${process.cwd().replaceAll("\\", "/")}/r_code/command_code/imports/FastPassV1.R")\n`;

            command += message?.toString().replace(`${shiro.prefix}r_run`, "") ?? `print("failed to get code")`;

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

                while (outputText.length > 2000) {
                    let returnText = outputText.slice(0, 2000);
                    message?.reply(returnText);

                    outputText = outputText.replace(returnText, "");
                }
                return message?.reply({ content: outputText })
            })
        });

    },
}

export default mathathon;
export { os };
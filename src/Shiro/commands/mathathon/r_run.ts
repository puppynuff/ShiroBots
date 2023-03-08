import { command } from "../../shiro";
import { exec } from "child_process";
import fs from "fs";

class os_func {
    execCommand(cmd: string, callback: (output: string) => any) {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
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
            type: 3
        }]
    },

    async run(shiro, interaction, message, args) {
        if (interaction) return interaction.followUp("Due to option limitations, this command cannot be used as an interaction");


        let command: string = message?.toString().replace(`${shiro.prefix}r_run`, "") ?? `print("failed to get code")`;

        let text = "R output";
        fs.mkdirSync(`${process.cwd().replaceAll("\\", "/")}/r_code/command_code/`, { recursive: true });

        fs.writeFileSync(`${process.cwd().replaceAll("\\", "/")}/r_code/command_code/code.r`, command);

        os.execCommand(`R < ${process.cwd()}\\r_code\\command_code\\code.r --no-save`, (output) => {

            let editText = output.toString();
            let outputText: string = `R version 4.2.2 (2022-10-31 ucrt) -- "Innocent and Trusting"
Copyright (C) 2022 The R Foundation for Statistical Computing
Platform: x86_64-w64-mingw32/x64 (64-bit)`;

            for (let i = 713; i < editText.length; i++) {
                outputText += editText[i];
            }

            return message?.reply({ content: outputText })
        })

    },
}


export default mathathon;
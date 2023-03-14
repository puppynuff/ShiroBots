//! Yet another discord bot!

//? Importing modules
import { GatewayIntentsString, Client, Message, CommandInteraction, Interaction, ActivityType } from "discord.js";
import glob from "glob";

//? Creating Class for discord bot
export default class mathathon {
    //? Creating variables
    client: Client;
    commands: Array<command>;
    commandNames: Array<string>;
    prefix: string = "s!";
    commandHelp: Array<{
        name: string;
        description: string;
        options: Array<{
            type: string;
            name: string;
            description: string;
            options: Array<string>;
        }>;
    }>;

    //? Creating the class
    constructor(token: string, intents: Array<GatewayIntentsString>) {
        //? Setting variables
        this.client = new Client({
            intents: intents,
        });
        this.commands = [];
        this.commandNames = [];
        this.commandHelp = [];
        //? Running the event handler
        this.#eventHandler();

        //? Logging into the client
        this.client.login(token);


    }

    //? Event handler
    #eventHandler() {
        //? When the client logs on, tell the user and run the command register
        this.client.on("ready", async () => {
            console.log(`Logged in as ${this.client.user?.tag}`);
            this.#registerCommands();
            this.client.user?.setPresence({
                status: "dnd",
                activities: [{
                    name: "to s!r_run",
                    type: ActivityType.Listening
                }]
            })
        });

        //? Run the commands with the interaction object
        this.client.on("interactionCreate", async (interaction) => {

            //? If the interaction isn't a command return.
            if (!interaction.isCommand()) return;
            await interaction.deferReply({ ephemeral: false });

            //? Find the command and run it
            for (let i = 0; i < this.commands.length; i++) {
                if (this.commands[i].interaction.name !== interaction.commandName) continue;
                //? Try catch statement in case there is an error (Doesn't normally work.)
                try {
                    //? Getting the command and returning
                    await this.commands[i].run(this, interaction, undefined, undefined);
                    return;
                } catch (err) {
                    console.error(err);
                    interaction.followUp({ ephemeral: true, content: "Error running command!" });
                    return;
                }
            }

            interaction.followUp({ ephemeral: true, content: "Couldn't find command! (For some reason)" });
            return;
        });

        //? Run the commands with the message object
        this.client.on("messageCreate", async (message) => {
            let msg = message.toString();
            //? Ignoring the messages that don't start with the prefix and getting the command.
            if (!msg.startsWith(this.prefix)) return;
            msg = msg.replace(this.prefix, "");

            //? Get arguments from the command
            let args: Array<string> = msg.split(" ");

            //? Get the command and run it
            for (let i = 0; i < this.commands.length; i++) {
                //? Checking if the command names match
                if (this.commands[i].message.name.toLowerCase() !== args[0].toLowerCase()) continue;

                //? Run the command in a try catch.
                try {
                    await this.commands[i].run(this, undefined, message, args);
                    return;
                } catch (err) {
                    message.reply("There was an error!");
                    console.log(err);
                    return;
                }
            }

            //? Tell them that the command wasn't found.
            message.reply("Unable to find command!");
            return;
        })
    }

    //? Registering commands
    #registerCommands() {
        //? For each file in the commands directory push the stuff into the commands array.
        glob(`${process.cwd().replaceAll("\\", "/")}/dist/Shiro/commands/mathathon/**/*.js`, async (err, files) => {
            //? If there is an error throw the error.
            if (err) throw new Error(err.message);

            //? Adding the commands into the array(s).
            for (let i = 0; i < files.length; i++) {
                const COMMAND: command = require(files[i]).default;
                if (!COMMAND?.message?.name) {
                    console.log(files[i] + " is missing required info : message.name!");
                    continue;
                };
                this.commandNames.push(COMMAND.message.name);
                this.commands.push(COMMAND);
                this.commandHelp.push(COMMAND.help);

                //? This is required to not have an error with typescript.
                if (this.client.isReady()) {
                    //? Creating the command.
                    this.client.application.commands.create(COMMAND.interaction);
                }
            }
        })
    }
}

//? Command type
export interface command {
    interaction: {
        type?: 1 | 2 | 3;
        name: string;
        name_localizations?: {};
        description: string;
        description_localizations?: {};
        options?: Array<commandOption>;
        default_member_permissions?: string;
        dm_permission?: boolean;
        default_permission?: boolean;
    };
    message: {
        name: string;
        description: string;
        options?: Array<string>;
    };
    help: {
        name: string;
        description: string;
        options: Array<{
            type: string;
            name: string;
            description: string;
            options: Array<string>;
        }>;
    };
    patreon: boolean;
    early_access: boolean;
    run: (mathathon: mathathon, interaction: CommandInteraction | undefined, message: Message | undefined, args: Array<string> | undefined) => void;
}

//? Command option type
interface commandOption {
    type: number;
    name: string;
    name_localizations?: {};
    description: string;
    description_localizations?: {};
    required?: boolean;
    choices?: Array<{
        name: string;
        name_localizations?: {},
        value: number | string;
    }>;
    options?: Array<commandOption>;
    channel_type?: {};
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}

export let CommandOptionType: commandOptionTypes = {
    SUB_COMMAND: 1,
    SUB_COMMAND_GROUP: 2,
    STRING: 3,
    INTEGER: 4,
    BOOLEAN: 5,
    USER: 6,
    CHANNEL: 7,
    ROLE: 8,
    MENTIONABLE: 9,
    NUMBER: 10,
    ATTACHMENT: 11
}


interface commandOptionTypes {
    SUB_COMMAND: 1;
    SUB_COMMAND_GROUP: 2;
    STRING: 3;
    INTEGER: 4;
    BOOLEAN: 5;
    USER: 6;
    CHANNEL: 7;
    ROLE: 8;
    MENTIONABLE: 9;
    NUMBER: 10;
    ATTACHMENT: 11;
}
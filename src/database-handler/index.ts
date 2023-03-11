import fs from "fs";

//? This will update more as I update the bot farther
export default class database {
    file_path: string;
    constructor(file_path: string) {
        this.file_path = file_path;
    }

    save_user_data(userID: string, content: {
        userID: string;
        data: {};
    }) {
        const FILE_PATH = this.file_path;

        try {
            fs.writeFileSync(`${FILE_PATH}/${userID}.json`, JSON.stringify(content, null, 4));
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    find_user_data(userID: string) {
        const FILE_PATH = this.file_path;

        try {
            let fsBuffer: undefined | null | Buffer = fs.readFileSync(`${this.file_path}/${userID}.json`);

            if (!fsBuffer || fsBuffer == null) return false;

            let text = fsBuffer.toString();

            let content = JSON.parse(text);

            return content;
        } catch (err) {
            return false;
        }
    }

    delete_user_data(userID: string) {
        try {
            fs.unlinkSync(`${this.file_path}/${userID}.json`);
            return true;
        } catch (err) {
            return false;
        }
    }

    save_bot_data(file_name: string, data: any) {
        const FILE_PATH = this.file_path;

        if (!fs.existsSync(`${process.cwd().replaceAll("\\", "/")}/database/bot/`)) {
            fs.mkdirSync(`${process.cwd().replaceAll("\\", "/")}/database/bot/`);
        }
        fs.writeFileSync(`${process.cwd().replaceAll("\\", "/")}/database/bot/${file_name}.json`, JSON.stringify(data, null, 4));
    }

    read_bot_data(file_name: string) {
        try {
            return JSON.parse(fs.readFileSync(`${process.cwd().replaceAll("\\", "/")}/database/bot/${file_name}.json`).toString());
        } catch (err) { }
    }
}
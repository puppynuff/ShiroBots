//! Currently not working

import user_database, { SHIRO } from "../..";
import glob from "glob";
import fs from "fs";

export default function checkBirthdays() {
    if (!user_database) {
        return;
    }
    let data = user_database.read_bot_data("birthday_check");
    let date = new Date();
    if (!data) {
        user_database.save_bot_data("birthday_check", {
            last_check: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        })
        checkBday(date);
    } else {
        let day = Number(data.last_check.split("/")[0]);
        let month = Number(data.last_check.split("/")[1]);
        let year = Number(data.last_check.split("/")[2]);

        if (date.getDate() <= day && date.getMonth() + 1 <= month && date.getFullYear() <= year) {
            user_database.save_bot_data("birthday_check", {
                last_check: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            })
        } else {
            user_database.save_bot_data("birthday_check", {
                last_check: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            })
            checkBday(date);
        }
    }


    data = {};
    setTimeout(rerunFunction, 1000);
}

function rerunFunction() {
    checkBirthdays()

}

function checkBday(date: Date) {
    glob(`${process.cwd().replaceAll("\\", "/")}/database/*.json`, async (err, files) => {
        for (let i = 0; i < files.length; i++) {
            try {
                let data = JSON.parse(fs.readFileSync(files[i]).toString());

                if (data.data?.birthdayInfo?.birthday) {
                    let bday = data.data?.birthdayInfo?.birthday.split("/")[0];
                    let bmonth = data.data?.birthdayInfo?.birthday.split("/")[1];
                    let bdate = `${bday}/${bmonth}`;

                    let today = `${date.getDate()}/${date.getMonth() + 1}`;

                    if (bdate != today) continue;

                    if (!SHIRO) return;
                    SHIRO.client.guilds.cache.forEach((guild) => {
                        let user = guild.members.cache.get(data.userID);

                        if (user) user.send("Happy birthday from the Shiro Development team!");
                    })
                }
            }
            catch (err) {
            }
        }
    });
}
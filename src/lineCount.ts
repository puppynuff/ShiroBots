import { glob } from "glob";
import fs from "fs";

let length = 0;

glob(`${process.cwd().replaceAll("\\", "/")}/src/**/*.ts`, (err, files) => {
    for (let i = 0; i < files.length; i++) {
        length += fs.readFileSync(files[i]).toString().split("\n").length;
    }
    length += fs.readFileSync(`${process.cwd().replaceAll("\\", "/")}/ai-art/art_api.py`).toString().split("\n").length;
    console.log(length);
})
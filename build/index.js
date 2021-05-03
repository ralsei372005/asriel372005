"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// Use the Client that are provided by @typeit/discord NOT discord.js
const discord_1 = require("@typeit/discord");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
async function start() {
    const client = new discord_1.Client({
        classes: [
            path.join(__dirname, '/index.ts'),
            path.join(__dirname, '/index.js')
        ],
        silent: false,
        variablesChar: ':'
    });
    await client.login(process.env.TOKEN);
}
start();
let AppDiscord = class AppDiscord {
};
AppDiscord = tslib_1.__decorate([
    discord_1.Discord() // Decorate the class
], AppDiscord);
//# sourceMappingURL=index.js.map
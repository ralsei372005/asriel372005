// Use the Client that are provided by @typeit/discord NOT discord.js
import { Client, Discord } from '@typeit/discord'
import path = require('path');
import dotenv = require('dotenv');
dotenv.config()

async function start () {
  const client = new Client({
    classes: [
      path.join(__dirname, '/index.ts'),
      path.join(__dirname, '/index.js')
    ],
    silent: false,
    variablesChar: ':'
  })

  await client.login(process.env.TOKEN)
}

start()

@Discord() // Decorate the class
abstract class AppDiscord {
}
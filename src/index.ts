import { Client } from 'discord.js'
import * as fs from 'fs'

// #region basic functions (log, loadJSON)
const log = (...texts: String[]) =>
  texts.forEach((text) =>
    console.log(`[${new Date().toLocaleString()}] ${text}`)
  )
const loadJSON = (path: fs.PathLike) =>
  JSON.parse(fs.readFileSync(path).toString())
// #endregion
// #region custom functions ()

// #endregion

const client = new Client()

client.on('ready', () => {
  log(`${client.user.tag} is ready.`)
})

client.on('', () => {
  
})

client.login()

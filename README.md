# My Discord.js bot template
Including:
- index.ts
  - `log` `loadJSON` prepared
- package.json
  - (production) `discord.js` with optional packages (listed [here](https://discord.js.org/#/docs/main/stable/general/welcome)) added
    - (`@discordjs/voice` is not added)
  - (development) `eslint`, `prettier` and plugins added
- .gitignore
  - ignores `node_modules` `package-lock.json`
- .eslintrc.json
- .prettierrc.json
- tsconfig.json
- nodemon.json
  - `ts-node src/index.js`
---
- remove-not-needed-files.bat
  - deletes `.git` `LICENSE` `README.md`

#!/usr/bin/env node

const {existsSync, readFileSync, writeFileSync} = require('fs')
const gunCompiledFilePath = 'node_modules/gun/gun.js'
const gunCompiledMinifiedFilePath = 'node_modules/gun/gun.min.js'
const toRemove = `Gun.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");`
const minifiedToRemove = `,c.log.once("welcome","Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!")`

const removeAnnoyingConsoleLog = (filePath, removeString) => {
    if (existsSync(filePath)) {
        const fileToModify = readFileSync(filePath).toString()

        if (fileToModify.indexOf(removeString) !== -1) {
            const modified =  fileToModify.replace(removeString, "// sorry not sorry")
            writeFileSync(filePath, modified)
            console.debug('annoying ass log was removed from the file', filePath)
        }
    }
}

removeAnnoyingConsoleLog(gunCompiledFilePath, toRemove)
removeAnnoyingConsoleLog(gunCompiledMinifiedFilePath, minifiedToRemove)
const {defineConfig} = require("cypress");

module.exports = defineConfig({
    "watchForFileChanges": false,
    e2e: {
        baseUrl: 'https://www.xe.com'
    },
});

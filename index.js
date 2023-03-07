const fs = require('fs')

fs.writeFile("current timestamp.txt", "current timestamp", (ev) => {
    console.log("file has been created successfully")
})

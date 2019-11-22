const csvFilePath='./csv/input_file.csv'
const csv=require("csvtojson")
const fs = require('fs')
const resultFile = 'results.txt'

try {
    if (fs.existsSync(resultFile)) {
        console.log('Results file exist. Deleting file ...')
        fs.truncate(resultFile, 0, (err) => {
            console.log(err)
        })
    }
  } catch(err) {
    console.error(err)
  }

csv()
.fromFile(csvFilePath)
.then((jsonArrayObj) => {
    jsonArrayObj.forEach((row) => {
        fs.appendFile(resultFile, JSON.stringify(row)+'\n', (err)=>{
            if(err)
                console.log(err)
        })
    })
  }).then(() => {
      console.log('Completed.')
  })
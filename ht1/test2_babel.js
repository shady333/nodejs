import csv from 'csvtojson';
import fs from 'fs';

var resultFile = 'results.txt';
var csvFilePath = './csv/input_file.csv';

try {
  if (fs.existsSync(resultFile)) {
    console.log('Results file exist. Deleting file ...');
    fs.truncate(resultFile, 0, (err) => {
      console.log(err);
    });
  }
} catch (err) {
  console.error(err);
}

csv().fromFile(csvFilePath).then((jsonArrayObj) => {
  jsonArrayObj.forEach((row) => {
    fs.appendFile(resultFile, JSON.stringify(row) + '\n', (err) => {
      if (err) console.log(err);
    });
  });
}).then(() => {
  console.log('Completed.');
});
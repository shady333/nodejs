// "use strict";

import csv from 'csvtojson';
import fs from 'fs';

var resultFile = 'results.txt';
var csvFilePath = './csv/input_file.csv';

try {
  if (fs.existsSync(resultFile)) {
    console.log('Results file exist. Deleting file ...');
    fs.truncate(resultFile, 0, function (err) {
      console.log(err);
    });
  }
} catch (err) {
  console.error(err);
}

csv().fromFile(csvFilePath).then(function (jsonArrayObj) {
  jsonArrayObj.forEach(function (row) {
    fs.appendFile(resultFile, JSON.stringify(row) + '\n', function (err) {
      if (err) console.log(err);
    });
  });
}).then(function () {
  console.log('Completed.');
});
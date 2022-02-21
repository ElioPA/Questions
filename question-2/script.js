/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

 const fs = require('fs');
 const args = process.argv.slice(-1);
 
 let arrayData = [];
 function main() {
 
     const createReader = fs.createReadStream(args.toString());
     const createWriter = fs.createWriteStream('output.csv');
 
     createReader.on('data', data => {
         arrayData = data.toString().split(/,|\r\n/);
     })
 
     createReader.on('end', () => {
 
         let hashProduct = {}, usersTemp = {};
 
         for (let i = 4; i < arrayData.length; i++) {
             usersTemp = {};
             if (!hashProduct[arrayData[i + 1]]) {
                 usersTemp[arrayData[i]] = arrayData[i];
 
                 if (arrayData[i + 3] === 'impression') {
                     hashProduct[arrayData[i + 1]] = { users: usersTemp, visitasUnicas: 1, clicksUnicos: 0 }
 
                 } else if (arrayData[i + 3] === 'click') {
                     hashProduct[arrayData[i + 1]] = { users: usersTemp, visitasUnicas: 1, clicksUnicos: 1 }
                 }
 
             } else {
                 if (!hashProduct[arrayData[i + 1]].users[arrayData[i]]) {
 
                     hashProduct[arrayData[i + 1]].users[arrayData[i]] = arrayData[i];
 
                     if (arrayData[i + 3] === 'impression') {
                         hashProduct[arrayData[i + 1]].visitasUnicas++;
 
                     } else if (arrayData[i + 3] === 'click') {
                         hashProduct[arrayData[i + 1]].clicksUnicos++;
                     }
                 } 
             }
 
         }
 
         let registro = "", archivoFinal = "productId,clicks,impressions,ctr\r\n";
         let ctr = 0;
 
         for (const [key, value] of Object.entries(hashProduct)) {
             ctr = Math.round((value.clicksUnicos / value.visitasUnicas) * 1000) / 1000;
             registro = `${key},${value.clicksUnicos},${value.visitasUnicas},${ctr}\r\n`;
             archivoFinal += registro; 
         }
 
         createWriter.write(archivoFinal, 'utf-8')
     })
 
 }
 
 main();
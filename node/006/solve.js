// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
// const fs = require('fs');
// const { parse } = require('path');

//rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1 이름바꾸기
// let 변수 = '문홍킴' // 사용자 이름
// let 날짜 = new Date()
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//     console.log(err);
// })

// 2 파일읽기
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 3
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4 파일쓰기
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err)
// });

// 5 추가하기
// fs.appendFile('./test2.txt', '\nhello world 3', (err)=>{
//     console.log(err)
// });

// 6
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err)
// });

// 7

    // ref: http://stackoverflow.com/a/1293163/2343
    // This will parse a delimited string into an array of
    // arrays. The default delimiter is the comma, but this
    // can be overriden in the second argument.
//     function CSVToArray( strData, strDelimiter ){
//         // Check to see if the delimiter is defined. If not,
//         // then default to comma.
//         strDelimiter = (strDelimiter || ",");

//         // Create a regular expression to parse the CSV values.
//         var objPattern = new RegExp(
//             (
//                 // Delimiters.
//                 "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

//                 // Quoted fields.
//                 "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

//                 // Standard fields.
//                 "([^\"\\" + strDelimiter + "\\r\\n]*))"
//             ),
//             "gi"
//             );


//         // Create an array to hold our data. Give the array
//         // a default empty first row.
//         var arrData = [[]];

//         // Create an array to hold our individual pattern
//         // matching groups.
//         var arrMatches = null;


//         // Keep looping over the regular expression matches
//         // until we can no longer find a match.
//         while (arrMatches = objPattern.exec( strData )){

//             // Get the delimiter that was found.
//             var strMatchedDelimiter = arrMatches[ 1 ];

//             // Check to see if the given delimiter has a length
//             // (is not the start of string) and if it matches
//             // field delimiter. If id does not, then we know
//             // that this delimiter is a row delimiter.
//             if (
//                 strMatchedDelimiter.length &&
//                 strMatchedDelimiter !== strDelimiter
//                 ){

//                 // Since we have reached a new row of data,
//                 // add an empty row to our data array.
//                 arrData.push( [] );

//             }

//             var strMatchedValue;

//             // Now that we have our delimiter out of the way,
//             // let's check to see which kind of value we
//             // captured (quoted or unquoted).
//             if (arrMatches[ 2 ]){

//                 // We found a quoted value. When we capture
//                 // this value, unescape any double quotes.
//                 strMatchedValue = arrMatches[ 2 ].replace(
//                     new RegExp( "\"\"", "g" ),
//                     "\""
//                     );

//             } else {

//                 // We found a non-quoted value.
//                 strMatchedValue = arrMatches[ 3 ];

//             }


//             // Now that we have our value string, let's add
//             // it to the data array.
//             arrData[ arrData.length - 1 ].push( strMatchedValue );
//         }

//         // Return the parsed data.
//         return( arrData );
//     }

// importScripts 

// CSVToArray(userdata.csv)


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// fs.mkdir('./yoyo', (err)=>{
//     console.log(err)
// });

const fs = require('fs');

fs.readFile('./userdata.csv', 'utf8', (err, csvdata) => {
        // console.log(err);
        //\r\n 개행문자
        console.log(csvdata.split('\r\n'));
        let a = csvdata.split('\r\n')
        a.forEach(element => {
            console.log(element[/[a-z]/)
        });
})


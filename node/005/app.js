// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/path.html
const path = require('path');

//구분자는 OS마다 다르기때문에 폴더나 파일 경로를 사용할 때 path.sep을 사용해줘야 한다. 여기에서는 \
console.log(`구분자 : ${path.sep}`);
console.log(`디렉토리 : ${path.dirname(__filename)}`);
console.log(`파일이름 : ${path.basename(__filename)}`);
console.log(`확장자 : ${path.extname(__filename)}`);

console.log(__filename);
console.log(__dirname);
//console 종류 log dir info table timeEnd... console.누르면 다 보임
console.table(path.parse(__filename));
console.log(path.join(__dirname, 'source'))
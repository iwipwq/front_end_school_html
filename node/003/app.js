const http = require('http')
//웹 서버 통신을 하기 위한 기능을 모아논것 (노드 내부 모듈[무설치])
//아까전에 만들었던것(002) 사용자 정의 모듈
const fs = require('fs');
//콜백함수 넣어주기
const app = http.createServer(function(request, response){
    let url = request.url;
    console.log(`request : ${request}`)
    console.log(`request.url : ${request.url}`)
    //www.naver.com/ 에서 /를 말하는 것 (메인페이지를 들어왔을때)
    if (request.url == '/') {
        url = '/index.html';
    } else if (request.url == '/blog') {
        url = '/blog.html';
        //항상 메인페이지정보와 페비콘 두개의 정보를 받아옴
    } else if (request.url == 'favicon.ico') {
        return response.writeHead(404);
    } else {
        //HTTP_상태_코드 response 번호 404 -> 못찾았다
        response.writeHead(404);
        response.end('Not found');
    }
    response.writeHead(200);
    //url = '/index.html'
    response.end(fs.readFileSync(__dirname + url))
});
//http://127.0.0.1:3000/ 로 접속
app.listen(3000);


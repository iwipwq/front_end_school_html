// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
        id : 1,
        title : 'title1',
        content : 'content1',
        section : 'section1'
    }, {
        id : 2,
        title : 'title2',
        content : 'content2',
        section : 'section2'
    }, {
        id : 3,
        title : 'title3',
        content : 'content3',
        section : 'section3'
    }, {}
        id : 4,
        title : 'title4',,
        content : 'content3',
        section : 'section4'
    }];


    //1.'' 아무값도 안들어왔을때 
    //2.'asdf' 아무연관도 없는 값이 들어왔을때
    //3.'section1' 정확히 입력받았을때


let section = 'section3'
let data = section? blogs.filter(b =>b.section === s) : ??
let 이름 = '문홍';
let 나이 = 10;
function 한살더먹음(){
    나이 += 1;
}
//이렇게 만 쓰면 나이를 먹지 않음
//값을 가져와야함
function 값가져오기(){
    return 나이
}

//ctrl 누르고 모듈을 보면 어디에있는지 알 수 있고 가져올 수 도 있음
module.exports.이름 = 이름;
module.exports.나이 = 나이;
module.exports.한살더먹음 = 한살더먹음;
module.exports.값가져오기 = 값가져오기;
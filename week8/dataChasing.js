const aespa = ["카리나", "윈터", "지젤", "닝닝"]
//이름 끝에 하트붙이기
//item ->배열안의 원소 두번째 인자 index 부여가능(요소들의 번호)

// aespa.forEach((item, index) => {
//     aespa[index] = item + '💖';
// });

//요쇼를 순환하면서 각각의 요소에 붙여주는 다른방법 바로map
//map은 기존의 배열을 건드리지 않고 새로운 배열을 반환return한다.
const aespa2 = aespa.map((item) => {
    return item + '💖';
});

//const aespa2 = aespa.map( ( aespa => {item + '💖 })


console.log(aespa2);
console.log(aespa);
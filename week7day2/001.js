// 플랫폼에 익숙해져야 합니다. 프로그래멋, 구름EDU
// - 사용 가능 라이브러리는 미리 확인!
// 언어 선택 (속도 : c++, 풀이 : python)
// 코드 스니펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익스트라)),Cheat Seet와 A4용지는 미리 준비(인쇄해서 눈앞에 놓고 시작) 유용한 라이브러리는 미리 정리 예외처리 기억해두세요!(안해서 틀리는경우 많음)

function add(x, y){
    return x + y;
}

add(30, '10')
//'3010' <- 이렇게 되면 오답 예외처리 해야함 (try..catch나 처음부터 숫자로 바꿔서..예외처리)

//구글 입사문제 중에서 - 코딩도장
//https://codingdojang.com/scode/393?answer_mode=hide
//1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 8이 포함되어 있는 숫자의 갯수가 아니라 8이라는 숫자를 모두 카운팅 해야 함. (ex 8808은 3 8888은 4로 카운팅)

// 빈 배열을 만드는 방법
Array(10);
let x = Array(10);
x[2] = undefined
x[3] = null

// (10) [비어 있음 × 2, undefined, null, 비어 있음 × 6]
// 2: undefined
// 3: null
// length: 10
// [[Prototype]]: Array(0)
x.length = 20
x
// (20) [비어 있음 × 2, undefined, null, 비어 있음 × 16]
// 2: undefined
// 3: null
// length: 20
// [[Prototype]]: Array(0)
Array(10).fill(0);
//0으로 채우기
Array(10).fill(10);
//10으로 채우기
Array(10).fill(10);
//find, filter, map, forEach
//map -> 필터된 새 배열을 만들수(리턴)있음
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100).fill(1).map((value, index)=>value+index);
'.'.repeat(10);
'.'.repeat(10).split('.');
//▲11개 / ▼10개
'.'.repeat(9).split('.');

// 5 ~ 6시간
// 7문제

// 어려운 문제는 2시간씩 2문제
// 나머지 문제는 30분씩 4문제

// 시간이 넘어간 문제는 과감히 생략해라 -> 시간 넘어가면 풀려해도 잘 안풀림

Array.from('abc')
Array.from('ab'.repeat(10));
Array.from('a'.repeat(10));

//정답
//1. 1부터 10000까지 풀어내기
Array(100).fill(1).map((value, index)=>value+index);
//2. 문자열로 변환하기
Array(100).fill(1).map((value, index)=>value+index) + '';
//3. 8를 기준으로 잘라주기
(Array(100).fill(1).map((value, index)=>value+index) + '').split('8');
//4. length에서 -1 빼주기
(Array(100).fill(1).map((value, index)=>value+index) + '').split('8') -1;

'1, 2, 3, 4, 8, 1 ,2 ,3 ,4'.split('8')
['1, 2, 3, 4,',', 1, 2, 3, 4'],length -1

'1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2'.split(/8/g)
'1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2, 3, 4, 8, 1, 2'.split(/8/g).length -1

//파이썬 알고리즘 인터뷰 - 출제자가 낸 책

///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 몸풀기 2문제 - 2번 정답
// length -1 은 끝에 값이 헷갈릴때가 있음
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
for (let i = 0; i < s.length-1; i++) {
    console.log(s[i+1], s[i])
    console.log(s[i+1] - s[i])
}
//length에서 -1을 안해줬을 경우 20을 넘어가버려서 undefined가 출력됨
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
for (let i = 0; i < s.length; i++) {
    console.log(s[i+1], s[i])
    console.log(s[i+1] - s[i])
}
//-1을 계산하지 않고 깔끔하게 끝내는 방법 i=1 부터
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
for (let i = 1; i < s.length; i++) {
    console.log(s[i], s[i-1])
    console.log(s[i] - s[i-1])
    arr.push(s[i] - s[i-1])
}

//arr.indexOf(5) -> 3
//arr의 최솟값 찾기 null, arr(찾고싶은배열)
arr.indexOf(Math.min.apply(null, arr))

let result = s.indexOf(Math.min.apply(null, s));
//▲▽위 아래 같은 뜻임
//Math.min(..arr) <-1
let result = s.indexOf(Math.min(...arr));
console.log(s[result], s[result+1]);

//강사님 다른 풀이
let s  = [1, 3, 4, 8, 13, 17, 20];
let ss = [3, 4, 8, 13, 17, 20];

//파이썬 min([1,2,3,10,1,2]) max([1,2,3,10,1,2]) 기능처럼 만들기
//zip(['1','2','3']).['a','b','c']) [('1','a'),('2',)]
sort(compare)
//a,b를 입력받는다 value와 index값으로 나눌것이고 index에는 b의 index값이 들어간다
const zip = (a, b) => a.map((value,index)=>[value, b[index]]);
// const zip = (a, b) => a.map((v,i)=>[v, b[i]]);
// zip([1,3,4],[10,20,30]);
//오브젝트(array포함)는 함수에 인자값을 전달했을때 원본을 변경함으로 주의필요
//1빼고 나머지만 얻기 )).slice(0,-1) ->zip안의 리턴값을 슬라이스
zip(s.slice(), s.slice(1)).slice(0, -1)
//↑둘다 같은 뜻↓
zip(s.slice(0, s.length - 1), s.slice(1))

let s = [1, 3, 4, 8, 13, 17, 20];
        [3, 4, 8, 13, 17, 20]

let pairs = zip(s.slice(0, s.length - 1), s.slice(1))


//MDN sort 문서
// -1 순서유지
// 1 순서바꿈
// 오름차순 정렬:
// 뒤에 값이 더 크면 순서 유지
// 뒤에 값이 작으면 순서 바꿈

function compare(a,b) {
    if (a > b) {
        return -1;
    }
    if (a <b) {
        return 1;
    }
    return 0;
}
//↑이 식을 이용해서↓로 바꿔서 사용
function compare(a,b) {
    if (a[1] - a[0] > b[1] - b[0]) {
        return -1;
    }
    if (a[1] - a[0] <b[1] - b[0]) {
        return 1;
    }
    return 0;
}

pairs.sort(compare)
pairs.sort(compare)[0]
//↑여기가 어렵다면 그냥 순회돌아라↓
let s = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value,index)=>[value, b[index]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

//init은 초기값, for 문 안에서는 최솟값을 비교하는 용도로 사용
//JavaScript Number.MAX_VALUE; /***MAX_SAFE_INTEGER <- 추천 이걸 주로 사용함
let init = Number.MAX_SAFE_INTEGER;
let init = Number.MIN_SAFE_INTEGER;
let init = paris[0][1] - pairs[0][0]

//for문 돌면서 최솟값 구하기 - i[1] - i[0] 자기보다 작은거 있음 넣어준다
//result 최종 결과값
let result = [];

for (let i of pairs) {
    console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result)

// 몸풀기 끝 //

//목차(기본 자료구조 및 알고리즘)
//1. 스택과 큐
class Stack {
    //()안에 stack에서 받은 값이 들어감 constructor는 자료를 셋팅하는 아이
    //여기서 this는 인스턴스의 s 
    constructor(){
        this.arr = [];
    }
    
    push(data) {
        this.arr.push(data);
    }

    //pop엔 index가 없지만 index를 구현해달라했다면? pop(index) 파이썬pop처럼
    pop(index=this.arr.length-1) {
        //index가 입력이 안되었을 때
        //index가 입력이 되었을대
        if (inddex === this.arr.length-1){
            return this.arr.pop();
        }
        // return [...this.arr.slice(0, index),
        //         ...this.arr.slice(index +1)] arr에 반영이 안됨
        let result = this.arr[index]
        this.arr = [...this.arr.slice(0,index), ...this.arr.slice(index + 1)]
        return result
    }

    empty() {
        if(this.arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    top(){
        //console에서는 아래코드만 해도 문제가 없습니다.
        // return this.arr[this.arr.length-1]
        if(this.arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }
    
    bottom(){
        //console에서는 아래 코드만 해도 문제가 없습니다.
        //return this.arr[0]
        try{
            return this.arr[0]
        }
        catch(error) {
            return undefined
        }
    }
}

// pop() 안에들어가는 값 이해하기
// function test(x=10){
//     return x
// }
// test()
// <-10
// test(100)
// <-100

// function test (x=10){
//     if (x === 10){
//         return x
//     }
// }


/////더 줄인 코드 (안소현님코드)/////
class Stack {
    constructor(){
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    //pop엔 index가 없지만 index를 구현해달라했다면? pop(index) 파이썬pop처럼
    pop(index = this.arr.length - 1) {
        // index가 입력되지 않으면
        if (index === this.arr.length - 1) {
          return this.arr.pop();
        } else {
          // index가 입력 되면
          let result = this.arr.splice(index, 1)
          return result;
        }
      }

    empty() {
        if(arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    top(){
        return this.arr[this.arr.length-1]
    }
    
    bottom(){
        return this.arr[0]
    }
}
///////////////////////////////


let s = new Stack()
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop();
console.log(s);


//우리가 하려는 것 -> 개념을 이해하고 자료형으로 구현 할 수 있는가? 왜? ->성능최적화
let s = new Stack()
s.push(10);
s.push(20);
s.push(30);
s.pop();
console.log(s);
//2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 :
// 알고리즘 시각화 visualgo.net/ko

const list = {
    head: {
        value: 90,
        next: {
            value:2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: null
                }
            }
        }
    }
}

// s = new Node(30)
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new node('init');
        this.head = init;
        this.tail = init;

        // this.d = data ->data를 비효율적
        this.현재노드 = undefined;
        this.데이터수 = 0;
    }

    length(){
        return this.데이터수;
    }

    append(data){
        let 새로운노드 = new Node(data);
        //마지막 값(null)은 새로운 노드가 됨
        this.tail.next =새로운노드;
        //마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.데이터수 +- 1;
    }
}

//console
l = new LinkedList();
1.append(1)
1.append()
1.append()
1.append()
1.append()
1.append()
1.append()

//3. 정렬
//4. 페이지 교체 알고리즘
//5. 트리와 그래프
//6. 트리의 순회

// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도
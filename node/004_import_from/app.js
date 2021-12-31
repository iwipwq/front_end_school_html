// import {이름, 나이, 한살더먹음, 값가져와} from './two.js';

//전체 모듈을 two.js에서 가져올건데 개인프로필이라는 이름으로 가져올꺼야
import * as 개인프로필 from './two.js';
// const 개인프로필 = require('./two');

//위에 맨 첫줄 import {이름,나이, ... ... 중략} from 으로 가져올때
// console.log(이름);
// console.log(나이);
// 한살더먹음();
// 한살더먹음();
// console.log(나이); //이번에는 출력이 되었죠?
// console.log(값가져와());
console.log(개인프로필.이름);
console.log(개인프로필.나이);
개인프로필.한살더먹음();
개인프로필.한살더먹음();
console.log(개인프로필.나이); //* as 개인프로필로 갖고올때
console.log(개인프로필.값가져와());
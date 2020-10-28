const con = document.getElementById('log');
const log = (...args) => con.innerHTML += '<br>' + args.join(' ');

// switch의 중괄호는 특수 label block을 말하는 것이다.
// switch의 break문은 익명의 switch label을 만들어줌
let a = 3, b = 0;
// 조건이 한정적이고 값이 다양할 때
// switch(a) {
//     // 구조는 => case 식 : 
//     case b++: log('a', b); break;
//     case b++: log('b', b); break;
//     case b++: log('c', b); break;
//     case b++: log('d', b); break;
//     default:
// }

// 조건이 다양하고 값이 한정적일 때
switch(true) {
    // 구조는 => case 식 : 
    case a > 5: log('a', a); break;
    case a > 4: log('b', a); break;
    case a > 3: log('c', a); break;
    case a > 2: log('d', a); break;
    default:
}


// *추가 공부
// label set 에서 충돌하는 경우가 무엇인지?














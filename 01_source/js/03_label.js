const con = document.getElementById('log');
const log = (...args) => con.innerHTML += '<br>' + args.join(' ');

// log('a', 1, 'con');
// log('b', 2, 'ccon');

// for (const i of [1,2,3,4]) {
//     if (i === 3) break;
//     log(i);
// }

// 같은 scope내에서는 동일한 label 사용 불가
// ABC:
// ABC:

// block scope를 사용해도 안된다
// ABC:
// {
//     ABC:
// }

// label이나 변수는 함수 스코프를 탄다.


// ABC:
// () => {
//     ABC:
// }

// abc: {
//     log('a');
//     if (location.href.includes('.com')) break abc;
//     log('b');
//     let b = 4;
// }

// log('c');

// // a 자유변수에 대한 클로져가 f함수다
// // 자유변수의 우선순위가 낮다.

// k1:{
//     let a = 3;
//     const f = () => {
//         let a = 5;
//         k:{
//             log('function active');
//             break k;
//             log('function active2');
//         }
//         log(a);
//     }
// }















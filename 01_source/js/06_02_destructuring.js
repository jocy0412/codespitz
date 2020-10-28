const log = (data) => { 
    document.getElementById('print').innerHTML += data + '<br>';
};

// 내장반복처리기

// Array destructuring(배열해체), 정식 명칭은 iterable destructuring

const iter = {
    [Symbol.iterator](){return this;},
    arr:[1 ,2 ,3 ,4],
    next(){
        return {
            done: this.arr.length == 0,
            value: this.arr.pop()
        };
    }
};

// iterable destructuring (배열해체)
// const [a,...b] = iter;
// console.log(a, b);
// 4, [3,2,1]

// Spread (펼치기)
const a = [...iter];
console.log(a);
// [4,3,2,1]


// -------------- 배열해체 사용 예제 --------------

// const iter = {
//     [Symbol.iterator](){return this;},
//     data: [1,2,3,4],
//     next(){
//         return {
//             done: this.data.length == 0,
//             value: this.data.pop()
//         };
//     }
// };

// 배열에는 Symbol.iterator 메소드가 있다.

// 아래와 같이 사용 가능
// const [k, ...l] = iter[Symbol.iterator]();
// // const [k, ...l] = iter;
// const [k, ...l] = [1,2,3,4];
// const [k, h, ...l] = "ABCD";
// log(k);
// log(h);
// log(l);
// log(typeof [][Symbol.iterator]);
// log(typeof ""[Symbol.iterator]);

// -------------- 배열해체 사용 예제 --------------
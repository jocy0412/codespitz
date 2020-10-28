const log = (data) => { 
    document.getElementById('print').innerHTML += data + '<br>';
};

// iterator의 구현을 돕는 generator

// const N2 = class{
//     constructor(max){
//         this.max = max;
//     }
//     [Symbol.iterator](){
//         let cursor = 0, max = this.max;
//         return {
//             done:false,
//             next(){
//                 if(cursor > max){
//                     this.done = true;
//                 }else{
//                     this.value = cursor * cursor;
//                     cursor++;
//                 }
//                 return this;
//             }
//         };
//     }
// }

// 위를 generator로 바꾸게 되면 아래처럼 바꾸게 된다.

const generator = function*(max){
    let cursor = 0;
    while(cursor < max){    // next()의 역할
        yield cursor * cursor;  // 
        cursor++;
    }
};







// this는 동적 context
const log = (data) => { 
    document.getElementById('print').innerHTML += data + '<br>';
};

// 1. iterator interface
    // 1) next라는 키를 갖고
    // 2) 값으로 인자를 받지 않고 IteratorResultObject를 반환하는 함수가 온다.
    // 3) IteratorResultObject는 value와 done이라는 키를 갖고 있다.
    // 4) 이 중 done은 계속 반복할 수 있을지 없을지에 따라 불린값을 반환한다.

// iterator interface 예제

// const iterator = {
//     data:[1,2,3,4],
//     next() {
//         return {
//             done: this.data.length == 0,
//             value: this.data.pop()
//         };
//     }
// };

// let iResult = iterator.next();

// log(iResult.value + ' : ' + iResult.done);
// iResult = iterator.next();
// log(iResult.value + ' : ' + iResult.done);
// iResult = iterator.next();
// log(iResult.value + ' : ' + iResult.done);
// iResult = iterator.next();
// log(iResult.value + ' : ' + iResult.done);
// iResult = iterator.next();
// log(iResult.value + ' : ' + iResult.done);


// 2. iterable interface 예제

const Iterator = class{
    constructor(){
        this.data = [1,2,3,4];
    }
    next() {
        return {
            done: this.data.length == 0,
            value: this.data.pop()
        };
    }
};

const s = Symbol();
const iterable = {
    // 키,콜론,펑션 , 메소드 문법, object method literal 
    [Symbol.iterator]() {
        return new Iterator;
    }
}

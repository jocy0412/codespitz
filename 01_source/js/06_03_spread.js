const log = (data) => { 
    document.getElementById('print').innerHTML += data + '<br>';
};

// 내장반복처리기
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

// spread(펼치기)
// 함수 아닌 곳에서 사용되면 spread이다. 묶어서 펼친다

// Rest Parameter (나머지 인자)
// 함수 선언시에 사용되면 rest parameter다
const test = (...arg) => console.log(arg);
test(...iter);
// [4,3,2,1]








// this는 동적 context
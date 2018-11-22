// function testFunc(val){
//     if(val > 0){
//         console.log("val = %d", val);
//         testFunc(--val);
//     }
// }
// testFunc(10);

// var method = function(val){
//     if(val > 0){
//         console.log("val = %d", val);
//     arguments.callee(--val);
//     }
// }
// method(5);

// function testFunc(){
//     var a = 1;
//     function innerMethod(){
//         return a + 1;
//     }
//     return innerMethod();
// }
// var b = testFunc();
// console.log(b);
// var b = testFunc(3);
// console.log(b);



// function makeAdder(a){
//     return function(b){
//         return a+b;
//     }
// }
// x= makeAdder(3);
// console.log(x); //함수를 리턴한다!
// y= makeAdder(20);
// console.log(y);

// console.log(x(5));//리턴 된 함수에 
// console.log(y(7));


function makeAdder(a){
    return function(b){  return a+b;  };
}
x= makeAdder(3);
console.log(x); //함수를 리턴한다!
// x == function(b){
//     return 3+b;
// }
console.log(x(5));//리턴 된 함수에 
// x == 3+b;






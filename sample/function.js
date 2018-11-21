
// // function add(x,y){
// //     var total = x+y;
// //     return total;
// // }
// // var result = add(2,3);
// // console.log(result);


// // function add2(){
// //     var sum = 0;
// //     for(var i=0 , j=arguments.length ; i < j ; i++){
// //         sum += arguments[i];
// //     }
// //     return sum;
// // }
// // console.log(add2(2,3,4,5));


// var avg = function(){
//     var sum = 0; 
//     for (var i  = 0, j = arguments.length; i < j ; i++){
//         sum += arguments[i];
//     }
//     return sum / arguments.length;
// }
// console.log(avg(3,4,5,6));
// console.log(avg);
// console.log(avg(7,8,9,3,4,5,6));
// console.log(avg);
// console.log(avg = 3);
// console.log(avg);
// //console.log(avg(3,4,5,6));
// // avg(1,2,3,4,5);
// // console.log(avg);

// //var newVal = avg();

// console.log("------------------------------------------------------------------------");


function makePerson(first, last){
    return{
        first: first,
        last : last,
        fullName : function(){
            return this.first + ' ' + this.last;
        },
        fullNamereversed: function(){
            return this.last + ', ' + this.first;
        }
    }
}

var person = makePerson();
console.log(person.fullName());
console.log(person.fullNamereversed());

var person = makePerson("min", "K");
console.log(person.fullName());
console.log(person.fullNamereversed());
console.log("-----------z-----");
var func = person.fullName;
console.log(func());
console.log(func);
// console.log("----------------");
// var func = person.fullName();
// //console.log(func());
// console.log(func);




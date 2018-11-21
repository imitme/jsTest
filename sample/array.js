// var arr = new Array();  //객체만듬
// arr[0] = "dog";
// arr[1] = 23;
// arr[2] = "cat";
// console.log(arr[2]);
// console.log(arr.length);

// var arr2 = new Array("cat", "dog");
// arr2[100] = "cat";
// console.log(arr2.length);
// console.log(arr2[99]);

var arr3 = ["cat", "dog", "tiger"];
arr3[4] = "rabbit";
console.log(typeof(arr3[0]));

// for(var i=0; i < arr3.length ; i++){
//     console.log("adsfasdfsd %s    %d", arr3[i], arr3[i]);
// }

for(var i=0, len = arr3.length ; i < len ; i++){
    console.log("New result =  %s ", arr3[i]);
}
for(var i=0, item ; item =  arr3[i] ; i++){
    console.log("result2 =  %s --", item);
}
for(var i in arr3){
    console.log("result3 =  %s ", i);
}


console.log("-Test------------------------------------------------------------------------");
function add2(a,b){
    var result = a+b;
    return function() { console.log("Result = %d",result); };
}
var x = add2(10,10);    
x();   //console.log( x);


function add3(a,b, callback){
    var result = a+b;
    callback(result);
}
var y = add3(10,10,function(a){ console.log("Result = %d",a);} );
//console.log( y);
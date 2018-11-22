function oldAdd(a,b){
    var i =20;
    var j =20;
    var k =60;
    return a+b;
}

var result = oldAdd(1,3);
result = oldAdd(1,result);
result = oldAdd(4,result);

console.log(result);

//result값이 넘어와야 하는데, 결과값을 받은 후 처리가 넘어가야 하는데 그러지 못한다.
//그 다음 처리를 할당해 주기 위해서, 최종 실행함수를 받아 넘기는 방법.

//버튼은 화면에 배치하면, 버튼이 생기는데, 



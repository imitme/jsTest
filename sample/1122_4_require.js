var fs = require('fs');

//파일읽기
var data = fs.readFile('../README.md', 'utf-8', 
    function(err,data){ console.log("DATA = " + data); }
);

//파일쓰기
fs.writeFile('./output.txt', 'Hello world', 
    function(err) { 
        if (err) 
        { 
            console.log("Error :" +err); 
        } 
        console.log("쓰기완료");
    }
);




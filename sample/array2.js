var myColor = ["r" , "g", "b"];
console.log(myColor.toString());

var newColor = myColor.concat("w", "Black");
console.log(myColor);
console.log(myColor.pop());
console.log(myColor);
console.log("-----------------------------------------");
console.log(newColor);
console.log(newColor.push("orange"));
console.log(newColor);
console.log(newColor.push("blue"));
console.log(newColor);

newColor.reverse();
console.log(newColor);
console.log("-----------------------------------------");
newColor.shift();
console.log(newColor);
console.log(newColor.toString());
newColor.unshift();
console.log(newColor);
console.log(newColor.toString());

newColor.splice(0,2,"test");
console.log(newColor);
console.log(newColor.toString());

newColor.sort();
console.log(newColor);
console.log(newColor.toString());


newColor.sort

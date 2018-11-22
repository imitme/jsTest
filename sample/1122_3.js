var path = require('path');
var dir = ['users','min','test'];
var projDir = dir.join(path.sep);
console.log(projDir);

var exePath = path.join(projDir, 'test.exe');
console.log(exePath);

var dirName = path.dirname(exePath);
var baseName = path.basename(exePath);
var extName = path.extname(exePath);

console.log("Directory = %s", dirName);
console.log("Base Name = %s", baseName);
console.log("Ext Name = %s", extName);

var savePath = "C:\Users\Administrator\Save";
var eventPath = "C:\Users\Administrator\Events";


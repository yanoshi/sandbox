const TestClass = require("./test_class.js"),
      TestProto = require("./test_prototype.js");

var classMethodStartTime = new Date();
var classObj = new TestClass();
for(let i = 0; i < 10000; i++){
  console.log(TestClass.hoge(), classObj.random());
}
var classMethodEndTime = new Date(); 

console.log("メソッドアクセスの速度チェック");
console.log("クラス:", classMethodEndTime - classMethodStartTime);

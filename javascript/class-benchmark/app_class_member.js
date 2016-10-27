const TestClass = require("./test_class.js"),
      TestProto = require("./test_prototype.js");

var classMemberStartTime = new Date();
var classObj = new TestClass();
for(let i = 0; i < 10000; i++){
  console.log(classObj.fuga);
}
var classMemberEndTime = new Date();

console.log("メンバ変数のアクセス速度チェック");
console.log("クラス:", classMemberEndTime - classMemberStartTime);

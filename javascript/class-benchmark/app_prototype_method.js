const TestClass = require("./test_class.js"),
      TestProto = require("./test_prototype.js");

var protoMethodStartTime = new Date();
var protoObj = new TestProto();
for(let i = 0; i < 10000; i++){
  console.log(TestProto.hoge(), protoObj.random());
}
var protoMethodEndTime = new Date();

console.log("メソッドアクセスの速度チェック");
console.log("プロトタイプ:", protoMethodEndTime - protoMethodStartTime);

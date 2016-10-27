const TestClass = require("./test_class.js"),
      TestProto = require("./test_prototype.js");

var protoMemberStartTime = new Date();
var protoObj = new TestProto();
for(let i = 0; i < 10000; i++){
  console.log(protoObj.fuga);
}
var protoMemberEndTime = new Date();

console.log("メンバ変数のアクセス速度チェック");
console.log("プロトタイプ:", protoMemberEndTime - protoMemberStartTime);

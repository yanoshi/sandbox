const TestClass = require("./test_class.js"),
      TestProto = require("./test_prototype.js");

var protoMethodStartTime = new Date();
var protoObj = new TestProto();
for(let i = 0; i < 10000; i++){
  console.log(TestProto.hoge(), protoObj.random());
}
var protoMethodEndTime = new Date();

var classMethodStartTime = new Date();
var classObj = new TestClass();
for(let i = 0; i < 10000; i++){
  console.log(TestClass.hoge(), classObj.random());
}
var classMethodEndTime = new Date(); 

var protoMemberStartTime = new Date();
for(let i = 0; i < 10000; i++){
  console.log(protoObj.fuga);
}
var protoMemberEndTime = new Date();

var classMemberStartTime = new Date();
for(let i = 0; i < 10000; i++){
  console.log(classObj.fuga);
}
var classMemberEndTime = new Date();

console.log("メソッドアクセスの速度チェック");
console.log("プロトタイプ:", protoMethodEndTime - protoMethodStartTime);
console.log("クラス:", classMethodEndTime - classMethodStartTime);

console.log("メンバ変数のアクセス速度チェック");
console.log("プロトタイプ:", protoMemberEndTime - protoMemberStartTime);
console.log("クラス:", classMemberEndTime - classMemberStartTime);

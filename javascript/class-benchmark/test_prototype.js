var TestProtoType = function() {
  this.fuga = "fuga";  
};

TestProtoType.hoge = () => {
  return "HOGE";
}

TestProtoType.prototype.random = () => {
  return Math.random() * 10.0;
}

TestProtoType.prototype.getFuga = () => {
  return this.fuga;
}

module.exports = TestProtoType;

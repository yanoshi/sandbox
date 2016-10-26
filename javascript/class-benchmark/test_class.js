class TestClass {
  constructor() {
    this.fuga = "fuga";
  }

  static hoge(){
    return "HOGE";
  }
  
  random(){
    return Math.random() * 10.0;
  }

  getFuga(){
    return this.fuga;
  }
}

module.exports = TestClass;

const calculator = {
  display: document.querySelector("#numeros"),
  btnAC: document.querySelector("[value='AC']"),
  btnDE: document.querySelector("[value='DE']"),
  btnDot: document.querySelector("[value='.']"),
  btnDiv: document.querySelector("[value='/']"),
  btn7: document.querySelector("[value='7']"),
  btn8: document.querySelector("[value='8']"),
  btn9: document.querySelector("[value='9']"),
  btnMul: document.querySelector("[value='*']"),
  btn4: document.querySelector("[value='4']"),
  btn5: document.querySelector("[value='5']"),
  btn6: document.querySelector("[value='6']"),
  btnSub: document.querySelector("[value='-']"),
  btn1: document.querySelector("[value='1']"),
  btn2: document.querySelector("[value='2']"),
  btn3: document.querySelector("[value='3']"),
  btnAdd: document.querySelector("[value='+']"),
  btn0: document.querySelector("[value='0']"),
  btnEqual: document.querySelector("[value='=']"),

  clear() {
    this.display.value = "";
  },

  delete() {
    this.display.value = this.display.value.slice(0, -1);
  },

  appendNum(number) {
    if (this.display.value === "0") this.display.value = "";
    this.display.value += number;
  },

  chooseOp(op) {
    if (
      this.display.value.endsWith("+") ||
      this.display.value.endsWith("-") ||
      this.display.value.endsWith("*") ||
      this.display.value.endsWith("/")
    ) {
      this.display.value = this.display.value.slice(0, -1);
    }
    this.display.value += op;
  },

  compute() {
    try {
      this.display.value = eval(this.display.value);
    } catch (e) {
      alert("Numero Invalido");
      this.clear();
    }
  },

  init() {
    this.btnAC.addEventListener("click", () => this.clear());
    this.btnDE.addEventListener("click", () => this.delete());
    this.btnDot.addEventListener("click", () => this.appendNum("."));
    this.btnDiv.addEventListener("click", () => this.chooseOp("/"));
    this.btn7.addEventListener("click", () => this.appendNum(7));
    this.btn8.addEventListener("click", () => this.appendNum(8));
    this.btn9.addEventListener("click", () => this.appendNum(9));
    this.btnMul.addEventListener("click", () => this.chooseOp("*"));
    this.btn4.addEventListener("click", () => this.appendNum(4));
    this.btn5.addEventListener("click", () => this.appendNum(5));
    this.btn6.addEventListener("click", () => this.appendNum(6));
    this.btnSub.addEventListener("click", () => this.chooseOp("-"));
    this.btn1.addEventListener("click", () => this.appendNum(1));
    this.btn2.addEventListener("click", () => this.appendNum(2));
    this.btn3.addEventListener("click", () => this.appendNum(3));
    this.btnAdd.addEventListener("click", () => this.chooseOp("+"));
    this.btn0.addEventListener("click", () => this.appendNum(0));
    this.btnEqual.addEventListener("click", () => this.compute());
  },
};

calculator.init();

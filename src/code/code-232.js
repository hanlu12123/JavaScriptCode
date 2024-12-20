class Solution_232_ImplementQueueUsingStacks {
  constructor() {
    this.s1 = [];
    this.s2 = [];
    this.front = null;
  }

  push(x) {
    while (this.s2.length > 0) {
      let e = this.s2.pop();
      this.s1.push(e);
    }
    this.s1.push(x);
  }

  pop() {
    while (this.s1.length > 0) {
      let e = this.s1.pop();
      this.s2.push(e);
    }
    return this.s2.pop();
  }

  peek() {
    while (this.s1.length > 0) {
      let e = this.s1.pop();
      this.s2.push(e);
    }
    return this.s2[this.s2.length - 1];
  }

  empty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}

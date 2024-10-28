class Solution_50_Pow_x_n {
  myPow(x, n) {
    if (n === 0) {
      return 1;
    }
    if (n === 1) {
      return x;
    }
    if (n < 0) {
      return 1 / this.myPow(x, -n);
    }
    let res = this.myPow(x, Math.floor(n / 2));
    res = res * res;
    if (n % 2 !== 0) {
      return res * x;
    } else {
      return res;
    }
  }
}

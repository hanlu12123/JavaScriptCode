function scoreOfParentheses(s) {
  const stack = [];
  for (let c of s) {
    if (c === '(') {
      stack.push(c);
    } else if (c === ')') {
      let sum = 0;
      while (stack.length > 0) {
        let last = stack.pop();
        if (last === '(') {
          break;
        } else if (typeof last === 'number') {
          sum += last;
        }
      }
      if (sum === 0) {
        stack.push(1);
      } else {
        stack.push(sum * 2);
      }
    }
  }
  let res = 0;
  for (let sItem of stack) {
    if (typeof sItem === 'number') {
      res += sItem;
    }
  }
  return res;
}


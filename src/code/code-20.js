class Solution_20_ValidParentheses {
  isValid(s) {
    // just need to mapping the close bracket, because the open bracket can be appended immediately.
    const mapping = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

    let stack = [];

    for (let char of s) {
      if (char === '(' || char === '[' || char === '{') {
        // as you know, the open bracket is to be matched,so we can put it in the stack immediataly,and wait for it to be matched
        stack.push(char);
      } else if (mapping[char]) {
        // in this case, a close bracket is to be matched.
        if (stack.length === 0 || mapping[char] !== stack[stack.length - 1]) {
          // so if the stack is empty, nothing can be match, it need return false.
          // in addition(moreover), if they are not matched, also need return false.
          return false;
        } else {
          //if they are matched, we need remove the matched open bracket
          stack.pop();
        }
      }
    }
    // if every bracket is matched, it is a valid string
    return stack.length === 0;
  }
}

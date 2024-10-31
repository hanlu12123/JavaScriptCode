class Solution {
    scoreOfParentheses(s) {
        const arr = s.split('');
        let left_shift = 0;
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '(') {
                left_shift++;
            } else {
                left_shift--;
                if (arr[i - 1] === '(') {
                    res += Math.pow(2, left_shift);
                }
            }
        }
        return res;
    }
}

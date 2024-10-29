class Solution_921_MinimumAddtoMakeParenthesesValid {
    minAddToMakeValid(s) {
        let sc = [];
        for (let c of s) {
            if (c === '(') {
                sc.push(c);
            } else {
                if (sc.length > 0 && sc[sc.length - 1] === '(') {
                    sc.pop();
                } else {
                    sc.push(c);
                }
            }
        }
        return sc.length;
    }
}

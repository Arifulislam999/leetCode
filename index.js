var combinationSum3 = function (k, n) {
    let result = []
    let ar = new Array(9).fill(0).map((_, i) => i + 1);
    // console.log(ar);
    const backtracking=(start, curentCombo, currentSum) => {
        if (curentCombo.length === k) {
            console.log(curentCombo,currentSum);
            if (currentSum == n) {
                result.push([...curentCombo]);
            }
            return;
        }
        for (let i = start; i < ar.length; i++){
            curentCombo.push(ar[i]);
            backtracking(i + 1, curentCombo, currentSum + ar[i]);
            curentCombo.pop();
        }

    }
    backtracking(0, [], 0);
    return result;

};
console.log(combinationSum3(3,9));


// https://leetcode.com/problems/combination-sum-iii/description/
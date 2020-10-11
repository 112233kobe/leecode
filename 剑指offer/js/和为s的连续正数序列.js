/**
 * @param {number} target
 * @return {number[][]}
 */
//运用等差数列和求根公式
var findContinuousSequence = function(target) {
    var num = Math.ceil(target/2);
    let arr = [];
    let sumArr = [];
    for(let i = 1; i <= num; i++) {
        arr = [];
        const a = (-1+Math.sqrt((1+4*(i*i-i+2*target))))/2;
        if ( parseInt(a) == a) {
            for(let j = i; j <= a; j++) {
                arr.push(j);
            }
        } else {
            continue;
        }
        sumArr.push(arr);
    }

    return sumArr;
};
// ### 解题思路
// 用js字符串方法slice（begin,end）
// 只有一个参数的时候返回从索引后裁剪的字符串


/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let str1 = s.slice(0,n);
    let str2 = s.slice(n);
    let str =str2.concat(str1);

    return str;
};

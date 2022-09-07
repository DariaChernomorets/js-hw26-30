(function () {
    'use strict'
    const revStr = (str) => {
        return str.split('').reverse().join('');
    }

    const revSum = (str) => {
        const result = +str + +revStr(str) + '';
        return result;
    }
    let step = 1;

    const isPalindrome = (str) => {

        if (str === revStr(str)) return str;

        let result = revSum(str);


        if  (result !== revStr(result)) {
            step++
            return isPalindrome(result)
        }

        if (result === revStr(result)) return  { result, step }



    }

    console.log(isPalindrome('96'));

})();

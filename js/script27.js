(function () {
    'use strict'
    const revStr = (str) => {
        return str.split('').reverse().join('');
    }

    const revSum = (str) => {
        const result = +str + +revStr(str) + '';
        return result;
    }


    const isPalindrome = (str) => {
        let step = 0;
        if (str === revStr(str)) return str;

        let result = revSum(str);


        if  (result !== revStr(result)) {
            step++
            return {
                result: revSum(result),
                step: step++
            }

        }
        if (result === revStr(result)) return result;



    }

    console.log(isPalindrome('48'));

})();


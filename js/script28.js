(function () {
    'use strict'
    const getSum = (n) => {
        let result = 0;

        return function (num) {
            result += num;
            return result;
        }
    }

    const sum = getSum();
    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));
})();



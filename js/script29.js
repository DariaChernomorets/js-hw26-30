(function () {
    'use strict'

    const random = (max) => {
        let usedNumArray = [];

        return function getRandom() {
            const randomNum = Math.floor(Math.random() * max) + 1;
            if (usedNumArray.length === max) usedNumArray = [];

            if (usedNumArray.includes(randomNum)) {
                return getRandom()
            } else {
                usedNumArray.push(randomNum)
                return randomNum;
            }
        }
    }

    const randomResult = random(100);
    console.log(randomResult());
})();


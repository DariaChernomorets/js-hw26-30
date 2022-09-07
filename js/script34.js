(function () {
    'use strict'

    const str ='Hello world';

    const insertWordInto  = (str) => {

        let index = 0;

        return function (str2) {
            const arrStr = str.split(' ');
            if (index > arrStr.length) index = 0;
            arrStr.splice(index, 0, str2);
            index +=1;
            let result = arrStr.join(' ');
            return result;
        }


    }

    const newString = insertWordInto(str);

    const result1= newString('Odessa1');
    console.log(result1);

    const result2 = newString('Odessa2');
    console.log(result2);

    const result3 = newString('Odessa3');
    console.log(result3);

    const result4 = newString('Odessa4');
    console.log(result4);

    const result5 = newString('Odessa5');
    console.log(result5);
})();

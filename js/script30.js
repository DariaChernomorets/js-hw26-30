(function () {

    'use strict'

    const counter = function (num){

        let value = 0;

        this.increase = function (){
            return value+=1;
        };

        this.decrease =function () {
            return value -=1;
        };

        this.value = function (){
            return value;
        };
    }

    let counter1 = new counter();

    let counter2 = new counter();

    console.log(counter1.increase());
    console.log(counter2.decrease())
    console.log(counter2.decrease())
    console.log(counter2.decrease())
    console.log(counter2.value())
    console.log(counter2.decrease())
    console.log(counter1.increase());
    console.log(counter1.value())
})();



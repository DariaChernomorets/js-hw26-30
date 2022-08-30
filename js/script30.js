'use strict'

const counter = (num) => {

        let counterObj = {
            increase:function (){
                this.value +=1;
                return this;
            },
            decrease:function () {
                this.value -=1;
                return this;
            },

            value: function () {
                const value = this.value;
                return this;
            }
        }

      return counterObj;

}


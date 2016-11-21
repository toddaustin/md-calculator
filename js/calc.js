// calc.js

var calc = document.getElementsByTagName('button');
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var inputString = "";
var checkValue = {
    'number': function(num) {
        inputString = inputString + num;
        console.log(inputString);
        return inputString;

    },

    'addition' : function(num){
        return parseInt(num) + parsInt(inputString);
    },

    'clear' : function() {
        inputString = "";
        screen.value = 0;
    },

    'delete' : function(){
        inputString = inputString.substring(0, inputString.length -1);
        screen.value = inputString;
    }
}


var screen = document.querySelector('input[name=numScreen]');
for (var i = 0; i < calc.length; i++) {
    calc[i].addEventListener('click', function() {
        var curVal = parseInt(this.value);
        if (isNaN(curVal)){
            curVal = this.value;
            if (curVal === 'clear') {
                checkValue.clear();
            } else if (curVal = 'delete') {
                checkValue.delete();
            }
        } else if (num.indexOf(curVal) !== -1) {
      
            screen.value = checkValue.number(curVal);

        }  
    });
}





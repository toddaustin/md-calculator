// calc.js
var calc, num, operator, screen, inputString;
calc = document.getElementsByTagName('button');
screen = document.querySelector('input[name=numScreen]');
num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
operator = ["*", "/", "+", "-", "%", "."];

inputString = "";

var calculate = {
    'number': function(num) {
        inputString = inputString + num;
        screen.value = inputString;
    },

    'operator': function(operator) {
        inputString = inputString + operator;
        screen.value = inputString;
    },

    'percent': function(argument) {
        inputString = parseFloat(inputString / 100);
        screen.value = inputString;
    },

    'clear': function() {
        inputString = "";
        screen.value = 0;
    },

    'delete': function() {
        if (inputString === 0 || inputString === "") {
            inputString = "";
            screen.value = 0;
        } else{
            inputString = inputString.substring(0, inputString.length - 1);
            screen.value = inputString;
        }
    },
    'equal': function() {
        screen.value = eval(screen.value);
        inputString = screen.value;
    }
}

for (var i = 0; i < calc.length; i++) {
    calc[i].addEventListener('click', function() {
        var curVal = parseInt(this.value);
        if (isNaN(curVal)) {
            curVal = this.value;
            if (curVal === 'clear') {
                calculate.clear();
            } else if (curVal === 'delete') {
                calculate.delete();
            } else if (curVal === 'percent') {
                calculate.percent();
            } else if (operator.indexOf(curVal) !== -1) {
                calculate.operator(curVal);
            } else if (curVal === "=") {
                calculate.equal();
            }
        } else if (num.indexOf(curVal) !== -1) {
            calculate.number(curVal);
        }
    });
}

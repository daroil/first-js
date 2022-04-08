"use strict"
window.onload = function() {
    let buttVal = [1,2,3,4,5,6,7,8,9,'.',0]
    let result = 0;
    let expression = [];

    function createExp() {
        let arr = [];
        let numb = [];
        arr = disp.value;
        let dig = arr.match(/[\d\.]+/g) 
        for (let i in arr) {
            if(arr[i].match(/[\+\-\*\/]/)) {
                numb.push(arr[i])
            }
        }
        for (let thisDig = 0; thisDig< dig.length; thisDig++) {
            expression.push({
                number: `${dig[thisDig]}`,
                operator: ''
            });
            if(numb[thisDig]){
                expression.push({
                    number: '-1',
                    operator: `${numb[thisDig]}`
                });
            }
        }  
    }


    function sum(){
        createExp();
        result = computeRecursivelyByHighest(expression);
        disp.value = result;
        expression = []
    }

    

    const compute = (x, operator, y) => {
        switch (operator) {
            case '+':
                return +x + +y
            case '-':
                return +x - +y
            case '*':
                return +x * +y
            case '/':
                return +x / +y
            default:
                return
        }
    }

    const isHighOrderOperator = (operator) => operator === '*' || operator === '/' //Хз как работает, у меня с ним не получается, пришлось заменить)

    const computeRecursivelyByHighest = (expression) => {
        const exp = [...expression]
        
        const highOrderOperIndex = exp.findIndex((oper) => oper.operator === '*' || oper.operator === '/')
        
       
        if (highOrderOperIndex !== -1) {
            const intermidiateResult = compute(exp[highOrderOperIndex - 1].number, exp[highOrderOperIndex].operator, exp[highOrderOperIndex + 1].number)
            

            exp.splice(highOrderOperIndex - 1, 3, {
                number: intermidiateResult,
                operator: ''
            })
            
            return computeRecursivelyByHighest(exp)
        }

        if (exp.length == 1) {
            return exp[0].number
        }
        const intermidiateResult = compute(exp[0].number, exp[1].operator, exp[2].number)

        exp.splice(0, 3, {
            number: intermidiateResult,
            operator: ''
        })
        
        return computeRecursivelyByHighest(exp)
    }

    for (let i in buttVal) {
        let button = document.createElement('button')
        button.className = 'elem'
        button.value = buttVal[i];
        button.innerHTML = `${buttVal[i]}`;
        let numbers = document.querySelector('#numbers')
        numbers.append(button)
    }

    for (let but of document.querySelectorAll("#numbers .elem")) {
        but.onclick = function(event){
            if(result){
                disp.value = '';
                result = 0;
            }
        disp.value += but.value
        }
    };

    for (let but of signs.querySelectorAll('button')) {
        but.onclick = function(event){
            if(result){
                result = 0;
            }
        disp.value += but.value
        }
    };

    let ev = document.getElementById('evaluate')
    ev.onclick = sum;

    let cl = document.getElementById('clear')
    cl.onclick = function(argument) {
        disp.value = '';
        expression = [];
        result = 0;
    }

    let c = document.getElementById('del')
    c.onclick = function(argument) {
        let str = disp.value ;
        disp.value = str.slice(0,-1)
    }

    var input = document.getElementById("disp");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            sum();
        }
    });
    
}
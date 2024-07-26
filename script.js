let a=0;
let b=0;
let operationSign='';
let allowComma=true;
let buttonsClicked=0;
let allowOperator=false;
const operations=['+','-','*','/'];
const displayText=document.querySelector(".display-text");
const buttons=document.querySelectorAll(".numerical");
const equals=document.querySelector("#equals");
const operators=document.querySelectorAll(".operator");
const comma=document.querySelector("#comma");

comma.addEventListener("click",()=>{
    if(allowComma)
        displayText.textContent+=comma.textContent;
    allowComma=false;
})
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
     

        displayText.textContent+=button.textContent;
        allowOperator=true;
        
       // addNumerical(button.textContent);
    })
});
operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{

        if(allowOperator)
        {
            displayText.textContent+=operator.textContent;
        
        if(buttonsClicked>0)
        {
            formatExpression(displayText.textContent);
            let result=operate(parseFloat(a),parseFloat(b),operationSign);
            displayText.textContent='';
            displayText.textContent=result+operator.textContent;
            buttonsClicked=0;
        }
        buttonsClicked++;
        allowComma=true;
        allowOperator=false
    }
    })
})
equals.addEventListener("click",()=>{
    formatExpression(displayText.textContent);
    let result=operate(parseFloat(a),parseFloat(b),operationSign);
    displayText.textContent='';
    displayText.textContent=result;
    a=0;
    b=0;
    operationSign='';
})
function formatExpression(string){
    var index=indexOfAny(string,operations);
    a=string.slice(0,index)
    b=string.slice(index+1);
    operationSign=string.slice(index,index+1);
}
function add(a,b)
{   b=b||0;
    return a + b;
}
function subtract(a,b){
    b=b||0;
    return a - b;
}
function multiply(a,b){
    b=b||0;
    return a * b;
}
function divide(a,b){
    b=b||0;
    if(b===0)
    {
       return "Bruh"
    }
        else
    return a / b;
}
function indexOfAny(str, chars) {
    for (let i = 0; i < str.length; i++) {
        if (chars.includes(str[i])) {
            return i;
        }
    }

    return -1;
}


function operate(a,b,operationSign){
    let result=0;
    switch(operationSign){
        case '+':
            result=add(a,b);
            break;
        case '-':
            result=subtract(a,b);
            break;
        case '*':
            result=multiply(a,b);
            break;
        case '/':
            result=divide(a,b)
            break;
        default:
            console.log("Error!")
    }
    return result;
}

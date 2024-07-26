let a=0;
let b=0;
let operationSign='';
let buttonsClicked=0;
const displayText=document.querySelector(".display-text");
const buttons=document.querySelectorAll(".numerical");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        displayText.textContent+=button.textContent;
       // addNumerical(button.textContent);
    })
})
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
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

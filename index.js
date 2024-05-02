let currentInput=''
let previousInput=''
let currentOperator=''
function display(){
    document.getElementById("display").innerHTML=currentInput;
}
function handleInput(value){
    if(value==='c')
    {
        clear();
        display()
    }
    else if(value==='+/-')
    {
        negate();
        display()
    }
    else if(value==='%')
    {
        percentage();
        display()
    }
    else if(value==='+'|| value==='-'||value==='*'||value==='/')
    {
        Operatorhandler(value);
        display()
    }
    else if(value==='=')
    {
        result();
    }
}
function clear(){
    let currentInput=''
    let previousInput=''
    let currentOperator=''
    display()
}
function negate(){
    if(currentInput!=='')
    {
        currentInput=(parseFloat(currentInput)*-1).toString;
    }
}
function percentage(){
    if(currentInput!=="")
    {
        currentInput=(parseFloat(currentInput)/100).toString;
    }
}
function Operatorhandler(operator){
    if(currentInput!=='')
    {
        previousInput=currentInput;
        currentInput="";
        currentOperator=operator;
    }
}
function result(){
    let Answer;
    if(currentInput!=='')
    {
        switch(currentOperator){
            case '+':
                Answer=parseFloat(previousInput)+parseFloat(currentInput);
                break;
            case '-':
                Answer=parseFloat(previousInput)-parseFloat(currentInput);
                break;
            case '*':
                Answer=parseFloat(previousInput)*parseFloat(currentInput);
                break;
            case '/':
                Answer=parseFloat(previousInput)/parseFloat(currentInput);
                break;
        }
        document.getElementById('ans').innerHTML=Answer;
    }
}
document.addEventListener("keydown",function(event){
    const key=event.key;
    if(key==='+'|| key=='-' || key==='*' || key==='/' || key==='%' || key==='+/-'||key==='.' || key==='c')
    {
        key.preventDefault();
        handleInput(key);
    }
})
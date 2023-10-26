let btn = document.querySelectorAll(".btn");
let calcScreen = document.querySelector(".screen");
let equal = document.querySelector(".equalBtn");
let clearBtn = document.querySelector(".clearBtn");
let closeBtn = document.querySelector(".closeBtn");
let text="" ;

//function to check if the user writes a defind equation or no
let check = function () {
    let flag=0;
    for(let i=0;i<text.length-1;i++){
        //check if two consecutive characters are operators 
        if(((text[i]=='/'||text[i]=='*'||text[i]=='+'||text[i]=='-')&&(text[i+1]=='/'||text[i+1]=='*'||text[i+1]=='+'))||(text[i]=='-'&&text[i+1]=='-')){
            text="UNDEFINED";
            flag=1;
            break;
        }
    }

    //check if the last character is an operator
    if(text[text.length-1]=='/'||text[text.length-1]=='*'||text[text.length-1]=='+'||text[text.length-1]=='-'){
        text="UNDEFINED";
        flag=1;
    }

    //check if the first character is an operator
    if(text[0]=='/'||text[0]=='*'){
        text="UNDEFINED";
        flag=1;
    }
    
    return flag;
}

//function to print the result on screen
let updateScreen = function () {
    let eq = document.createTextNode(text);
    eq.nodeValue=text;
    calcScreen.innerHTML=eq.nodeValue;
}

//function to save the clicked buttons
btn.forEach(child=>{child.onclick = function (){
    if(text==="UNDEFINED")
        text="";
    text+=child.lastElementChild.innerHTML;
    updateScreen();
}})

//function to clear the screen
clearBtn.onclick = function () {
    text=""
    updateScreen();
}

//function to get calculate the result
equal.onclick = function () {
    if(check()==0)
        text=eval(text)
    updateScreen();
}

//function to close the calculator
closeBtn.onclick = function () {
    text="CLOSED";
    updateScreen();
    text="";
    setTimeout(updateScreen,1000);
}
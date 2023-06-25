let displayAnswer = document.querySelector(".answer");
let newNumber = true;
let equationNumbers = [];
let equationSymbols =[];
let finalEquation = ``;
let finalAnswer = 0;
let ans=0;

document
.querySelector(".calculator-buttons") //is an event bubble, this has to be the parent div of all buttons you want to us this eventlistner on
.addEventListener("click", function(event){

    //number button
    if(event.target.classList.contains("butt0") 
    ||event.target.classList.contains("butt1")
    ||event.target.classList.contains("butt2") 
    ||event.target.classList.contains("butt3")   
    ||event.target.classList.contains("butt4")
    ||event.target.classList.contains("butt5") 
    ||event.target.classList.contains("butt6")   
    ||event.target.classList.contains("butt7")
    ||event.target.classList.contains("butt8") 
    ||event.target.classList.contains("butt9")   
    ){
        if(newNumber){
            displayAnswer.innerText = event.target.innerText;
            newNumber = false;
        }else{
        displayAnswer.innerText = displayAnswer.innerText + event.target.innerText;
        };
        if (displayAnswer.innerText === "0"){
            newNumber = true;
        };
    };

    //clear button
    if(event.target.classList.contains("buttclear")){
        displayAnswer.innerText = "0";
        ans = 0;
        document.querySelector(".last-equation").innerText = "‏‏‎ ‎";
        newNumber=true;
        equationNumbers=[];
        equationSymbols=[];
    };

    //backspace Button
    if(event.target.classList.contains("buttbackspace")){
        if(displayAnswer.innerText == ans){
            displayAnswer.innerText = "0";
            newNumber=true;
        };
        displayAnswer.innerText = displayAnswer.innerText.slice(0,-1);
        if(displayAnswer.innerText === ""){
            displayAnswer.innerText = "0";
            newNumber=true;
        };
    };

    //symbol button
    if(event.target.classList.contains("buttdivide") 
    ||event.target.classList.contains("butttimes")
    ||event.target.classList.contains("buttplus") 
    ||event.target.classList.contains("buttminus")   
    ){
        equationNumbers.push(Number(displayAnswer.innerText));// number coverts the sting into an int
        equationSymbols.push(event.target.innerText);
        displayAnswer.innerText = "0";
        newNumber = true;
    };

    //equals button
    if(event.target.classList.contains("buttequals")){
        equationNumbers.push(Number(displayAnswer.innerText));
        finalAnswer=equationNumbers[0];
        for(let i = 0; i < equationSymbols.length; i++ ){
           if(equationSymbols[i] === "÷"){
            finalAnswer=finalAnswer/equationNumbers[i+1];
            };
            if(equationSymbols[i] === "×"){
                finalAnswer=finalAnswer*equationNumbers[i+1];
            };
            if(equationSymbols[i] === "+"){
                finalAnswer=finalAnswer+equationNumbers[i+1];
            };
            if(equationSymbols[i] === "−"){
                finalAnswer=finalAnswer-equationNumbers[i+1];
            };
        };
        displayAnswer.innerText = finalAnswer;
        equationSymbols.push(`=`);
        for (let i=0;i< equationNumbers.length; i++ ) {
            finalEquation = finalEquation + `` + equationNumbers[i]+``+equationSymbols[i];
        };
        finalEquation = finalEquation + `` + finalAnswer;
        if (finalEquation === "0=0"){
            finalEquation = "‏‏‎ ‎";
        }
        document.querySelector(".last-equation").innerText = finalEquation;
        ans = finalAnswer;
        equationNumbers=[];
        equationSymbols=[];
        newNumber = true;
        finalAnswer=0;
        finalEquation=``;
    };
     
    //ans button
    if(event.target.classList.contains("buttans")){
        displayAnswer.innerText=ans;
        newNumber=true;
    };
});

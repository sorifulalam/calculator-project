let displaydigit = document.getElementById('display')
    
 function digitNumber(digit){
    displaydigit.value = display.value + digit;
   
 }

 function digitClear(){
    displaydigit.value=" ";
 }

 function digitDlt(){
    displaydigit.value = displaydigit.value.slice(0,-1)
 }

 function digitCalc(){
    let result = displaydigit.value;
    let calculate = eval(result)
    displaydigit.value = calculate;
 }
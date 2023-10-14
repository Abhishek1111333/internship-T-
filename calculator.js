function cal() {
    let number = document.querySelector("#num1").value;
    let opr = document.querySelector("#opr").value;
    let number2 = document.querySelector("#num2").value;
    let res;
    if (opr == "add") {
        res = parseFloat(number)+parseFloat(number2);
        document.querySelector("#result").innerHTML="result is "+""+res 
    }
   else if (opr == "sub") {
        res = parseFloat(number)-parseFloat(number2);
        document.querySelector("#result").innerHTML="result is "+""+res 
    }
    else if (opr == "div") {
        res = parseFloat(number)/parseFloat(number2);
        document.querySelector("#result").innerHTML="result is "+""+res 
    }
    else if (opr == "mul") {
        res = parseFloat(number)*parseFloat(number2);
        document.querySelector("#result").innerHTML="result is "+""+res 
    }
}
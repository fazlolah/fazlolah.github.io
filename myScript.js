function sendContactInfo() {
    document.getElementById("contact-form").innerHTML = "Thank you, I will contact you soon.";
}
function Calculate() {
    let FirstNum 
    let SecondNum
    let operator
    let answer

    FirstNum = parseInt(document.getElementById("first_num").value)
    SecondNum = parseInt(document.getElementById("second_num").value)
    operator = document.getElementById("operator").value


    if (operator == "+"){
        answer = FirstNum + SecondNum
    }
    if (operator == "-"){
        answer = FirstNum - SecondNum
    }
    if (operator == "x"){
        answer = FirstNum * SecondNum
    }
    if (operator == "/"){
        answer = FirstNum / SecondNum
    }
    if (operator == "^"){
        answer = FirstNum ** SecondNum
    }

    document.getElementById("answer_box").setAttribute("value", answer)

}

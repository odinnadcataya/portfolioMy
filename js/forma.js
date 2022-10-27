/* const form = document.forms["form"];
const button = form.elements["button"];

const inputArr = Array.from(form); //массив всех input
const validInputArr = [];

inputArr.forEach((element) => {
    if (element.hasAttribute("data-reg")) {
        element.setAttribute("is-valid", "0");
        validInputArr.push(element);
    }
})
form.addEventListener("input", inputHendler);
button.addEventListener("click", buttonHandler);
function inputHendler({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck(target);
    }
}
//обработка полей на валидность
function inputCheck(element) {
    const inputValue = element.value;
    const inputReg = element.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        element.style.border = "2px solid rgb(0, 196, 0)";
        element.setAttribute("is-valid", "1");
    }else {
        element.style.border = "2px solid rgb(255, 0, 0)";
        element.setAttribute("is-valid", "0");
    }
}

function buttonHandler(event) {
    const isAllValid = [];
    validInputArr.forEach((element) => {
        isAllValid.push(element.getAttribute("is-valid"));
    });
    const isValid = isAllValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isValid))) {
        event.preventDefault();
    }
} */
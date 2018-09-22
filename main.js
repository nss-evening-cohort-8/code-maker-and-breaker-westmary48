let secretMessage = ['hello']

let wordMessage = ['12345678901234567889']

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}
let secretInput = document.getElementById("textarea");

let wordsInput = document.getElementById("textarea2");

const secretStringBuilder = () =>
    let inputString = '';
    for (let i = 0; i < secretUserInput.length; i++) {
    inputString += secretMessage[secretUserInput[i]]
    printToDom(inputString,'output')
    }
}

const wordsStringBuilder = () => {
    let inputString = '';
    for (let i = 0; i < wordsUserInput.length; i++) {
        inputString += wordMessage [wordhUserInput[i]]
         printToDom(inputString, 'output');
    }
}
document.getElementById("secretButton").addEventListener("click", secretStringBuilder);
document.getElementById("wordsButton").addEventListener("click", wordsStringBuilder);



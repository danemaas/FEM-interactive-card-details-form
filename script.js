const form = document.getElementById('inputForm');
const inputName = document.getElementById('inputName');
const inputNumber = document.getElementById('inputNumber');
const inputDate1 = document.getElementById('inputDate1');
const inputDate2 = document.getElementById('inputDate2');
const inputCVC = document.getElementById('inputCVC');
const mainPanel = document.getElementById('main');
const endPanel = document.getElementById('success');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the default form submission behavior

    // NAME
    if (inputName.value == "") {
         // Display the error message
        document.getElementById('errorMsg1').style.display = "block";
        inputName.style.borderColor = "hsl(4, 100%, 67%)";
    } else {
        document.getElementById('nameDisplay').innerHTML = inputName.value;
        document.getElementById('errorMsg1').style.display = "none";
        inputName.style.borderColor = "hsl(270, 3%, 87%)";
    }

    // CARD NUMBER
    if (!isCreditCardNumberValid(inputNumber.value) || inputNumber.value == "") {
        // Display the error message
        document.getElementById('errorMsg2').style.display = "block";
        inputNumber.style.borderColor = "hsl(4, 100%, 67%)";
    } else {
        document.getElementById('cardNumDisplay').innerHTML = formatCreditCardNumber(inputNumber.value);
        document.getElementById('errorMsg2').style.display = "none";
        inputNumber.style.borderColor = "hsl(270, 3%, 87%)";
    }

    // EXP DATE
    if (inputDate1.value == "") {
        // Display the error message
        document.getElementById('errorMsg3').style.display = "block";
        inputDate1.style.borderColor = "hsl(4, 100%, 67%)";
    } else {
        document.getElementById('MM').innerHTML = inputDate1.value;
        document.getElementById('errorMsg3').style.display = "none";
        inputDate1.style.borderColor = "hsl(270, 3%, 87%)";
    }
    if (inputDate2.value == "") {
        // Display the error message
        document.getElementById('errorMsg3').style.display = "block";
        inputDate2.style.borderColor = "hsl(4, 100%, 67%)";
    } else {
        document.getElementById('YY').innerHTML = inputDate2.value;
        document.getElementById('errorMsg3').style.display = "none";
        inputDate1.style.borderColor = "hsl(270, 3%, 87%)";
    }

    // CVC
    if (inputCVC.value == "") {
        // Display the error message
        document.getElementById('errorMsg4').style.display = "block";
        inputCVC.style.borderColor = "hsl(4, 100%, 67%)";
    } else {
        document.getElementById('cvcDisplay').innerHTML = inputCVC.value;
        document.getElementById('errorMsg4').style.display = "none";
        inputCVC.style.borderColor = "hsl(270, 3%, 87%)";
    }

    if (inputName.value != "" &&
        inputNumber.value != "" &&
        inputDate1.value != "" &&
        inputDate2.value != "" &&
        inputCVC.value != "") {
            mainPanel.style.display = "none";
            endPanel.style.display = "flex";
    }
});

function backToMain() {
    mainPanel.style.display = "block";
    endPanel.style.display = "none";
    inputName.value = "";
    inputNumber.value = "";
    inputDate1.value = "";
    inputDate2.value = "";
    inputCVC.value = "";
}

function isCreditCardNumberValid(cardNumber) {
    // Remove any spaces and other non-digit characters
    const numericCardNumber = cardNumber.replace(/\D/gi, '');
  
    // Check if the resulting value has a length of exactly 16 digits and consists only of digits
    return numericCardNumber.length === 16 && /^\d+$/.test(numericCardNumber);
}

function formatCreditCardNumber(cardNumber) {
    // Remove any non-digit characters and spaces
    const numericCardNumber = cardNumber.replace(/\D/g, '');
  
    // Insert a space every 4 digits using a regular expression
    const formattedCardNumber = numericCardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
  
    return formattedCardNumber;
}
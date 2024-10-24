const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");


function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

    
checkButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (!textInput.value) {
        alert("Please input a value");
    } else {
        output.innerHTML = isPalindrome(textInput.value) 
        ? `<strong>${textInput.value}</strong> is a palindrome.`
        : `<strong>${textInput.value}</strong> is not a palindrome.`
    }
})



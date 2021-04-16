const button = document.querySelector("button");
const NumberMultiply = function() {
    const inputText = document.querySelector('[type="text"]');
    const paragText = document.querySelector(".more-text");
    let num = parseFloat(inputText.value);
    const multiply4 = function() {
        num = num * 4;
        return num;
    };
    paragText.textContent = multiply4();
    console.log(paragText.textContent);
};
button.addEventListener("click", NumberMultiply);
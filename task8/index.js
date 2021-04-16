const checkbox = document.querySelectorAll(".input");
const button = document.querySelector('[type="button"]');
const changeCheckbox = function() {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked === true) {
            checkbox[i].checked = false;
        } else {
            checkbox[i].checked = true;
        }
    };
    if (button.onclick === true) {
        console.log("here");
    };
};
button.addEventListener("click", changeCheckbox)
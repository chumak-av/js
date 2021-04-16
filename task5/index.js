const question = confirm("Подкинуть монетку?");
const firstTry = Math.round(Math.random());
const secondTry = Math.round(Math.random());
if (question === true) {
    if (firstTry === 0) {
        alert("Орел");
    } else {
        alert("Решка");
    }
} else {
    alert("Пока(")
}
const question2 = confirm("Подкинуть монетку?");
if (question2 === true) {
    if (secondTry === 0) {
        alert("Орел");
    } else {
        alert("Решка");
    }
} else {
    alert("Пока(")
}
if (firstTry === secondTry) {
    alert('ФАРТ');
} else {
    alert("В следующий раз повезет");
}
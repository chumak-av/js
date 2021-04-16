let a = prompt('vvedite koeficient a');
let b = prompt('vvedite koeficient b');
let c = prompt('vvedite koeficient c');
let ac = 4 * a * c;
let D = Math.pow(b, 2) - ac;
if (D > 0) {
    D = Math.sqrt(D);
    console.log(`D=${D}`)
    let firstX = (-b + D) / 2 * a;
    let secondX = (-b - D) / 2 * a;
    alert(`x1=${ Math.round(firstX)} ,  x2=${ Math.round(secondX)} `);
} else if (D === 0) {
    console.log(`D=${D}`)
    D = Math.sqrt(D);
    let X = -b / (2 * a);
    alert(`x=${ Math.round(X)}`);
} else if (D < 0) {
    console.log(`D=${D}`)
    alert("Корней нет");
} else {
    console.log(`D=${D}`)
    alert('Что-то не так');
}
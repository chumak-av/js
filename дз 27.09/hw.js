const numbers = [];
const calcSum = () => {
    let input = 0;
    let total = 0;
    for (let i = 0; input !== null; i++) {
        input = prompt('vvedite chislo');
        // alert(input)
        if (input == null) {
            break;
        } else if (isNaN(input) || input == '') {
            alert('not a number');
            break;
        } else {
            numbers[i] = input;
        }
    }

    console.log(numbers)
        // if (numbers.includes(null))
    for (let i = 0; i < numbers.length; i++) {
        total += Number(numbers[i]);
    }
    console.log(`total = ${total}`)
}

calcSum()


// const numbers = [];
// const calcSum = () => {
//     let input = 0;
//     let total = 0;
//     for (let i = 0; input !== null; i++) {
//         input = prompt('vvedite chislo');
//         input = Number(input)
//         if (input == null) {
//             break;
//         }
//         if (isNaN(input) || input == '') {
//             alert('not a number');
//             break;
//         }
//         numbers[i] = input;

//     }
//     console.log(numbers)

// }
// calcSum()
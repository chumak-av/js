let password = prompt("Введите валидный пароль (он должен содержать минимум 8 символов, цифру, букввы заглавные и маленькие, символ").split('');
console.log(password);
let a = 0;
for (var j = 4; j >= 0; j = j - 1) {
    if ((password == (' ')) || (password.length < 8)) {
        if (j > 0) {
            password = prompt(` Введите пароль еще раз. Осталось попыток ${j}`).split('');
            continue;
        };
    };
    for (var i = 0; i < password.length; i++) {
        if (isNaN(Number(password[i])) == true) {
            var upperPassword = password[i].toUpperCase();
        };
        if (password[i] == upperPassword) {
            break;
        };
    };
    if (i == password.length) {
        if (j > 0) {
            password = prompt(` Введите пароль еще раз. Осталось попыток ${j}`).split('');
            continue;
        }
    };
    for (i = 0; i < password.length; i++) {
        if (isNaN(Number(password[i])) == false) {
            break;
        };
    };
    if (i == password.length) {
        if (j > 0) {
            password = prompt(` Введите пароль еще раз. Осталось попыток ${j}`).split('');
            continue;
        }
    };
    for (i = 0; i < password.length; i++) {
        if ((isNaN(Number(password[i])) == true) && !(password[i].match(/[A-я]/i))) {
            break;
        };
    };
    if (i == password.length) {
        if (j > 0) {
            password = prompt(` Введите пароль еще раз. Осталось попыток ${j}`).split('');
            continue;
        }
    } else {
        a = 1;
        break;
    };
};
if (a == 1 && j >= 0) {
    alert('Accepted');
} else {
    alert('Failed');
}
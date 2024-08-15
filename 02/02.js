let number = parseInt(prompt("Введите число от 2 до 10 для вывода таблицы умножения:"));

if (number >= 2 && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }
} else {
    console.log("Введено неверное число. Попробуйте снова.");
}

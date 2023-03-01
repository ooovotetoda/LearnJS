function readNumber() {
    let num;

    while (isNaN(num)) {
        num = prompt("Введите число: ", "")
    }
    return num;
}

alert(readNumber())
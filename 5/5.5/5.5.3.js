function filterRangeInPlace(arr, a, b) {
    arr.forEach(function (item, index) {
        if ((item < a) || (item > b)) {
            arr.splice(index, 1)
        }
    })
}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]
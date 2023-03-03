/*
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );
*/

function unique(arr) {
    let used = []
    return arr.filter(function(item) {
        if (used.includes(item)) {
            return false;
        } else {
            used.push(item);
            return true;
        }
    })
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) );

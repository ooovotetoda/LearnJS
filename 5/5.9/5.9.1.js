function sumSalaries(obj) {
    return Object.entries(obj).reduce((sum, [name, amount]) => sum + +amount, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650
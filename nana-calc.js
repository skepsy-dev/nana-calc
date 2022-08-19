let kongium = [10, 40, 60, 100, 150, 200, 250, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, null]

let exp = [10, 20, 40, 60, 80, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 450, 500, null,]

function lvlUp(num1, num2) {
    let runs = 0;
    let totals = [];
    for (let i = num1 - 1; i < num2 - 1; i++) {
        let num = exp[i]
        runs += num;
    }
    totals.push(runs)

    let nanas = (runs * 0.4);
    totals.push(nanas);

    return totals;
}

console.log(lvlUp(4, 16)); // => [2265, 906]

// O depends on operations + - / = > < etc
// also O can be simplified
// That's all types of O and O(1) is the best and O(n!) is the worst
// O(100) -> O(1)
// O(logn + 5) -> O(logn)
// O(2n + 5) -> O(n)
// O(nlogn + 100) -> O(nlogn)
// O(13 * Math.pow(n, 2)) -> O(Math.pow(n, 2))
// O(Math.pow(n, 2) + 10n + 20) -> O(Math.pow(n, 2))
// O(n! + 10) -> O(n!)

// O(1) - constant
function constantO(n) {
    return console.log(n)
}

// O(n) - linear
function linearO(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}

// O(n) + O(n) = O(n) - linear
function alsoLinearO(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}

// O(n) * O(n) = O(Math.pow(n, 2)) - quadratic
function quadraticO(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; i++) {
            console.log(i)
        }
    }
}
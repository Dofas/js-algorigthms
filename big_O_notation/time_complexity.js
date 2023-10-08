// Time complexity is about run time

//implemented with loop
function addUpToWithLoop(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// implemented with factorial formula
function addUpToWithFactorialFormula(n) {
    return n * (n + 1) / 2;
}

const numberToCalculate = 10000000;

// calculates elapsed time for callback
function calculateElapsedTime(callback) {
    const startTimer = performance.now();
    console.log(callback(numberToCalculate));
    const endTimer = performance.now();
    const timeDifference = endTimer - startTimer;
    console.log(`Time elapsed for ${callback.name}: ${ timeDifference / 1000 } seconds`);
    return timeDifference;
}

const loopTime = calculateElapsedTime(addUpToWithLoop);
const factorialTime = calculateElapsedTime(addUpToWithFactorialFormula);
console.log(`Factorial is faster in ${ Math.round(loopTime / factorialTime) } times`)

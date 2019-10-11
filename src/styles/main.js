for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 5, and check if the remainder is 0
    if (currentNumber % 5 === 0) {
        console.log("chicken")
    }

    if (currentNumber % 7 === 0) {
        console.log("monkey")
    }

    if (currentNumber % 7 === 0, currentNumber % 5 === 0) {
        console.log ('chickenmonkey')
    }
}
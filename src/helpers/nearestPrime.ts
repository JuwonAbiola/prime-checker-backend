/**
 * @name isPrimeNumber
 * @param {number} digit object with response details
 * @returns {boolean} JSON response with status and response information
 */
const isPrimeNumber = (digit: number): boolean => {
    for (let x = 2; x < digit; x++) {
        if (digit % x === 0) {
            return false;
        }
    }
    return true;
};


/**
 * @name nearestPrime
 * @param {number} digit object with response details
 * @returns {number} JSON response with status and response information
 */
const nearestPrime = (digit: number): number => {
    while (!isPrimeNumber(--digit)) { };
    return digit;
};

export { isPrimeNumber, nearestPrime }
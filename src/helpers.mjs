export const compose = (...fns) => (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);

export const prop = (name) => (obj) => obj[name];

export const max = (arr) => arr.reduce((total, x) => total + x[prop], 0);

export const add = (a, b) => a + b;

/**
 * Shuffle the element in the array
 * @param {Array} arr an array
 */
export const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

/**
 * Returns randomized value from lowerLimit to upperLimit
 * @param {number} lowerLimit min number that can be returned
 * @param {number} upperLimit max number that can be returned
 * @returns {number} value between lowerLimit to upperLimit
 */
export const random = (lowerLimit, upperLimit) =>{
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);
}
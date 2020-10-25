export const compose = (...fns) => (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg);

export const prop = (name) => (obj) => obj[name];

export const max = (arr) => arr.reduce((total, x) => total + x[prop], 0);

export const add = (a, b) => a + b;

export const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

export const wait = (delay: number) => {
    return new Promise((resolve) => {
        return setTimeout(() => {
            resolve(true);
        }, delay);
    });
};

export const waitAndReject = (delay: number) => {
    return new Promise((_resolve, reject) => {
        return setTimeout(() => {
            reject(false);
        }, delay);
    });
};

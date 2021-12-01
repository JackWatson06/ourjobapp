/**
 * Debounce the current function that we passed into this scope.
 * @param {closure} func Function we are calling after the debounce.
 * @param {int} timeout Number of seconds that we want to wait to debounce.
 */
const debounce = (func, timeout = 1000) => {
    let timer;
    return async (...args) => {
        return new Promise((resolve, reject) => {
            clearTimeout(timer);
            timer = setTimeout(async () => { 
                try
                {
                    resolve(await func.apply(this, args))
                }
                catch(error)
                {
                    reject(error);
                }; 
            }, timeout);
        })
    }
}

export default debounce;
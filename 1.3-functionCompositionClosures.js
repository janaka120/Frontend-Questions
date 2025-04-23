function composeSync(fns) {
  return function (...args) {
    let result = args[0];

    for (const fn of fns) {
      result = fn(result);
    }

    return result;
  };
}

function add(x) {
  return x + 10;
}

function multiply(x) {
  return x * 20;
}

function square(x) {
  return x * x;
}

const mathFuns = composeSync([add, multiply, square]);
const result = mathFuns(5);
console.log("Result:", result);

/**
 * execute program command:
 * `node ./1.3-functionCompositionClosures.js`
 * 
 * <<<<< OUTPUT >>>>>
    Result: 90000
 */

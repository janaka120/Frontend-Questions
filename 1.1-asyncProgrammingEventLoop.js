function schedule(fn, delay) {
  let exeTimeList = [];
  const maxExeCount = 5; // rate limit count
  const maxExeTimeLimit = 1000; // rate limit time

  return function (...args) {
    const now = Date.now();
    exeTimeList = exeTimeList.filter((time) => now - time < maxExeTimeLimit);

    if (exeTimeList.length < maxExeCount) {
      exeTimeList.push(now);
      setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    } else {
      console.log("Rate limit exceeded fn:", args[0]);
    }
  };
}

function test(id) {
  console.log("Execute fn", id);
}

const delayTime = 500;
const executeTest = schedule(test, delayTime);

executeTest("1");
executeTest("2");
executeTest("3");
executeTest("4");
executeTest("5");
executeTest("6");
executeTest("7");

/**
 * execute program command: `node ./asyncProgrammingEventLoop-1-1.js`
 * 
 * <<<<< OUTPUT >>>>>>
    Rate limit exceeded fn: 6
    Rate limit exceeded fn: 7
    Execute fn 1
    Execute fn 2
    Execute fn 3
    Execute fn 4
    Execute fn 5
  *
 */

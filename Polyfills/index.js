const arrayInput = [1, 2, 3, 4];

// Polyfill for Array.map() function

// Array.map((num, index, arr) => {})

Array.prototype.customMap = function (callback) {
  const tempArray = [];
  console.log( this );

  for (let i = 0; i < this.length; i++) {
    tempArray.push(callback(this[i], i, this));
  }

  return tempArray;
};

console.log(
  "Array map function ::: ",
  arrayInput.map((num) => num + 1)
);

console.log(
  "Array map function prototype ::: ",
  arrayInput.customMap((num) => num + 1)
);

// Polyfill for Array.filter() function

Array.prototype.customFilter = function (callback) {
  const tempArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      tempArray.push(this[i]);
    }
  }

  return tempArray;
};

console.log(
  "Array filter function ::: ",
  arrayInput.filter((num) => num > 2)
);

console.log(
  "Array filter function prototype ::: ",
  arrayInput.customFilter((num) => num > 2)
);

// Polyfill for Array.reduce() function

Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }

  return accumulator;
};

console.log(
  "Array reduce function ::: ",
  arrayInput.reduce((acc, curr, i, arr) => acc + curr, 0)
);

console.log(
  "Array reduce function prototype ::: ",
  arrayInput.customReduce((acc, curr, i, arr) => acc + curr, 0)
);

// Polyfill for call() function

const personObj1 = {
  name: "Elon Musk",
};

function greetWelcomeMessage(salary) {
  console.log(`Welcome, I am ${this.name}!! and earns ${salary} Lakhs`);
}

Function.prototype.customCall = function (...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable !!");
  }

  const context = args[0];
  const restArgs = args.slice(1);

  context.fn = this;
  context.fn(...restArgs);
};

console.log("Call function ::: ");
greetWelcomeMessage.call(personObj1, 10);

console.log("Polyfill Call function ::: ");
greetWelcomeMessage.customCall(personObj1, 10);

// Polyfill for apply() function

Function.prototype.customApply = function (...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable !!");
  }

  if (!Array.isArray(args)) {
    throw new Error("args is an array !!");
  }
  const context = args[0];
  const restArgs = args.slice(1);

  context.fn = this;
  context.fn(...restArgs);
};

console.log("Apply function ::: ");
greetWelcomeMessage.apply(personObj1, [10]);

console.log("Polyfill Apply function ::: ");
greetWelcomeMessage.customApply(personObj1, [10]);

// Polyfill for bind() function

Function.prototype.customBind = function (...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not callable !!");
  }

  const params = args.slice(1);
  const oThis = this;

  return function (...extraArgs) {
    oThis.apply(args[0], [...params, ...extraArgs]);
  };
};

console.log("Bind function ::: ");
const newFun = greetWelcomeMessage.bind(personObj1, 10);

newFun();

console.log("Polyfill Bind function ::: ");
const newCustomFun = greetWelcomeMessage.customBind(personObj1);
newCustomFun(10);

// Polyfill for once() function

function once(func, context) {
  let executed;

  return function (...args) {
    if (func) {
      executed = func.apply(context || this, [...args]);

      func = null;
    }

    return executed;
  };
}

const dummyCalc = once(() => console.log("Calculation done"));

dummyCalc();
dummyCalc();
dummyCalc();
dummyCalc();

// Polyfill for memoize() function

function memoize(func, context) {
  let cache = {};

  return function (...args) {
    const aragsString = JSON.stringify(args);

    if (!cache[aragsString]) {
      cache[aragsString] = func.call(context || this, ...args);
    }

    return cache[aragsString];
  };
}

const clumsyProduct = (a, b) => {
  for (let index = 0; index < 1000000000; index++) {}
  return a * b;
};

const memoizeFn = memoize(clumsyProduct);

// console.time("First Call");
// console.log(memoizeFn(10, 2));
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(memoizeFn(10, 2));
// console.timeEnd("Second Call");

// Polyfill for promise() function

function PromisePolyFill(executor) {
  let onResolve,
    onReject,
    isFullFilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullFilled = true;
    value = val;

    if (typeof onResolve === "function") {
      isCalled = true;
      onResolve(val);
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onResolve === "function") {
      isCalled = true;
      onReject(val);
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFullFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }

    return this;
  };

  executor(resolve, reject);
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise Resolved 1 ::: data`);
  }, 1000);
});

examplePromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Polyfill for promise.all() function

const examplePromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise Resolved 2 ::: data`);
  }, 1000);
});

const examplePromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Promise Resolved 3 ::: data`);
  }, 1000);
});

Promise.allPolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];

    if (!promises.length) {
      resolve(result);
      return;
    }

    let pendingPromises = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        result[index] = res;
        pendingPromises--;

        if (pendingPromises === 0) {
          resolve(result);
        }
      }, reject);
    });
  });
};

Promise.all([examplePromise, examplePromise2, examplePromise3])
  .then((res) => console.log(`Passed :: ${res}`))
  .catch((err) => console.error(`Failed :: ${err}`));

// Polyfill for debounce() function

const debounce = (callback, delay) => {
  let timerId = null;

  return function (...args) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(callback(...args), delay);
  };
};

// Polyfill for throttle() function

const throttle = (callback, delay) => {
  let lastTime = 0;

  return function (...args) {
    const currentTime = new Date().getTime();

    if (currentTime - lastTime < delay) return;

    lastTime = currentTime;

    return callback(...args);
  };
};

/**
 * Closure
 * ---------
 *
 * Function along with its lexical scope forms a closure.
 *
 * function when returned they gets return along with its lexical scopes
 *
 * Use of closures
 * - Module Designn Patterns.
 * - Currying functions
 * - Function like once
 * - Memoize
 * - setTimeouts
 * - Iterations
 *
 *
 * */

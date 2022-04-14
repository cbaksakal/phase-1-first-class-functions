function square(num) {
    return num ** 2;
}

function receivesAFunction(callBackFunc) {
    callBackFunc(5);
}

function returnsANamedFunction() {
    const namedFunc = function() {
        console.log("Hello, world");
    };

    return namedFunc;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello, world");
    };
}
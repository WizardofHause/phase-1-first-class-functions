function add () {
    console.log(1 + 1);
}

function receivesAFunction (add) {
    return add();
}

function returnsANamedFunction () {
    return add;
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log(2 + 2);
    }
}
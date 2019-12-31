  function getMin() {
    var minNumber = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (minNumber > arguments[i]) {
            minNumber = arguments[i];
        }
    }
    return minNumber;
}

getMin(3, 0, -3);
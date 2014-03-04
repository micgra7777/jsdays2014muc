module.exports = function () {
    var n = 1
    var results = 1;
    primeLoop: while (results < 300000) {
        n += 1;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                continue primeLoop;
            }
        }
        results += 1;
    }
    return n;
};
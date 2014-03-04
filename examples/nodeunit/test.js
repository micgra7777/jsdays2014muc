module.exports = {
    setUp: function (callback) {
        console.log('setUp');
        callback();
    },
    tearDown: function (callback) {
        console.log('tearDown');
        callback();
    },
    firstExample: function (test) {
        console.log('firstExample')
        test.equal('Hello', 'Hello', 'Strings are not Equal');
        test.done();
    },
    exampleGroup: {
        secondExample: function (test) {
            test.notEqual('Hello', 'Hello!', 'Strings are Equal');
            test.done();
        }
    }
}
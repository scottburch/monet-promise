# monet-promise
Promise monad based on Monet.JS

Documentation on its way.  You can see tests for usage.

## Basic usage

### Success

    serverRequest('conf').map(upperCase).map(console.log.bind(console);  // RESPONSE
    
    function serverRequest(conf) {
        var p = MonetPromise();
        setTimeout(function() {
            p.resolve('response');
        });
        return p;
    }
    
    function upperCase(string) {
        return string.toUpperCase();
    }

### Failure

    serverRequestFail('conf').map(upperCase).cata(console.log.bind(console), function() {});

    function serverRequestFail(conf) {
    var p = MonetPromise();
    setTimeout(function() {
        p.reject('error');
    }
    return p;

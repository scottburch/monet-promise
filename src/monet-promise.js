MonetPromise = (function() {
    return function Promise() {
        var chainedName;
        var chainedArgs;
        var returnedPromise;

        return {
            monetPromise: true,
            bind: createChainFn('bind'),
            map: createChainFn('map'),
            cata: createChainFn('cata'),
            ap: createChainFn('ap'),
            resolve: resolveOrReject('Right'),
            reject: resolveOrReject('Left')
        };

        function resolveOrReject(rightOrLeft) {
            return function (data) {
                var e = data && typeof (data.unit) === 'function' ? data : Either[rightOrLeft](data);
                chainedName && returnedPromise && returnedPromise.resolve(e[chainedName].apply(e, chainedArgs));
            }
        }

        function createChainFn(fnName) {
            return function () {
                var args = Array.prototype.slice.call(arguments, 0);
                chainedName = fnName;
                chainedArgs = args;
                return returnedPromise = Promise();
            }
        }
    }
}());
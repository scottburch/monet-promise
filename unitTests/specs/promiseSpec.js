describe('MonetPromise', function() {

    it('should run map on success', function(done) {
        serverRequest('conf').map(upperCase).map(checkResponse).map(done);

        function checkResponse(value) {
            expect(value).toBe('RESPONSE:CONF');
        }
    });

    it('should run bind on success', function(done) {
        serverRequest('conf').bind(upperCaseBind).map(checkResponse).map(done);

        function checkResponse(value) {
            expect(value).toBe('RESPONSE:CONF');
        }
    });

    it('should allow you to take cata right path', function(done) {
        serverRequest('conf').map(upperCase).cata(function() {}, success);
        function success(value) {
            expect(value).toBe('RESPONSE:CONF');
            done();
        }
    });

    it('should allow you to take cata left path', function(done) {
        serverRequestFail('conf').map(upperCase).cata(fail, function() {});

        function fail(reason) {
            expect(reason).toBe('fail:conf');
            done();
        }
    });

    function serverRequestFail(conf) {
        var p = MonetPromise();
        setTimeout(function() {
            p.reject('fail:'+conf);
        });
        return p;
    }


    function serverRequest(conf) {
        var p = MonetPromise();
        setTimeout(function() {
            p.resolve('response:'+conf);
        });
        return p;
    }

    function upperCase(string) {
        return string.toUpperCase();
    }

    function upperCaseBind(string) {
        return Identity(string.toUpperCase());
    }

});
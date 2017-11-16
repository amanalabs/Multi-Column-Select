var assert = require('assert');
import bar from "../src/foo/bar";

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            var a = new bar();
            assert.equal(false, a.ans());
        });
    });

    describe('#indexOf2()', function() {

        it('has document', function () {

            var div = document.createElement('div');
            assert.equal(div.nodeName, 'DIV');

        });

    });

});
var assert = require('assert');

import {MCS} from '../../src/mcs/mcs';
let MultiTest = new MCS();

describe('Array', function() {

    describe('MultiColumnSelect::createContainer', function() {
        it('should have class foo', function() {
            var actual = MultiTest.createContainer('foo');
            assert.equal('foo', actual.className);
        });
    });
    describe('MultiColumnSelect::createContainer', function() {
        it('should return DIV', function() {
            var actual = MultiTest.createContainer('foo');
            assert.equal(actual.nodeName, 'DIV');
        });
    });
    describe('MultiColumnSelect::createItem', function() {
        it('should return a Link', function() {
            var actual = MultiTest.createItem('value',1,'name');
            assert.equal(actual.nodeName, 'A');
        });
    });
    describe('MultiColumnSelect::createItem', function() {
        it('should have data-index of 1', function() {
            var actual = MultiTest.createItem('value',1,'name');
            assert.equal(actual.getAttribute('data-index'), 1);
        });
    });
    describe('MultiColumnSelect::createItem', function() {
        it('should have data-value of value', function() {
            var actual = MultiTest.createItem('value',1,'name');
            assert.equal(actual.getAttribute('data-value'), 'value');
        });
    });
    describe('MultiColumnSelect::createItem', function() {
        it('should have innerHtml of name', function() {
            var actual = MultiTest.createItem('value',1,'name');
            assert.equal(actual.innerHTML, 'name');
        });
    });

});
var assert = require('assert');
var search = require('../Binary Search/solution').search;

describe('Binary Search', function() {
  describe('search', function() {
    it('search should return the index of the target number', function() {
        assert.equal(search([1, 2, 3, 4], 2), 1);
    });
    it('search should return the index of the target number', function() {
        assert.equal(search([0, 1, 2, 3, 4], 3), 3);
    });
    it('search should return -1 if the target does not exist', function() {
        assert.equal(search([1, 2, 3, 4], 0), -1);
    });
    it('search should return -1 if the target does not exist', function() {
        assert.equal(search([1, 2, 3, 4], 7), -1);
    });
  });
});
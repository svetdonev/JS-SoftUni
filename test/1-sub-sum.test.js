const assert = require('assert').strict;
const solve = require('../unit-testing/1-sub-sum.js');

describe('Sub-sum calculator', () => {
    it('Should return sub-sum when endIndex is larger than length', () => {
        // Arange
        let expectedSum = 150;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;
    
        // Act
        let actualSum = solve(numbers, startIndex, endIndex);
    
        // Assert
        assert.equal(actualSum, expectedSum);
    });
    
    it('Should return sub-sum when startIndex is less than zero', () => {
        // Arange
        let expectedSum = 60;
        let numbers = [10, 20, 30, 40, 50, 60];
        let startIndex = -100;
        let endIndex = 2;
    
        // Act
        let actualSum = solve(numbers, startIndex, endIndex);
    
        // Assert
        assert.equal(actualSum, expectedSum);
    });
});
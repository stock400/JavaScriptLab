var assert = require('assert');
var makeSave = require("./javaforpage").makeSave;

var testSave = makeSave("save1");

var testArray = ["save1"];

describe('Saving', function() {
    describe('test 1', function() {
        it('should save the initial value into an array', function(){
            assert.equal(testSave.toString(), testArray);
        })
    });
    testSave.save("save2");
    testSave.save("save3");
    testSave.save("save4");
    testSave.save("save5");
    testArray.push("save2", "save3", "save4", "save5");

    describe('test 2', function() {
        it('should print full array of saved states', function() {
            assert.equal(testSave.toString(), testArray);
        })
    })
});

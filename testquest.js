var assert = require("assert");
var makeSave = require('./javaforpage').makeSave;
var charizardCount = require('./javaforpage').charizardCount;

var testSave = makeSave("save1");

describe('Saving', function() {
    describe('Save test 1', function() {
        it('should save the textarea value into an array and return the saved value', function(){
            assert.equal(testSave.save("save2"), "save2");
        })
    });

    describe('Save test 2', function() {
        it('should save the textarea value into an array and return the saved value', function() {
            testSave.save("save3");
            testSave.save("save4");
            testSave.save("save5");
            assert.equal(testSave.save("save6"), "save6");
        })
    });

    describe('Undo test 1', function() {
        it('should undo textarea state and return the undone state', function() {
            assert.equal(testSave.undo(), "save5");
        })
    });

    describe('Undo test 2', function() {
        it('should undo textarea state and return the undone state', function() {
            assert.equal(testSave.undo(), "save4");
        })
    });

    describe('Redo test 1', function() {
        it('should redo textarea state and return the redone state', function() {
            assert.equal(testSave.redo(), "save5");
        })
    });

    describe('Redo test 2', function() {
        it('should redo textarea state and return the redone state', function() {
            assert.equal(testSave.redo(), "save6");
        })
    });

});

describe('Character Count', function() {
    describe('Count test 1', function() {
        it('should count the length of text', function(){
            assert.equal(charizardCount("This will be 16."), 16);
        })
    });

    describe('Count test 2', function() {
        it('should count the length of text', function(){
            assert.equal(charizardCount("123456"), 6);
        })
    });


});


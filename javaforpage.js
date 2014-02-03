function makeSave(start) {
    var states = [];
    states[0] = start;

    var position = 0;

    return {
        save: function(boxState) {
            position = 0;
            states.push(boxState)
        },

        undo: function() {
            if (position >= states.length) {
                alert("can't undo");
            } else {
                document.getElementsByTagName('textarea').value = states[position++];
            }
        },

        redo: function() {
            if (position <= 0) {
                prompt("can't redo");
            } else {
                document.getElementsByTagName('textarea').value = states[position--];
            }
        },

        printStates: function() {
            console.log(states);
        },

        makeString: function() {  var input = document.getElementsByTagName('textarea');
            states.toString();
        }

    }

}

module.exports.makeSave = makeSave;
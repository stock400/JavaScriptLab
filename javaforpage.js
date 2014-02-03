function makeSave(start) {
    var states = [];
    states[0] = start;

    var input = document.getElementsByTagName('textarea');
    var position = 0;

    return {
        save: function(boxState) {
            position = 0;
            states.push(boxState)
        },

        undo: function() {
            if (position <= 0) {
                alert("can't undo");
            } else {
                var toUndo = states[position++];
                document.getElementsByTagName('textarea').value = toUndo;
            }
        },

        redo: function() {
            if (position >= states.length) {
                alert("can't redo");
            } else {
                var toRedo = states[position--];
                document.getElementsByTagName('textarea').value = toRedo;
            }
        },

        printStates: function() {
            console.log(states);
        },

        makeString: function() {
            states.toString();
        }

    }

}
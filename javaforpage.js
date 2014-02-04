function makeSave(start) {
    var states = [];
    states[0] = start;

    var position = 0;

    return {
        save: function(boxState) {
            position = 0;
            if(states.length == 5) {
                states.splice(4, 1);
                states.unshift(boxState);
            } else {
                states.unshift(boxState);
            }
            return states[0];
        },

        undo: function() {
            if (position >= states.length) {
                return alert("Can't undo");
            } else {
                return states[++position];
            }
        },

        redo: function() {
            if (position <= 0) {
                return alert("Can't redo");
            } else {
                return states[--position];
            }
        },

        printStates: function() {
            console.log(states);
        },

        makeString: function() {
            return states.toString();
        }

    }

}

module.exports.makeSave = makeSave;

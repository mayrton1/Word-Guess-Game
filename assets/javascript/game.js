
var game = {
    //page elements//
    UNDERSCORES: $("#underscores"),
    RIGHTGUESS: $("#rightguess"),
    WRONGGUESS: $("#wrongguess"),
    DEBUG: $("#debug"),
    YOUWIN: $("#youwin"),
    YOULOSE: $("#youlose"),
    // game properties//
    defaultWords: ["sith", "jedi", "deathstar", "vader"],
    underscores_string: "",
    underscores_arr: [],
    rightguess: 0,
    wrongguess: 10,
    currentword_string: "",
    currentword_arr: [],

    chooseWord: function () {
        this.currentword_string = this.defaultWords[Math.floor(Math.random() * this.defaultWords.length)];

        // Convert String to Array
        this.currentword_arr = this.currentword_string.split("");

        // Insert underscores
        for (var i = 0; i < this.currentword_string.length; i++) {
            var x = this.currentword_string.charAt(i);
            if (x === "") {
                this.underscores_string += x;
                this.underscores_arr[i] = x;
            } else {
                this.underscores_string += " _ ";
                this.underscores_arr[i] = "_";
            }
        }

        // Debug
        this.debugThis(this.currentword_string, false);
        this.debugThis(this.currentword_arr, false);
        this.debugThis(this.underscores_arr, false);
        this.debugThis(this.underscores_string, false);
        this.debugThis(this.youwin_arr, false);
        this.debugThis(this.youwin_string, false);
        this.debugThis(this.youlose_arr, false);
        this.debugThis(this.youlose_string, false);

        this.RIGHTGUESS.html(this.rightguess);
        this.WRONGGUESS.html(this.wrongguess);
        this.UNDERSCORES.html(this.underscores_string);
    },

    check_letter: function (letter) {
        var found = false;
        var foundAt = [];

        for (var i = 0; i < this.currentword_string.length; i++) {
            var current_letter = this.currentword_string.charAt(i);
            if (current_letter === letter) {
                found = true;
                foundAt.push(i);
            }
        }

        if (found) {
            var that = this;
            foundAt.forEach(function (i) {
                that.underscores_arr[i] = letter;
            });

            this.rightguess++;
        } else {
            this.wrongguess--;
        }


        // Convert Array to String
        this.underscores_string = this.underscores_arr.join(" ");

        this.RIGHTGUESS.html(this.rightguess);
        this.WRONGGUESS.html(this.wrongguess);
        this.UNDERSCORES.html(this.underscores_string);

        this.pauseAll();
        this.winCondition();
    },

    winCondition: function () {

        // Debug
        this.debugThis(this.underscores_string, false);
        this.debugThis(this.underscores_arr, false);

        // Determine win or loss based on this.rightguess and this.wrongguess
        this.YOUWIN()

        // WIN 
        // $("#vader").play();
        // this.chooseWord

        // LOSE
        // maybe play lose sound and display a message
    },

    pauseAll() {
        // $("#vader").pause();
    },

    debugThis: function (debug_string, show = true) {
        if (show) { this.DEBUG.html(debug_string); }

        console.log("======================");
        console.log(debug_string);
        console.log("======================");
    }
}

game.chooseWord();

$(document).keyup(function (event) {
    var keypress = event.key.toLowerCase();
    // console.log(keypress);

    game.check_letter(keypress);
});
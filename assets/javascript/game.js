
var game = {
    //page elements//
    UNDERSCORES: $("#underscores"),
    RIGHTGUESS: $("#rightguess"),
    WRONGGUESS: $("#wrongguess"),
    DEBUG: $("#debug"),

    // game properties//
    defaultWords: ["Sith", "Jedi", "Deathstar", "Vader"],
    underscores: "",
    currentword: "",
    chooseWord: function () {

        this.currentword = this.defaultWords[Math.floor(Math.random() * this.defaultWords.length)];

        this.debugThis(this.currentword);

        // Insert underscores
        for (var i = 0; i < this.currentword.length; i++) {
            var x = this.currentword.charAt(i);
            if (x === "") {
                this.underscores += x;
            } else {
                this.underscores += " _ ";
            }
        }

        this.UNDERSCORES.html(this.underscores);

    },

    debugThis: function (debug_string) {
        this.DEBUG.html(debug_string);
        console.log("======================");
        console.log(debug_string);
        console.log("======================");



    }
}


var choice







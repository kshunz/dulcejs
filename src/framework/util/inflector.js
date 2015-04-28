define([], function () {

  function Inflector() {

    var $this = this;

    var ccAfterDelim = function (input, delim) {

      var separateByDelim = input.split(delim);

      if (separateByDelim.length > 1) {
        var iteration = 0;
        var capped = separateByDelim.map(function (piece) {
          piece = String(piece).toLowerCase();
          iteration++;

          return iteration > 1 ? piece.charAt(0).toUpperCase() + piece.slice(1) : piece;
        });

        input = capped.join('');
      }

      return input;
    };

    this.camelize = function (str) {
      str = (str === undefined || str === null) ? '' : String(str);

      //Add more delimiters if needed
      //--> The letter following the delimiter will be camelCased
      var delims = ['_', '-', ' '];

      if (/^[A-Z]*$/.test(str) !== true) {

        var scrubbed;

        delims.forEach(function (delim) {
          scrubbed = scrubbed ? ccAfterDelim(scrubbed, delim) : ccAfterDelim(str, delim);
        });

        str = scrubbed;
      }

      return str;

    };

    this.delimitize = function (str, delim) {

      delim = delim || '_';

      var phrase;

      phrase = str.split('').map(function (char, charNum) {

        var isCap = /[A-Z]/.test(char),
            lowerChar = char.toLowerCase();

        if (charNum !== 0 && isCap) {
          return delim + lowerChar;
        } else {
          return lowerChar;
        }

        return char;

      });

      return phrase.join('');

    };

    this.modelize = function (str) {
      str = str.split('Controller').join('');

      var phrase = str.split(''),
          lastLetter = phrase.pop(),
          firstLetter;

      if (lastLetter === 's') {
        firstLetter = phrase.shift().toUpperCase();
        phrase.unshift(firstLetter);
      } else {
        phrase.push(lastLetter);
      }

      phrase = phrase.join('');

      return phrase;
    };

    this.underscore = function (str) {
      return $this.delimitize(str, '_');
    };
  }

  return new Inflector();
});
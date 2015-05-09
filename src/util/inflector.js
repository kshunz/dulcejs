module.exports = function() {

  return new Inflector();

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

      phrase = str.split('').map(function (char) {

        var isCap = /[A-Z]/.test(char),
            lowerChar = char.toLowerCase();

        if(isCap) {
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
      var specialCases = require('./inflector/special_cases');
      var isSpecial = specialCases[str] ? true : false;
      var phrase = str.split('');
      var firstLetter;
      var lastLetter = phrase.pop();

      if(isSpecial) {
        phrase = specialCases[str].split('');
      }

      firstLetter = phrase.shift().toUpperCase();
      phrase.unshift(firstLetter);

      return phrase.join('');
    };

    this.underscore = function (str) {
      return $this.delimitize(str, '_');
    };
  }
};

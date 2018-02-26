module.exports = {
    convertToChange: function(cents) {
        if (cents == null || cents <= 0) {
            return [];
        }
        var change = [];
        var remainder = cents;
        do {
            if (remainder >= 25) {
                change.push('q');
                remainder -= 25;
            }
            else if (remainder >= 10) {
                change.push('d');
                remainder -= 10;
            }
            else if (remainder >= 5) {
                change.push('n');
                remainder -= 5;
            }
            else if (remainder >=1) {
                change.push('p');
                remainder -= 1;
            }
        }
        while(remainder > 0);

        return change;
    },

    getAmount: function(coinType) {
        // COINS:
        // [p]enny
        // [n]ickel
        // [d]ime
        // [q]uarter
        if (coinType == 'p') {
            return 1;
        }
        else if (coinType == 'n') {
            return 5;
        }
        else if (coinType == 'd') {
            return 10;
        }
        else if (coinType == 'q') {
            return 25;
        }
        else {
            throw  new Error('Unrecognized coin ' + coinType );
        }
      }
};
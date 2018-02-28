module.exports = function(inputWords) {
    return inputWords.reduce(function(aggregate, word){
        aggregate[word] =  (aggregate.hasOwnProperty(word)) ? aggregate[word] + 1 : 1;
        return aggregate;
    },{} );
};
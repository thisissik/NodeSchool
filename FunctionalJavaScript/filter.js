module.exports = function(messages) {
    return messages.filter(messageItem => messageItem.message.length < 50).map(messageItem => messageItem.message);
}
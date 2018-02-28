module.exports = function checkUsersValid(goodUsers) {
    var whiteList = goodUsers;
    return function allUsersValid(submittedUser) {
        return submittedUser.every(user => whiteList.includes(user));
    }
}
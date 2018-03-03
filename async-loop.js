function loadUsers(userIds, load, done) {
    var users = [];
    userIds.map((id) => setTimeout(load(id, (obj) => users.push(obj) ),0) );
    
    return done(users);
  }

  module.exports = loadUsers
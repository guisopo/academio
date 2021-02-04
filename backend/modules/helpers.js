module.exports = {
  isAdmin: (currentUser) => {
    // Check if user is logged in
    if(!currentUser) {
      throw new Error('You must be logged in.');
    }
    // Check if current user is an administrator
    if(currentUser.role !== 'Admin') {
      throw new Error('You must have an Administration role.');
    }
  },

  userLogged: (currentUser) => {
    // Check if user is logged in
    if(!currentUser) {
      throw new Error('You must be logged in.');
    }
  }
}
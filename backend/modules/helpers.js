module.exports = isAdmin = (currentUser) => {
  console.log('1');
  // Check if user is logged in
  if(!currentUser) {
    console.log('2');
    throw new Error('You must be logged in.');
  }
  // Check if current user is an administrator
  if(currentUser.role !== 'Admin') {
    console.log('3');
    throw new Error('You must have an Administration role.');
  }
  console.log('3');
  return true;
};
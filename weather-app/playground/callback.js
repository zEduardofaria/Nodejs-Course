const getUser = (id, callback) => {
  const user = {
    id,
    name: 'Eduardo'
  };

  setTimeout(() => {
    callback(user);
  }, 3000)
};

getUser(215, (userObject) => {
  console.log(userObject)
})
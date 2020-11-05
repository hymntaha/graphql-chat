module.exports = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: 'john',
          email: 'john@email.com'
        },
        {
          username: 'jane',
          email: 'jane@email.com'
        }
      ]
      return users
    },
  }
}

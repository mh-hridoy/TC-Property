
const users = [
  { id: 1, name: "barney", age: 36, active: true },
  { id: 2, name: "fred", age: 40, active: false },
  { id: 3, name: "pebbles", age: 1, active: true },
]

const resolvers = {
  Query: {
    getUser: (_, { id }) => {
      return users[1]
    },
  },
}

export default resolvers

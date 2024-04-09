const typeDefs = `#graphql
    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        createdAt: String
        updatedAt: String
    }

    type Expense{
        _id: ID!
        title: String!
        type: String!
        amount: Int!
        createdAt: String
        updatedAt: String
    }

    type Auth{
        token: String!
        user: User! 
    }

    type Query{
        getUsers: [User]
    }

    type Mutation{
        signup(name: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        # addExpense(title:String!, type:String!, amount:Int!): Expense
        # editExpense(_id:ID!, title:String!, type:String, amount:Int!): Expense
        # deleteExpense(_id:ID!): Boolean
    }

    schema{
        query: Query,
        mutation: Mutation
    }
`;

module.exports = typeDefs;

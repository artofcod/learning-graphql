const {buildSchema} = require("graphql");

const schema = buildSchema(`
    type Friend {
        id:ID,
        firstName:String,
        lastName:String,
        gender:String,
        language:String,
        email: String
    }

    type Query{
        friend:Friend
    }

    input FriendInput{
        id:ID,
        firstName:String!,
        lastName:String,
        gender:String,
        language:String,
        email: String
    }

    type Mutation{
        creteFriend(input :FriendInput):Friend
    }
`);

module.exports =  schema;
const {buildSchema} = require("graphql");

const schema = buildSchema(`
    type Friend {
        id:ID,
        firstName:String,
        lastName:String,
        gender:Gender,
        language:String,
        email: String
    }

    enum Gender{
        MALE,
        FEMALE,
        OTHERS
    }

    type Query{
        friend:Friend,
        getFraind(id:ID):Friend,
    }

    input FriendInput{
        id:ID,
        firstName:String!,
        lastName:String,
        gender:Gender,
        language:String,
        email: String
    }

    type Mutation{
        creteFriend(input :FriendInput):Friend
    }
`);

module.exports =  schema;
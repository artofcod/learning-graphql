const {buildSchema} = require("graphql");

const schema = buildSchema(`
    type Friend {
        id:ID,
        firstName:String,
        lastName:String,
        gender:Gender,
        language:String,
        email: String,
        contacts:[Contact]
    }

    type Contact{
        firstName:String,
        lastName:String
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
        contacts:[ContactInput]
    }

    input ContactInput{
        firstName:String,
        lastName:String
    }

    type Mutation{
        creteFriend(input :FriendInput):Friend
    }
`);

module.exports =  schema;
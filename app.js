const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();



app.get('/', (req, res) => {
    res.send('Hello I am Graphql')
})

class Friend{
    constructor(id,{firstName,lastName,gender,language,email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

const friendDatabase={};

const root = {
    friend: () => {
        return {
            id: 1545,
            firstName: "Jhon",
            lastName: "Doe",
            gender: "male",
            language: "English",
            email: "me@me.com" 
        }
    },
    creteFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id,input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3001, () => {
    console.log("server is running at http://localhost/graphql");
})
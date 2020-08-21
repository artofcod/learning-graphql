const express = require('express');
const {graphqlHTTP}  =  require('express-graphql');
const schema = require('./schema');

const app = express();



app.get('/',(req,res)=>{
    res.send('Hello I am Graphql')
})

const root = {friend:()=>{
    return {
        id:1545,
        firstName:"Jhon",
        lastName:"Doe",
        gender:"male",
        language:"English",
        email: "me@me.com"
    }
}}

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

app.listen(3001,()=>{
    console.log("server is running at http://localhost/graphql");
})
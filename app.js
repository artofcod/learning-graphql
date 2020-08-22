const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolver = require('./resolver');
const app = express();

const root = resolver;

app.get('/', (req, res) => {
    res.send('Hello I am Graphql')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3001, () => {
    console.log("server is running at http://localhost/graphql");
})
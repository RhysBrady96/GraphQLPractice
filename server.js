const express = require('express');
const expressGrahpQL = require('express-graphql');
const schema = require('./schema/schema');

//mongodb://rhysbrady96:password1@ds145293.mlab.com:45293/graphql

const app = express();

app.use('/graphql', expressGrahpQL({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('listening');
});


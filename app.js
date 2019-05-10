const express = require('express');
const app = express();
const port = 3000;

function sayHello(name) {
    result = 'Hello  ' + name
    console.log(result);
    return result;
}

function givePage1() {
    return "Dadoh stranica 1";
}

function givePage2() {
    return "Dadoh stranica 2";
}

app.get('/', (req, res) => res.send(sayHello("Nqma ime")));
app.get('/page1', (req, res) => res.send(givePage1()));
app.get('/page2', (req, res) => res.send(givePage2()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
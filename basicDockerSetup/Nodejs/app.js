'use strict';

const express = require('express')

// [NOTE - Docker config] The hostname doesnt work using 127.0.0.1
// 127.0.0.1 is a network adapter that can only communicate within the same host.
// Port forwarding 3000 => 49160 is somehow bound to a particular network adapter, 
// so it isn't in the path when you connect locally to 127.0.0.1 {source: stackoverflow}
const hostname = '0.0.0.0';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, hostname, () => {
    console.log(`Example app listening at http://${hostname}:${port}/`);
})

const http = require('node:http');
 
const dieRolls = (num) => {
    let rolls = [];

    for (let i = 0; i < num; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    } 
    console.log(rolls);
}

const server = http.createServer((req, res) => {
    const { method, url } = req;
    const { pathname, searchParams } = new URL(req.url, 'http://localhost:8080');

    if (method === 'GET' && url === '/') {
     res.writeHead(200, {'Content-Type':'text/plain'});
     res.end(JSON.stringify({ message: 'success', data: 'Hi! It is a great day today!'}));
    return;
    }

    if (method === 'GET' && url === '/api/joke') {
     res.writeHead(200, {'Content-Type': 'application/json'});
     res.end(JSON.stringify({ "setup": "What's 9 + 10?", "punchline": "21" }));
     return;
    }

    if (method === 'GET' && url === '/api/rollDie') {
     res.writeHead(200, {'Content-Type': 'application/json'});
     res.end(JSON.stringify({ "rolls": dieRolls(parseInt(searchParams.get('quantity')))}));
     return;
    }
});

server.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});
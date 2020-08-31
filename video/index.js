const http = require('http');
var socketIo = require('socket.io');
const fs = require('fs');
// var toArrayBuffer = require('to-arraybuffer')

const server = http.createServer(async (req, res) => {
    if (req.url.endsWith('.html')) {
        const data = fs.readFileSync(`${__dirname}/www${req.url}`);
        res.writeHead(200);
        res.end(data);
        return;
    } else if (req.url.endsWith('.mp4')) {
        const data = fs.readFileSync(`${__dirname}/video/123.mp4`);
        res.end(data);
        return;
    } else {
        res.writeHead(404);
        res.end('404');
        return;
    }
});

server.listen(8080);

socketIo(server).on('connection', function (socket) {
    socket.on('get', function (data) {
        console.log(data);
    })
    const data = fs.readFileSync(`${__dirname}/video/456.mp4`);
    // const rs = fs.createReadStream(`${__dirname}/video/123.mp4`);

    // rs.on('data', (data) => {
    //     socket.emit('news', data);
    // })
    socket.emit('news', data);
});;

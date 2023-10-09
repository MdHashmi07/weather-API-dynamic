import http from 'http';
import { port } from './config.js';
import { handleRoutes } from './routes/routes.js';

const server = http.createServer((request, response) => {
    try {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Header", "*");
        response.end(handleRoutes(request));

    } catch (error) {
        console.log(error);
    }
});

server.listen(port, () => {
    console.log(`Server listen on port:${port}`);
})











































// const http = require('http');
// const fs = require('fs');

// const port = process.env.PORT || 7000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if (req.url == '/') {
//         res.statusCode = 200;
//         const main = fs.readFileSync('./weather.json');
//         res.end(main);
//     }
//     else if (req.url == '/weather') {
//         res.statusCode = 200;
//         const main = fs.readFileSync('./weather.json');
//         res.end(main);
//     }
//     else {
//         res.statusCode = 404;
//         res.end('<h1>Not Found</h1><p>Page Not found</p>');
//     }
// });

// server.listen(port, () => {
//     console.log(`Server is listen on port ${port}`); 
// });

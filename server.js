const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

const serverPort = process.env.PORT || 4000;

function startServer() {
    const app = next({dev});
    const handle = app.getRequestHandler();
  
    const server = express();

    app.prepare().then(() => {
        server.get('/service-worker.js', (req, res) => {
            const filePath = path.join(__dirname, '.next', '/service-worker.js');
      
            app.serveStatic(req, res, filePath);
          });
      
          server.get('*', (req, res) => {
            console.log(req.url, 'Inside *, Handle req');
            handle(req, res, req.url);
          });
      
          server.listen(serverPort, err => {
            if (err) throw err;
            console.log('> Ready on port: ' + serverPort);
          });
    })
}
startServer();
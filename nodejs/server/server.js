const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    if(request.url === '/') {
        response.write('<h1>Página principal</h1>');        
    }else if(request.url === '/welcome') {
        response.write('<h1>Welcome</h1>');
    }else {
        response.write('<h1>Page not found</h1>');
    }
    response.end();
});

server.listen(3000, () => {
    console.log('Servidor rodando');
});
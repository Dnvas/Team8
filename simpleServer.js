const http = require('http');

// Create the server
const server = http.createServer((request, response) => {
  // Set the response HTTP header with HTTP status and Content-Type
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as "Hello, World!"
  response.end('Hello, World!\n');
});

// Start the server and listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});

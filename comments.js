// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express server
const app = express();
// 3. Create a port
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5. Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// 6. Create a route for comments
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// 7. Create a route for comments with a specific ID
app.get('/comments/:id', (req, res) => {
  res.send(`Comment ID: ${req.params.id}`);
});
// 8. Create a route for comments with a specific ID and a sub-route
app.get('/comments/:id/:subroute', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Sub-route: ${req.params.subroute}`);
});
// 9. Create a route for comments with a specific ID and a sub-route with a query parameter
app.get('/comments/:id/:subroute', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Sub-route: ${req.params.subroute}, Query: ${req.query}`);
});
// 10. Create a route for comments with a specific ID and a sub-route with a query parameter
app.get('/comments/:id/:subroute', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Sub-route: ${req.params.subroute}, Query: ${req.query}`);
});
// 11. Create a route for comments with a specific ID and a sub-route with a query parameter
app.get('/comments/:id/:subroute', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Sub-route: ${req.params.subroute}, Query: ${req.query}`);
});
// 12. Create a route for comments with a specific ID and a sub-route with a query parameter
app.get('/comments/:id/:subroute', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Sub-route: ${req.params.subroute}, Query: ${req.query}`);
});
// 13. Create
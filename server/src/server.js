const http = require('http');
const app = require('./app');

const { loadPlanetData } = require('./models/planets.model');
const port = process.env.PORT || 3240;

const server = http.createServer(app);

const startServer = async () => {
    await loadPlanetData();
    server.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));
};

startServer();

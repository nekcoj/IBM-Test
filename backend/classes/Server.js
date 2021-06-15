const express = require('express')
const cors = require('cors');

module.exports = class Server {
  constructor(port = 3000) {
    this.port = port;
    this.startServer();
  }

  startServer() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());

    this.app.use('/api', require('./api'));

    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}!`)
    });
  }
}
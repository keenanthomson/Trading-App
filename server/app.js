const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('react-client/dist'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
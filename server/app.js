const express = require('express');
const app = express();
const port = 3000;

<<<<<<< HEAD
app.use(express.static('client'));

app.listen(port, () => console.log(`Server running on port ${port}`));
=======
app.use(express.static('react-client/dist'));

app.listen(port, () => console.log(`Server listening on port ${port}`));
>>>>>>> tmpWork

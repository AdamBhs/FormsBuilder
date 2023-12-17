const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Connecting to the data base
mongoose.connect("mongodb://localhost:27017/Form-builder", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

// Running the server
app.listen(3001, () => console.log("Server running on port 3001"));
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

const FormQuestion = require('./models/FormQuestion');

// Getting the Data
app.get('/Forms', async (req, res) => {
    const forms = await FormQuestion.find();

    res.json(forms);
})

// Adding Data
app.post("/Forms/new", (req, res) => {
    const form = new FormQuestion({
        title: req.body.title,
        questions: req.body.questions,
    });

    form.save();

    res.json(form);
});
// Drop data
app.delete('/Forms/delete/:id', async (req, res) => {
    const result = await FormQuestion.findByIdAndDelete(req.params.id);

    res.json(result);
})

// Running the server
app.listen(3001, () => console.log("Server running on port 3001"));
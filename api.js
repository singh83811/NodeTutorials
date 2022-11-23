const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb')
const app = express();
app.use(express.json());


app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
});


app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result);
});

app.put('/:name', async (req, res) => {
    // console.log(req.body)
    let data = await dbConnect();
    let result = data.updateOne(
        // { name: "A3s" },
        // {name: req.body.name},
        { name: req.params.name },
        { $set: req.body }
    )
    res.send({ result: "updated" })
});

app.delete('/:id', async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.send({ result })
});

app.listen(5000);
const bookRoter = require('express').Router()
const data = require('../models/book')

bookRoter.get('/', async (req, res) => {
    const all = await data.find()
    res.json(all)
})

bookRoter.post('/', async (req, res) => {
    const all = await data.find()
    res.json(all)
})

bookRoter.get('/seed', (req, res) => {
    data.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
    },
    {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
    },
    {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
    },
    {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
    }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


bookRoter.get('/:id', async (req, res) => {
    const data1 = await data.findOne({title:req.params.id})
    res.json(data1)
})

bookRoter.post('/:id', async (req, res) => {
    const data1 = await data.findOne({title:req.params.id})
    res.json(data1)
})

bookRoter.delete('/:id', async (req, res) => {
    const data1 = await data.deleteOne({title:req.params.id})
    res.json(data1)
})
module.exports = bookRoter
const express = require("express")

const CSVToJSON = require("csvtojson");
const cors = require('cors');

const FileSystem = require("fs");

require('dotenv').config();
const app = express();
app.use(cors())


app.get('/api/restaurants', (req, res) => {
    try {
        CSVToJSON().fromFile("./restaurants_2.csv").then(source => {
            const data = source;
            res.json(data);
        })
    } catch (e) {
        console.log(e)
    }
});

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Application running on port ${process.env.PORT}`)
    }

})
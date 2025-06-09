import express, { Express } from "express";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 8181


app.get('/', (req, res) => {
    res.send("Hello Node")
})

app.listen(PORT, () => {
    console.log(`App run at ${PORT}`);

})
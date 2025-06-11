import express from "express";
import 'dotenv/config';
import webRoutes from "./routes/web";
import { initDatabase } from "./configs/seed";
import apiWebRoutes from "./routes/APIweb";
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 8181;

// config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static file (img, css, js)
app.use(express.static('public'));

//init users database
initDatabase();

// config router (Always at the end of config app)
webRoutes(app);

// config router (Always at the end of config app)
app.use(cors())
apiWebRoutes(app);

app.listen(PORT, () => {
    console.log(`App run at ${PORT}`);
});
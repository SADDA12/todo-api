import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todosRoutes from "./routes/todos.routes.js"


// create express app
const app = express();

// Apply middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

// Use routes
app.use(todosRoutes)

// listen for incoming requests
app.listen(4000, () => {
    console.log("Express app is running!")
});
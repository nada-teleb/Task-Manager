const express = require('express');
const app = express();
const tasks = require('./routes/tasks');


//************************ MIDDLEWARE ******************************//
app.use(express.json());

//************************ ROUTES ******************************//
app.get("/hello", (req, res) => { res.send("Task Manager App"); });

app.use('/api/v1/tasks', tasks);

//******************************************************//
// Conventionally using /api/ to determine the API specified routes
// using /v1/ to signal the version number for upcoming changes as different versions

// app.get("/api/v1/tasks"); 				-get all the tasks
// app.post("/api/v1/tasks"); 				-create a new task
// app.get("/api/v1/tasks/:id"); 			-get a single task
// app.patch("/api/v1/tasks/:id"); 			-update task
// app.delete("/api/v1/tasks/:id");			-delete task
//******************************************************//


const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
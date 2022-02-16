const mongoose = require('mongoose');


const connectionString = "mongodb+srv://nada:admin@nodejsprojects.inucu.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";


mongoose
    .connect(connectionString, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true })
    .then(() => console.log("CONNECTED TO THE DB..."))
    .catch(err => console.log(err));
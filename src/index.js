const express = require('express');
const app = express();
const connectDb = require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const port = process.env.PORT || 5000;
connectDb();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => `Server running on port ${port} 🔥`);

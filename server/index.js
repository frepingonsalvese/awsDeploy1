const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.get('/'  , (req , res) => {res.json(msg : "Hi there")})
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://frepingonsalvese13:jszRR3zEp9F7ZRXT@cluster0.pnjdotk.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "NewCourse" });

app.listen(3000, () => console.log('Server running on port 3000'));

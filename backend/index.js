const port = 5000;
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
// database connction

mongoose.connect("mongodb+srv://abhishek88414:abhishekraj12@cluster0.gth1b8j.mongodb.net/genimiapi")

app.get("/", (req, res) => {
    res.send("Express App is Running")
})

app.listen(port, (error) => {
    if (!error) {
        console.log("srver in running the server", +port);
    }
    else {
        console.log("Error: " + error)
    }
})



// Shema creating for user model 


const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    }

})

// Creating endpoint of user registions

app.post('/signup', async (req, res) => {

    let check = await Users.findOne({ email: req.body.email })

    if (check) {
        return res.status(400).json({ success: false, error: "exiting user found with email id and addresss" })
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })

})

// Creating endpoint for user login

app.post('/login', async (req, res) => {

    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passwordCompare = req.body.password === user.password;

        if (passwordCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, errors: "wrong password" })
        }
    }
    else {
        res.json({ success: false, errors: "worng Email Id" })
    }

})
//Controller for Auth in routers :- 

// Password Hashing done by bcrypt :- 
import bcrypt from 'bcrypt'

import User from '../models/User.js'

export const registerUser = async (req, res) => {
    // const newUser = await new User({
    //     username: "bhaavesh",
    //     email: "bhaavesh@gmail.com",
    //     password: "bhaavesh10"
    try{
        // Hash password - secure with size 10 hash
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // create a new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        // Save User
        const user = await newUser.save();
        res.status(200).json(user)
    } catch(err){
        res.send(err)
    }
}

export const loginUser = async(req, res) => {
    try{
        const loginVar = await User.findOne({email: req.body.email})
        // !loginVar && res.status(404).send("user not found")
        if(!loginVar){
            res.status(404).json("user not found")
        }
        const validPass = await bcrypt.compare(req.body.password, loginVar.password)
        if (!validPass) {
            res.status(404).json("invalid password")
        }
        res.status(200).json(loginVar)
    }catch(err){
        res.send(err) // later may change to status 500 and json the error . 
        // choose error handling later .
    }

}
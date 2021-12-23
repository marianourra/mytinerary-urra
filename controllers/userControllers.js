const User = require ("../models/User.js")
const bcryptjs = require ("bcryptjs")
const jwt = require('jsonwebtoken') 

const userControllers = {

    addNewUser: async (req, res) => {

        const {name, surname, email, password, image_url, country} = req.body
        
        try{
            let repeatedUser = await User.findOne({email: email})
            if (repeatedUser) throw new Error
            else {
            const hashedPassword = bcryptjs.hashSync(password)
            const newUser = new User ({name, surname, email, password: hashedPassword, image_url, country})
            const token = await jwt.sign({...newUser}, process.env.SECRETORKEY)   

            await newUser.save()
            res.json ({success: true, response: {token, name: newUser.name, image_url: newUser.image_url, _id: newUser._id}, error: null })
        }

           
        }   catch(error) {
            res.json({success: false, response: error.message})
        } 

    },

    signUser: async (req, res) => {
        const {email, password, google} = req.body
        try {
            let savedUser = await User.findOne({email}) 
            if (!savedUser) throw new Error ("Email and/or password incorrect")
            else {

            }
            let match = bcryptjs.compareSync(password, savedUser.password)

            if (!match) throw new Error ("Email and/or password incorrect")

            const token = jwt.sign({...savedUser}, process.env.SECRETORKEY)

            res.json ({success: true, response: {name: savedUser.name, image_url: savedUser.image_url, token}})    

        } catch(error) {
            res.json({success: false, response: error.message })
        }
       
    },

    deleteUser: async (req, res) => {
        try {
            let deleteUser = await User.findOneAndDelete({_id: req.params.id})
            if (deleteUser) {
                res.json({success: true, response: deleteUser})
            } else {
                throw new Error()
            }
        } catch(error) {
            res.json({success: false, response: error.message})
        }
    }, 

    tokenVerification: (req, res) => {
        res.json({name: req.user.name, image_url: req.user.image_url, _id: req.user._id})
    }

}

module.exports = userControllers

import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: true,
    },
    email : {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
        lowercase: true,
        unique: true, 
    },
    avatar: {
        type: String, // cloudinary url jab bi video images upload kerta hai tu wo aik url rakh leta hai 
        required: true,
    },
    coverImage: {
        type: String,
    },
    password : {
        type: String,
        required: [true, 'Password is required'], 
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
        }
    ],
    refreshTokend: {
        type: String,
    },

}, {timestamps: true,})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next()
    
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

// CustomMethod

userSchema.methods.isPasswordCorret = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
    },
    process.env.ACCESSS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRTY
    }
)}

userSchema.methods.generateRefreshToken = function() {
    jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)}




export const User = mongoose.model("User", userSchema);






// jab bi ap na kisi bi field ko search able bana hai ush ka index true ker do 

//jab bi database ma koi password ma password store kera ga tu simple text ma nahi rakh sakta us ko encrpyt kerna pera ga aur ager encrypt ker liya tu ush dobar match kaise kerwae ga ya aik challenge hai

// bcrypt  jo hai wo jo password rakna hai plain text ma nahi rakna hai ush ka liya bcrypt use hoti hai

//jwt token use hoti hai
//Ya jo hai wo bnai jata cryptography ka algorithms ko use kerta hova hain

// jwt ma theen cheeze hai first header algoroithm then payload fancy data  then signature

//direct encryption kerna itna assan nahi ager encryption use kerni hai tu mongoose ka kuch hook ki

// pre ka ander jab bi callback likta hai tab ish ka ander aise mata likye ga kue ka reffernce nahi pata hota  username email ka access chahiye hota hai aur 



// pre("save")

// jab bi password change ho ga ya her bar ish ko save kera ga na ager kisi na picture bi change ki tab bi ya ish ko change ker da ga lakin her bar e change ker da ga 

// jab bi password field ka access bajo tab hi ise ko change kerna hai 

// hum na jo db ma data store kerwaya wo tu kuch aur hai aur jo client baj raha wo tu kuch aur hai



// jwt is berrier token hai ja berrier token ki terah hai ka jo bi muja data baja ga ma usa ya da do ga ya aik key ki tera hai

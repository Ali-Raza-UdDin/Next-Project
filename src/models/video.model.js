import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String,
        required: true  
    },
    thumbnail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true})


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)




// mongoose ki true power jo hai wo ati mongooseki mongoose-aggregate-paginate-v2 sa 

//mongoose ka ander Pre middleware ka use hota hai ka data save hona sa pehla kuch kero 

// mongoose ka ander Post middleware ka use hota hai ka data save hone ka bad  kuch kero

//mongoose jo hai wo ap ko middleware ka ander plugin ka bi concept deta hai

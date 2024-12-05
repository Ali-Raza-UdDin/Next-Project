import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todo",
    },
    subTodo: [
        {
            type: "String",
            required: true,
        }
    ]
}, {timestamps: true})

const Todo = mongoose.model("Todo", todoSchema)
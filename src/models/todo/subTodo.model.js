import mongoose  from "mongoose";

const subTodoSchema =new  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const subTodo = mongoose.model("SubTodo", subTodoSchema)
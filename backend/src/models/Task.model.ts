import mongoose, {Schema} from "mongoose";
import {ETaskType} from "../enums/TaskType.enum";


const TaskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        unique: true
    },
    taskType: {
        type: String,
        required: true,
        enum: Object.values(ETaskType)
    }
})

const Task = mongoose.model('tasks', TaskSchema)
export default Task;


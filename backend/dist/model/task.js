const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        status: String,
        taskType: {
            type: String,
            enum: ["Common Task", "Other Task"]
        },
        startDate: String,
        endDate: String,
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);
taskSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Task = mongoose.model('task', taskSchema);

module.exports = Task;
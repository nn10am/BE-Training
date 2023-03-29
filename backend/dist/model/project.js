const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');



const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
    },
    startDate: String,
    endDate: String,
    description: String,
    projectType: {
        type: String,
        enum: ["Time&Materials", "Fixed Fee", "Non-Billble", "ODC", "Product", "Training"]
    },
    note: String, 
    client: [{ type: mongoose.Schema.Types.ObjectId, ref: 'client' }],
    task: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }],
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
}, {timestamps: true})
projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
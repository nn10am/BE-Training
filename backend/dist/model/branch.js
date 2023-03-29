const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const branchSchema = new mongoose.Schema({
    name: String,
    display_name: String, 
    code: Number,
    color:{type: String, enum: ["Blue", "Red", "Green"]},
    working_time: {
        type: String,
        default: `
                08:30 - 12:00 (3.5h)
                13:00 - 17:30 (4.5h)
        `,
    }
})
branchSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Branch = mongoose.model('branch', branchSchema);
module.exports = Branch;
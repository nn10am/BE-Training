"use strict";
const { default: mongoose } = require('mongoose');
const mongoose_delete = require('mongoose-delete');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



const branchSchema = new mongoose.Schema({
    display_name: String
})
const userSchema = new mongoose.Schema({
    name : String,
    userName: String,
    email: String,
    password: String,
    status: {
        type: Number, 
        enum: [0, 1, 2],
    },
    address: String,
    salary: Number,
    salary_at: Number, 
    allowed_leave_day: Number,
    
    user_code: Number,
    sex: {
        type: String,
        enum: ["Male", "Female"],
    },
    phone_number: String,
    user_level: {
        type: String,
        enum: ["Inter_0", "Inter_1", "Inter_2", "Inter_3", "Fresher", "Junior"],
    },
    working_time: {
        type: String,
        default: `
                08:30 - 12:00 (3.5h)
                13:00 - 17:30 (4.5h)
        `
    },
    start_day : {
        type: Date,
        default: Date.now,
    },
    user_type: {
        type: String,
        enum: ["Staff", "Intern", "Colaborator"],
    },

    is_active: Boolean,
    branch: branchSchema,
    role: {
        type: String,
        enum: ["Admin", "User"],
    }
}, {timestamps: true});

userSchema.plugin(mongoose_delete, {overrideMethods: 'all'})

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

userSchema.methods.comparePassword = async function (password) {
    const result = await bcrypt.compare(password, this.password);
    return result;
};

const User = mongoose.model('user', userSchema);


module.exports = User;
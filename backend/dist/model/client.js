const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const clientSchema = new mongoose.Schema({
    client_name: String,
    client_code: Number,
    client_address: String

}, {timestamps: true})

clientSchema.plugin(mongoose_delete, {overrideMethods: 'all'})

const Client = mongoose.model('client', clientSchema);


module.exports = Client;

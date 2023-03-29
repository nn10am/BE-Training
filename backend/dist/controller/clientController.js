const Client = require("../model/client")

const {createClient, deleteClient, updateClient} = require("../service/client_service")


const getClientAPI = async(req, res) => {
    let results = await Client.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const createClientAPI = async(req, res) => {
    let {client_name, client_code, client_address} = req.body
    let clientData = {
        client_name, client_code, client_address
    }
    let client = await createClient(clientData)
    return res.status(200).json(
        {
            EC: 0,
            data: client
        }
    )
    
}
const updateClientAPI = async(req, res) => {
    let result = await updateClient(req.body)
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const deleteClientAPI= async(req, res) => {
    let id = req.body.id
    console.log(id)
    let result = await deleteClient(id)
    return res.status(200).json({
        errorCode: 0,
        data: result
    })

}




module.exports = {
    getClientAPI,
    createClientAPI,
    updateClientAPI,
    deleteClientAPI
}

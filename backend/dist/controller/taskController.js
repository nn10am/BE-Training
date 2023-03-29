const Task = require("../model/task")

const {createTask, updateTaskService} = require("../service/task_service")

const createTaskAPI = async(req, res) => {
    let result = await createTask(req.body)
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const getTaskAPI = async(req, res) => {
    let results = await Task.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}
const updateTaskAPI = async(req, res) => {
    let result = await updateTaskService(req.body)
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = {
    createTaskAPI,
    getTaskAPI,
    updateTaskAPI
}
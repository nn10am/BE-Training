const Project = require("../model/project")
const {createProject, getProject} = require("../service/project_service")


const createProjectAPI = async(req, res) => {
    let result = await createProject(req.body)
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}
const getProjectAPI = async(req, res) => {
    let result = await getProject(req.query)
    return res.status(200).json({
        EC: 0,
        data: result
    })
}


module.exports = {
    createProjectAPI,
    getProjectAPI
}

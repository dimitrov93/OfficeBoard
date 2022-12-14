const Task = require('../models/Task')

exports.findAllTasks = () => Task.find();
exports.delete = (dataId) => Task.deleteOne({_id: dataId})
exports.withId = (taskId) => Task.findById(taskId)
exports.create = (taskData) => Task.create(taskData)
exports.addComment = (id, data) => Task.updateOne({_id: id}, {$push: {comments: data}})
exports.changeStatus = (id, data) => Task.updateOne({_id: id}, {$set:data} ,{ new: true });
exports.update = (id, data) => Task.findByIdAndUpdate({_id: id},{$set: data},{ new: true })


exports.getOneDetailed = (id) => Task.findById(id)



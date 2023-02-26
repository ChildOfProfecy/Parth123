const courseModel = require('../models/courseModel');
module.exports.getAllCoures = async function(){
    return await courseModel.find({});
}

module.exports.createFirstCourse = async function(){
    const courses = await courseModel.find({});
    if(courses && courses.length>=1){
        return;
    }
    const firstCourse = {
        "title":"DSA",
        "level":"Easy"
    };
    const course = new courseModel(firstCourse);
    await course.save();   
}

module.exports.createCourse = async function(){
    const course = await courseModel(courseInput);
    
    await course.save();   
}

module.exports.updateCourse = async function(courseId, updatedInput){
    await courseModel.findOneAndUpdate({_id:courseId},updateInput);
}

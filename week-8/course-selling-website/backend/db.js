const mongoose = require('mongoose');
const { object } = require('zod');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

})

const adminSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,

})
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageurl:String,
    creatorId: ObjectId
})
const purchaseSchema = new Schema({
    courseId:ObjectId,
    userId:ObjectId,
})

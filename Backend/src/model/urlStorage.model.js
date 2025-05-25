import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
    type: String,
    required: true
  },
  shortCode: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  click:{
    type:Number,
    default:0
  },
  profileImg:{
    type:String,
    default:"https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?uid=R174876492&ga=GA1.1.830641383.1744120202&semt=ais_hybrid&w=740"
  },
  userId:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
    default:null
  }
})


const urlModel = mongoose.model("urlModel",urlSchema)
export default urlModel
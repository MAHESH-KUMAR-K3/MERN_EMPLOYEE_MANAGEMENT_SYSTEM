import mongoose from 'mongoose'

const connectToDatabase = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('conected to MongoDB Mahesh')
    } catch (error) {
        console.log(error)
    }
} 


export default connectToDatabase
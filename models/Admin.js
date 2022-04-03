import mongoose from 'mongoose'

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


const AdminSchema = new Schema({
    name: String,
    email: String,
    password: String
})

var Admin

if (mongoose.models.Admin) {
  Admin = mongoose.model('Admin')
} else {
  Admin = mongoose.model('Admin', AdminSchema)
}
export default Admin
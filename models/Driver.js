import mongoose from 'mongoose'

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


const DriverSchema = new Schema({
    nom: String,
    prenom: String,
    email: String,
    phone: String,
    marque: String,
    model: String,
    year: Number,
    commune: String,
    how: String,
    isCheck: {
      type: Boolean,
      default: false
    }
}, { timestamps: true })

var Driver;

if (mongoose.models.Driver) {
  Driver = mongoose.model('Driver');
} else {
  Driver = mongoose.model('Driver', DriverSchema);
}
export default Driver
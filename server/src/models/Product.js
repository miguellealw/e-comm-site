import mongoose, {
  Schema
} from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    minlength: [5, "The name needs to be longer"],
    maxlength: [144, "The name needs to be shorter"]
  },
  description: String,
  price: Schema.Types.Mixed,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

export default mongoose.model('Product', ProductSchema);
import mongoose, {
  Schema
} from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [144, "The name needs to be shorter"],
    required: true
  },
  description: String,
  price: Schema.Types.Mixed,
  quantity: {
    type: Number,
    required: true,
  },
  picture: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Product', ProductSchema);
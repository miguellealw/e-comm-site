import Product from '../../models/Product';
import { requireAuth } from '../../services/auth'

/* 
<========================================>
  Product Resolvers
<========================================>
*/
const getProduct = async (_, { _id }, { userId }) => {
  try {
    await requireAuth(userId);
    return Product.findById(_id)
  } catch (error) {
    throw error;
  }
}

const getProducts = async (_, args, { userId }) => {
  try {
    await requireAuth(userId)
    return Product.find({}).sort({ createdAt: -1 })
  } catch (error) {
    throw error;
  }
}

const getUserProducts = async (_ , args, { userId }) => {
 try {
   await requireAuth(userId);
   return Product.find({ owner: userId }).sort({ createdAt: -1 });
 } catch (error) {
   throw error;
 }
}; 

const createProduct = async (_, args, { userId }) => {
  try {
    await requireAuth(userId);
    return Product.create({...args, owner: userId});
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (_, {_id, ...rest}, { userId }) => {
  try {
    await requireAuth(userId);
    // const product = Product.findByIdAndUpdate(_id, {$set: {...rest}}, {new: true})
    const product = await Product.findOne({_id, owner: userId});

    if(!product) {
      throw new Error('Product not found!!!!');
    }

    Object.entries(rest).forEach(([key, value]) => {
      product[key] = value;
    });

    return product.save();
  } catch (error) {
    throw error;
  }
}

const deleteProduct = async ( _, { _id }, { userId }) => {
  try {
    await requireAuth(userId);
    // await Product.findByIdAndRemove({_id}).catch(error => {throw error});
    const product = await Product.findOne({ _id, owner: userId })
    
    if(!product) {
      throw new Error('Product not found')
    }

    await product.remove();
    
    return {
      message: 'Product Deleted Successfully',
    }
  } catch (error) {
    throw error;
  }
}

export default {
  getProduct,
  getProducts,
  getUserProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
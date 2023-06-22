
const productModel = require("../models/productModel")


// create product -- admin
exports.createProduct= async (req,res,next)=>{

       const product = await productModel.create(req.body)
       res.json({
           success:true,
           product
       })
}

// get products 
exports.getAllProducts=async (req,res,next)=>{

    const products = await productModel.find();
    res.json({
        success:true,
        "products":products
    })
}

// update products -- admin
exports.updateProduct = async (req,res,next)=>{

    let product = await productModel.findById(req.params.id)

    if(!product){
        return res.json({
            sucesss:false,
            message:"Product not found"
        })
    }

    product = await productModel.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false

    });
    return res.json({
        sucesss:true,
        product
    })
   
}

//delete the product

exports.deleteProduct=async (req,res,next)=>{
    let product = await productModel.findById(req.params.id)

    if(!product){
        return res.json({
            sucesss:false,
            message:"Product not found"
        })
    }
     await productModel.deleteOne();
     return res.json({
        sucesss:true,
        message:"product deleted successfully"
    })

}

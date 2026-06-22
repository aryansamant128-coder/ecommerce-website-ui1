import {useState} from "react";
import {supabaseClient} from "./supabase";


function ProductAddForm(){

const [product,setProduct]=useState({
name:"",
price:"",
image:"",
description:""
});


const addProduct = async(e)=>{

e.preventDefault();

const {error}=await supabaseClient
.from("products")
.insert([product]);


if(error){
alert(error.message)
}
else{
alert("Product Added Successfully")
}

}


return(

<div className="product-form">

<h1>Add Product</h1>

<form onSubmit={addProduct}>


<input
placeholder="Product Name"
onChange={(e)=>setProduct({...product,name:e.target.value})}
/>


<input
placeholder="Price"
onChange={(e)=>setProduct({...product,price:e.target.value})}
/>


<input
placeholder="Image URL"
onChange={(e)=>setProduct({...product,image:e.target.value})}
/>


<textarea
placeholder="Description"
onChange={(e)=>setProduct({...product,description:e.target.value})}
/>
<input
placeholder="Category"
value={product.category}
onChange={(e)=>
setProduct({...product,category:e.target.value})
}
/>


<button>
Add Product
</button>


</form>

</div>

)

}

export default ProductAddForm;
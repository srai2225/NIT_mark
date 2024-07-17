// import React from 'react';

// function ProductList({ product, addToCart }) {
//     return (
//         <div className='container'>
//             <div className='product-list'>
//                 {product.map((productItem, productIndex) => (
//                     <div className='product-item' key={productIndex}>
//                         <img src={productItem.url} alt={productItem.name} />
//                         <div className='product-details'>
//                             <h3>{productItem.name} | {productItem.category}</h3>
//                             <p>{productItem.seller}</p>
//                             <p>Rs. {productItem.price} /-</p>
//                             <button onClick={() => addToCart(productItem)} className='cart-btn'>Add To Cart</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductList;

import React from 'react';
import "./ProductList.css";

function ProductList({ product, addToCart }) {
    return (
        <div className='container'>
            <div className='product-list' >
                {product.map((productItem, productIndex) => (
                    <div className='product-item' key={productIndex}>
                        <img src={productItem.imageURL} alt={productItem.name} />
                        <div className='product-details'>
                            <h3>{productItem.name} | {productItem.type}</h3>
                            {/* <p>{productItem.shop}</p> */}
                            <p>{productItem.description}</p>
                            <p>Size: {productItem.size}</p>
                            <p>Price: {productItem.price}</p>
                            <p>Rating: {productItem.rating}</p>
                            <button onClick={() => addToCart(productItem)} className='cart-btn'>
                                <span className='bn31span'>
                                Add To Cart
                                </span>
                                </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;

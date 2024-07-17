import React, { useState, useEffect } from 'react';
import '../App.css';
import 'https://checkout.razorpay.com/v1/checkout.js';

function CartList({ cart }) {

    //razorpay integration
    let rzp1;

  const paymentHandler = () => {
    if (rzp1) {
      rzp1.open();
    }
  };

  useEffect(() => {
    const options = {
      key: 'rzp_test_NfO316MIhBBNhz',
      amount: '1000',
      currency: 'INR',
      name: 'NIT_market',
      description: 'Test Transaction Done to NIT_MARKET',
      image: 'https://upload.wikimedia.org/wikipedia/en/7/75/National_Institute_of_Technology%2C_Kurukshetra_Logo.png',
      order_id: 'order_NyUKd2UEOqwo5i',
      handler: (response) => {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Sumit Rai',
        email: 'raisumit2225@gmail.com',
        contact: '9717755752',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    rzp1 = new window.Razorpay(options);

    rzp1.on('payment.failed', (response) => {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    return () => {
      // rzp1.removeAllEventListeners();
    };
  }, [paymentHandler]);

    //razorpay ends here


    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);
    const removeFirstThreeChars = (str) => {
        return str.slice(3); // Slice the string starting from index 3 to remove the first three characters
    };
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + parseInt(removeFirstThreeChars(item.price)) * item.quantity, 0);
    };
    

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const decreaseQuantity = (cartIndex) => {
        const updatedCart = cartItems.map((item, index) =>
            cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
        );
        setCartItems(updatedCart);
    };

    const increaseQuantity = (cartIndex) => {
        const updatedCart = cartItems.map((item, index) =>
            cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
    };

    const removeItem = (cartIndex) => {
        const updatedCart = cartItems.filter((item, index) => index !== cartIndex);
        setCartItems(updatedCart);
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="mb-4">Your Cart</h2>
                    <ul className="list-group">
                        {cartItems.map((cartItem, cartIndex) => (
                            <li key={cartIndex} className="list-group-item d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex align-items-center">
                                    <img src={cartItem.imageURL} alt={cartItem.name} className="me-3" style={{ maxWidth: '80px', borderRadius: '5px' }} />
                                    <div>
                                        <h5 className="mb-0">{cartItem.name}</h5>
                                        <p className="mb-0">Price:  {cartItem.price} /-</p>
                                        <p className="mb-0">Rating: {cartItem.rating}</p>
                                        <div className="cart-item-quantity">
                                            <button className="btn btn-outline-primary btn-sm me-2" onClick={() => decreaseQuantity(cartIndex)}> - </button>
                                            <span>{cartItem.quantity}</span>
                                            <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => increaseQuantity(cartIndex)}> + </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-danger" onClick={() => removeItem(cartIndex)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cart Summary</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total Quantity:
                                    <span>{getTotalQuantity()}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total Price:
                                    <span>Rs. {getTotalPrice()} /-</span>
                                </li>
                            </ul>
                            <button className="btn btn-primary mt-3" onClick={paymentHandler}>
                                Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;



// import React, { useState, useEffect } from 'react';
// import '../style.css';

// function CartList({ cart }) {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     const getTotalQuantity = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     return (
//         <><div className="h2-style"> <h2>Your Cart</h2></div><div className="cart-container">

//             <div className="cart-items">
//                 {cartItems.map((cartItem, cartIndex) => (
//                     <div key={cartIndex} className="cart-item">
//                         <img src={cartItem.url} alt={cartItem.name} className="cart-item-image" />
//                         <div className="cart-item-details">
//                             <h3 className="cart-item-name">{cartItem.name}</h3>
//                             <p className="cart-item-price">Rs. {cartItem.price * cartItem.quantity} /-</p>
//                             <div className="cart-item-quantity">
//                                 <button
//                                     onClick={() => {
//                                         const updatedCart = cartItems.map((item, index) => cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//                                         );
//                                         setCartItems(updatedCart);
//                                     } }
//                                 >-</button>
//                                 <span>{cartItem.quantity}</span>
//                                 <button
//                                     onClick={() => {
//                                         const updatedCart = cartItems.map((item, index) => cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
//                                         );
//                                         setCartItems(updatedCart);
//                                     } }
//                                 >+</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className="cart-summary">
//                 <h2>Cart Summary</h2>
//                 <p>Total Quantity: {getTotalQuantity()}</p>
//                 <p>Total Price: Rs. {getTotalPrice()} /-</p>
//                 <button className="checkout-button">Checkout</button>
//             </div>
//         </div></>
//     );
// }

// export default CartList;

// import React, { useState, useEffect } from 'react';
// import '../App.css';

// function CartList({ cart }) {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     const getTotalQuantity = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     return (
//         <div className="container my-5">
//             <div className="row">
//                 <div className="col-md-8">
//                     <h2 className="mb-4">Your Cart</h2>
//                     <ul className="list-group">
//                         {cartItems.map((cartItem, cartIndex) => (
//                             <li key={cartIndex} className="list-group-item d-flex justify-content-between align-items-center">
//                                 <div className="d-flex align-items-center">
//                                     <img src={cartItem.url} alt={cartItem.name} className="me-3" style={{ maxWidth: '80px', borderRadius: '5px' }} />
//                                     <div>
//                                         <h5 className="mb-0">{cartItem.name}</h5>
//                                         <p className="mb-0">Price: Rs. {cartItem.price} /-</p>
//                                         <p className="mb-0">Quantity: {cartItem.quantity}</p>
//                                     </div>
//                                 </div>
//                                 <button className="btn btn-danger">Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Cart Summary</h5>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Quantity:
//                                     <span className="badge bg-primary">{getTotalQuantity()}</span>
//                                 </li>
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Price:
//                                     <span className="badge bg-success">Rs. {getTotalPrice()} /-</span>
//                                 </li>
//                             </ul>
//                             <button className="btn btn-primary mt-3">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartList;


// import React, { useState, useEffect } from 'react';
// import '../App.css';

// function CartList({ cart }) {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     const getTotalQuantity = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     return (
//         <div className="container my-5">
//             <h2 className="mb-4">Your Cart</h2>
//             <div className="row">
//                 <div className="col-md-8">
//                     <ul className="list-group">
//                         {/* Cart items rendering */}
//                     </ul>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Cart Summary</h5>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Quantity:
//                                     <span className="badge bg-primary">{getTotalQuantity()}</span>
//                                 </li>
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Price:
//                                     <span className="badge bg-success">Rs. {getTotalPrice()} /-</span>
//                                 </li>
//                             </ul>
//                             <button className="btn btn-primary mt-3">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartList;
// import React, { useState, useEffect } from 'react';
// import '../App.css';

// function CartList({ cart }) {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     const getTotalQuantity = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     return (
//         <div className="container my-5">
//             <h2 className="mb-4">Your Cart</h2>
//             <div className="row">
//                 <div className="col-md-8">
//                     <ul className="list-group">
//                         {cartItems.map((cartItem, index) => (
//                             <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                                 <div>
//                                     <h5>{cartItem.name}</h5>
//                                     <p>Quantity: {cartItem.quantity}</p>
//                                 </div>
//                                 <span>Rs. {cartItem.price * cartItem.quantity} /-</span>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Cart Summary</h5>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Quantity:
//                                     <span className="badge bg-primary">{getTotalQuantity()}</span>
//                                 </li>
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Price:
//                                     <span className="badge bg-success">Rs. {getTotalPrice()} /-</span>
//                                 </li>
//                             </ul>
//                             <button className="btn btn-primary mt-3">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartList;


// import React, { useState, useEffect } from 'react';
// import '../App.css';

// function CartList({ cart }) {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     const getTotalQuantity = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     const decreaseQuantity = (cartIndex) => {
//         const updatedCart = cartItems.map((item, index) =>
//             cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//         );
//         setCartItems(updatedCart);
//     };

//     const increaseQuantity = (cartIndex) => {
//         const updatedCart = cartItems.map((item, index) =>
//             cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCartItems(updatedCart);
//     };

//     return (
//         <div className="container my-5">
//             <div className="row">
//                 <div className="col-md-8">
//                     <h2 className="mb-4">Your Cart</h2>
//                     <ul className="list-group">
//                         {cartItems.map((cartItem, cartIndex) => (
//                             <li key={cartIndex} className="list-group-item d-flex justify-content-between align-items-center mb-3">
//                                 <div className="d-flex align-items-center">
//                                     <img src={cartItem.url} alt={cartItem.name} className="me-3" style={{ maxWidth: '80px', borderRadius: '5px' }} />
//                                     <div>
//                                         <h5 className="mb-0">{cartItem.name}</h5>
//                                         <p className="mb-0">Price: Rs. {cartItem.price} /-</p>
//                                         <div className="cart-item-quantity">
//                                             <button onClick={() => decreaseQuantity(cartIndex)} className="btn btn-sm btn-secondary me-2">-</button>
//                                             <span>{cartItem.quantity}</span>
//                                             <button onClick={() => increaseQuantity(cartIndex)} className="btn btn-sm btn-primary ms-2">+</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button className="btn btn-danger">Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Cart Summary</h5>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Quantity:
//                                     <span>{getTotalQuantity()}</span>
//                                 </li>
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Price:
//                                     <span>Rs. {getTotalPrice()} /-</span>
//                                 </li>
//                             </ul>
//                             <button className="btn btn-primary mt-3">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartList;

// import React, { useState, useEffect } from 'react';
// import '../App.css';

// function CartList({ cart }) {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     const getTotalQuantity = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     const decreaseQuantity = (cartIndex) => {
//         const updatedCart = cartItems.map((item, index) =>
//             cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//         );
//         setCartItems(updatedCart);
//     };

//     const increaseQuantity = (cartIndex) => {
//         const updatedCart = cartItems.map((item, index) =>
//             cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCartItems(updatedCart);
//     };

//     const removeItem = (cartIndex) => {
//         const updatedCart = cartItems.filter((item, index) => index !== cartIndex);
//         setCartItems(updatedCart);
//     };

//     return (
//         <div className="container my-5">
//             <div className="row">
//                 <div className="col-md-8">
//                     <h2 className="mb-4">Your Cart</h2>
//                     <ul className="list-group">
//                         {cartItems.map((cartItem, cartIndex) => (
//                             <li key={cartIndex} className="list-group-item d-flex justify-content-between align-items-center mb-3">
//                                 <div className="d-flex align-items-center">
//                                     <img src={cartItem.url} alt={cartItem.name} className="me-3" style={{ maxWidth: '80px', borderRadius: '5px' }} />
//                                     <div>
//                                         <h5 className="mb-0">{cartItem.name}</h5>
//                                         <p className="mb-0">Price: Rs. {cartItem.price} /-</p>
//                                         <div className="cart-item-quantity">
//                                             <button className="btn btn-outline-primary btn-sm me-2" onClick={() => decreaseQuantity(cartIndex)}> - </button>
//                                             <span>{cartItem.quantity}</span>
//                                             <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => increaseQuantity(cartIndex)}> + </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button className="btn btn-danger" onClick={() => removeItem(cartIndex)}>Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Cart Summary</h5>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Quantity:
//                                     <span>{getTotalQuantity()}</span>
//                                 </li>
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Price:
//                                     <span>Rs. {getTotalPrice()} /-</span>
//                                 </li>
//                             </ul>
//                             <button className="btn btn-primary mt-3">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartList;

// import React, { useState, useEffect } from 'react';
// import '../App.css';

// function CartList({ cart }) {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         setCartItems(cart);
//     }, [cart]);

//     const getTotalPrice = () => {
//         return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('Rs. ', '')) * item.quantity, 0);
//     };

//     const getTotalQuantity = () => {
//         return cartItems.reduce((total, item) => total + item.quantity, 0);
//     };

//     const decreaseQuantity = (cartIndex) => {
//         const updatedCart = cartItems.map((item, index) =>
//             cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
//         );
//         setCartItems(updatedCart);
//     };

//     const increaseQuantity = (cartIndex) => {
//         const updatedCart = cartItems.map((item, index) =>
//             cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCartItems(updatedCart);
//     };

//     const removeItem = (cartIndex) => {
//         const updatedCart = cartItems.filter((item, index) => index !== cartIndex);
//         setCartItems(updatedCart);
//     };

//     return (
//         <div className="container my-5">
//             <div className="row">
//                 <div className="col-md-8">
//                     <h2 className="mb-4">Your Cart</h2>
//                     <ul className="list-group">
//                         {cartItems.map((cartItem, cartIndex) => (
//                             <li key={cartIndex} className="list-group-item d-flex justify-content-between align-items-center mb-3">
//                                 <div className="d-flex align-items-center">
//                                     <img src={cartItem.imageURL} alt={cartItem.name} className="me-3" style={{ maxWidth: '80px', borderRadius: '5px' }} />
//                                     <div>
//                                         <h5 className="mb-0">{cartItem.name}</h5>
//                                         <p className="mb-0">Price: {cartItem.price}</p>
//                                         <div className="cart-item-quantity">
//                                             <button className="btn btn-outline-primary btn-sm me-2" onClick={() => decreaseQuantity(cartIndex)}> - </button>
//                                             <span>{cartItem.quantity}</span>
//                                             <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => increaseQuantity(cartIndex)}> + </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <button className="btn btn-danger" onClick={() => removeItem(cartIndex)}>Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="col-md-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">Cart Summary</h5>
//                             <ul className="list-group list-group-flush">
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Quantity:
//                                     <span>{getTotalQuantity()}</span>
//                                 </li>
//                                 <li className="list-group-item d-flex justify-content-between align-items-center">
//                                     Total Price:
//                                     <span>Rs. {getTotalPrice()} /-</span>
//                                 </li>
//                             </ul>
//                             <button className="btn btn-primary mt-3">Checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartList;

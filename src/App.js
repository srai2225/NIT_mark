import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import Data from './Data/Data';
import Sidebar from "./Sidebar/Sidebar";
import Pay from './Pay/PaymentComponent';
import PaymentComponent from './Pay/PaymentComponent';
import AnimatedCursor from 'react-animated-cursor';
import Text from './components/Text/Text';
import Example from './Example';

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(cartFromLocalStorage); // Move cart initialization here
  const [showCart, setShowCart] = useState(false);

  //importing data of items
  const [product, setProduct] = useState(Data);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (data) => {
    const existingProduct = cart.find(item => item.name === data.name);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.name === data.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  }

  const handleShow = (value) => {
    setShowCart(value);
  }

  //filter
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const filteredProducts = product.filter((data) =>
    data.type.toLowerCase().includes(categoryFilter.toLowerCase()) &&
    (priceFilter === '' || data.price <= parseFloat(priceFilter))
  );

  return (
    <div>
      <div className='app'>
                <AnimatedCursor
                    innerSize={10}
                    outerSize={30}
                    color='255, 46, 99'
                    outerAlpha={0.4}
                    innerScale={0.6}
                    outerScale={0}
                />
      {/* <PaymentComponent></PaymentComponent> */}
      <Header count={cart.length} handleShow={handleShow} />
      {/* <Example/ > */}
      <Text/>
      {/* <Sidebar  /> */}
      {/*  */}
      {showCart ? <CartList cart={cart} /> : <ProductList product={product} addToCart={addToCart} />}
    </div>
    </div>
  );
}

export default App;










// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import CartList from './components/CartList';
// import { useState } from 'react';
// const cartFromLocalStorage=JSON.parse(LocalStorage.getItem('cart')) // '[]'

// function App() {

//   const [product,setProduct]=useState([
   
//     {
//       url: "https://m.media-amazon.com/images/I/51ECtYHLw6L._SX569_.jpg",
//       name: "L'Oreal Paris Moisture Filling Shampoo, With Hyaluronic Acid, For Dry & Dehydrated Hair, Adds Shine & Bounce, Hyaluron Moisture 72H, 180ml",
//       category: "Body Care",
//       seller: 'Garg',
//       price:186,
//     },
//     {
//       url: "https://m.media-amazon.com/images/I/51GkswX7rcL._SY450_.jpg",
//       name: "L'Oreal Paris Serum, Protection and Shine, For Dry, Flyaway & Frizzy Hair, With 6 Rare Flower Oils, Extraordinary Oil, 30ml",
//       category: "Body Care",
//       seller: 'Garg',
//       price:208,
//     },
//     {
//       url: "https://m.media-amazon.com/images/I/31KyrGnNl2L._SX300_SY300_QL70_FMwebp_.jpg",
//       name: "Streax Hair Serum Vitalized with Walnut Oil, For Hair Smoothening & Shine, For Dry & Frizzy Hair - 45 ml",
//       category: "Body Care",
//       seller: 'Garg',
//       price:117,
//     },
//     {
//       url: "https://m.media-amazon.com/images/I/713lta7IYXL._SX425_.jpg",
//       name: "MAGGI 2-minute Instant Noodles, Masala Noodles with Goodness of Iron, Made with Choicest Quality Spices, Favourite Masala Taste, 420g Pouch",
//       category: "Food",
//       seller: 'Garg',
//       price:70,
//     },
//     {
//       url: "https://m.media-amazon.com/images/I/81I65qJ46TL._AC_UL320_.jpg",
//       name: "Yippee! Magic Masala Instant Noodles With Real Vegetables",
//       category: "Food",
//       seller: 'Garg',
//       price:12,
//     },
//     {
//       url: "https://m.media-amazon.com/images/I/61wbLlB+00L._AC_UL320_.jpg",
//       name: "Ching's Just Soak Veg Hakka Noodles 140gm",
//       category: "Food",
//       seller: 'Garg',
//       price:28,
//     },
//     {
//       url: "https://m.media-amazon.com/images/I/7109H-5iZIL._AC_UL320_.jpg",
//       name: "Ching's Secret Schezwan Chutney, 600g",
//       category: "Food",
//       seller: 'Garg',
//       price:164,
//     },
//   ])

//   useEffect(() => {
//     LocalStorage.setItem("cart",JSON.stringify(cart));
//   }, [cart]);
//   const [cart, setCart] = useState([cartFromLocalStorage])
//   const [showCart, setShowCart] = useState(product)

//   // const addToCart = (data) => {
//   //   setCart([...cart, { ...data, quantity: 1 }])
//   // }

//   const addToCart = (data) => {
//     // Check if the product already exists in the cart
//     const existingProduct = cart.find(item => item.name === data.name);
//     if (existingProduct) {
//       // If the product exists, update its quantity
//       const updatedCart = cart.map(item =>
//         item.name === data.name ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       // If the product doesn't exist, add it to the cart
//       setCart([...cart, { ...data, quantity: 1 }]);
//     }
//   }
  

//   const handleShow = (value) => {
//     setShowCart(value)
//   }

//   return (
//     <div>
//       <Header count={cart.length}
//         handleShow={handleShow} ></Header>

//       {
//         showCart ?
//           <CartList cart={cart} ></CartList> :
//           <ProductList product={product} addToCart={addToCart} ></ProductList>
//       }


//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import './style.css';
// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import CartList from './components/CartList';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   const [product, setProduct] = useState([
//     {
//             url: "https://m.media-amazon.com/images/I/61wbLlB+00L._AC_UL320_.jpg",
//             name: "Ching's Just Soak Veg Hakka Noodles 140gm",
//             category: "Food",
//             seller: 'Garg',
//             price:28,
//           },
//           {
//             url: "https://m.media-amazon.com/images/I/7109H-5iZIL._AC_UL320_.jpg",
//             name: "Ching's Secret Schezwan Chutney, 600g",
//             category: "Food",
//             seller: 'Garg',
//             price:164,
//           },
//   ]);
// import './style.css';
//   useEffect(() => {
//     const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(cartFromLocalStorage);
//   }, []); // Empty dependency array to run this effect only once on component mount

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (data) => {
//     const existingProduct = cart.find(item => item.name === data.name);
//     if (existingProduct) {
//       const updatedCart = cart.map(item =>
//         item.name === data.name ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...data, quantity: 1 }]);
//     }
//   }

//   const handleShow = (value) => {
//     setShowCart(value);
//   }

//   return (
//     <div>
//       <Header count={cart.length} handleShow={handleShow} />
//       {showCart ? <CartList cart={cart} /> : <ProductList product={product} addToCart={addToCart} />}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import './style.css';
// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import CartList from './components/CartList';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [cartCount, setCartCount] = useState(0); // State to track cart count

//   const updateCartCountInHeader = (newCount) => {
//     setCartCount(newCount); // Function to update cart count
//   };

//   useEffect(() => {
//     const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(cartFromLocalStorage);
//     setCartCount(cartFromLocalStorage.reduce((total, item) => total + item.quantity, 0)); // Set initial cart count
//   }, []); // Empty dependency array to run this effect only once on component mount

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//     setCartCount(cart.reduce((total, item) => total + item.quantity, 0)); // Update cart count when cart changes
//   }, [cart]);

//   const addToCart = (data) => {
//     const existingProductIndex = cart.findIndex(item => item.name === data.name);
//     if (existingProductIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += 1;
//       setCart(updatedCart);
//       setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0)); // Update cart count
//     } else {
//       setCart([...cart, { ...data, quantity: 1 }]);
//       setCartCount(cartCount + 1); // Update cart count
//     }
//   };

//   const removeItemFromCart = (itemName) => {
//     const updatedCart = cart.filter(item => item.name !== itemName);
//     setCart(updatedCart);
//     setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0)); // Update cart count
//   };

//   const handleShow = (value) => {
//     // Add logic to show/hide cart
//   };

//   return (
//     <div>
//       <Header count={cartCount} handleShow={handleShow} />
//       {/* Render ProductList or CartList based on showCart state */}
//     </div>
//   );
// }

// export default App;

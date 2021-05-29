//rsc import './Shop.css';
import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    // fakeData
    console.log(fakeData);
    const first10Data = fakeData.slice(0, 10);

    const [products, setProducts] = useState(first10Data); // initial product assign kore dilam

    // State ta amra jekhane use korbo .. event handler tao shekhane use korbo .. ete onek shubidha hoy

    // Shopping Cart ta hocche ekta state .. state ashole user er action er upore change hoy ..
    const [cart, setCart] = useState(/**0*/ []);
    // initial cart e jehetu kichu thake na .. tai value hobe 0
    // ekhon 0 dilei hobe na .. karon cart er shonkha shudhu thakbe na .. product gulao thakte hobe
    // tai eta ke amra array dibo .. tader moddhe onek gula item/ elements add kora jabe

    // amader kaj hocche jokhon addToCart button e click kora hobe .. tokhon setCart dia .. jekono item, cart er moddhe set kora ..
    // eta korar jonno amader ke duita kaj korte hobe.. karon ei ta ekta array .. eita number na ..
    // newCart nam  e ekta array declare kore .. shetar moddhe ager cart er shob product and notun product tao add korte hobe
    // then .... setCart Function call kore .. tar moddhe newCart ke pass kore dite hobe ..

    const handleAddProduct = (product) => {
        //// (parameter e product likhar karon e ) Jei product ta click korsi shei product er information chole ashbe
        // arrow function
        console.log("product Added 🟢", product); // console e dekhabe kon product ta click kora hoise
        // jei button ta click korbo .. sheta kichu ei file e nai .. sheta ase 🔵🟣Product.js er moddhe
        // so shop theke product e amra pass korbo kivabe ? Product component jekhane call kora hoise .. tar shathe parameter akare pathate hobe

        const newCart = [...cart, product];
        setCart(newCart);

        // amader kaj hocche jokhon addToCart button e click kora hobe .. tokhon setCart dia .. jekono item, cart er moddhe set kora ..
        // eta korar jonno amader ke duita kaj korte hobe.. karon ei ta ekta array .. eita number na ..
        // newCart nam  e ekta array declare kore .. shetar moddhe ager cart er shob product and notun product tao add korte hobe
        // then .... setCart Function call kore .. tar moddhe newCart ke pass kore dite hobe ..
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {/* <h1>This is Shop</h1>
                <h3>Product Count {products.length}</h3> */}
                {/* <ul>
                    { //dynamic things starts here
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul> */}

                {
                    //dynamic things starts here
                    products.map((product) => (
                        <Product
                            product={product}
                            handleAddProduct={handleAddProduct}
                        ></Product>
                    ))
                }
            </div>
            <div className="cart-container">
                {/* <h5> Order Summery : {cart.length}</h5>
                cart.length er maddhome koyta product cart e ase .. sheta jana jabe  .. karon cart hocche ekta array */}

                <Cart cart={cart}></Cart>
                {/* cart ta Cart component er moddhe pass korte hobe
                 */}
            </div>
        </div>
    );
};

export default Shop;

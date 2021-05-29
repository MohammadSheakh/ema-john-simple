//rsc import './Shop.css';
import React, { useState } from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    console.log("🔴🟢", props);
    console.log(props.product); //props.product.name
    const { img, name, seller, price, stock, star, features } = props.product;

    const rating = []; // empty array
    for (let i = 0; i < star; i++) {
        rating.push(<FontAwesomeIcon icon={faStar} color="goldenRod" />);
    }
    // console.log("🚦🔴🟢", rating);

    return (
        <div className="product-details">
            {/* <h3> This is Products !</h3> */}
            <div className="product-image">
                {/* <img src={props.product.img} alt="" /> */}
                <img src={img} alt="" />
            </div>
            <div className="product-information">
                <h3 style={{ color: "green", fontWeight: "500" }}>{name}</h3>
                <div className="parent">
                    <div className="product-name">
                        {/* <h3>{props.product.name}</h3> */}
                        {/* <h4>by : {props.product.seller}</h4> */}

                        {/* <br /> */}
                        <p>
                            <small> by : {seller}</small>
                        </p>
                        <p>${price}</p>

                        <p>
                            <small>
                                {" "}
                                only {stock} is left in stock - order soon !
                            </small>
                        </p>
                        <button
                            className="addToCartBtn"
                            /* onClick={props.handleAddProduct} */
                            /* onClick={props.handleAddProduct(props.Product)}  // () .. eitar mane hocche amra function ta ke call kore feltesi ... jeta houwa uchit na ..*/
                            /** Tai amra function ta ke ekta arrow function er moddhe rakhbo .. jeno nije nije call na hoy  */
                            onClick={() =>
                                props.handleAddProduct(props.product)
                            }
                            // Next video te amra dekhbo .. eta ke amra kivabe cart e add korte pari
                        >
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="i"
                            />
                            Add to cart
                        </button>
                    </div>
                    <div className="product-rating">
                        {rating}
                        {/* array call hocche  */}
                        <h4>Features</h4>
                        <ul>
                            {features.map((feature) => (
                                <li>
                                    {feature.description} : {feature.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

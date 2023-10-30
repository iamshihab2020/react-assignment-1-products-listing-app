import React from "react"


const Product = (props) =>{
    const {id, cardTitle, cardPrice, cardDescription,cardRating, cardCategory, cardImage} = props

    return (
        <div className="card">
            <div className="pImage">
                <img src={cardImage} alt="" className="cardImage"/>
            </div>
            <div className="cardDetail">
                <h2 className="productTitle">{cardTitle}</h2>
                <p className="productPrice">Price: ${cardPrice}</p>
                <p className="productRating">{cardRating} / 5.0</p>
                <p className="productDescription">{cardDescription}</p>
                <button className="addto">Add to cart</button>
            </div>
        </div>
    )

}


export default Product
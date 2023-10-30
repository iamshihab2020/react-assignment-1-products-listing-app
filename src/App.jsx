import React from 'react';
import Product from './Components/Product'
import Products from './Data/Products'



const App = () => {
  return (
    <div className='allCard'>
      {
        Products.map((item) => <Product key={item.id} cardImage={item.image} cardTitle={item.title} cardPrice={item.price} cardRating={item.rating.rate} cardDescription={item.description}/>)
      }
    </div>
  );
};

export default App;


// 
import React from 'react';
import { Link } from 'react-router-dom';
const UpcomingProducts = () => {
  // Replace this with actual upcoming products data
  const upcomingProducts = [
    { id: 1, name: 'Realme C53', price: 15999, imageUrl: 'https://image01.realme.net/general/20230718/168965097130763a88d54f0d74e67983cc4cdd7d97ed5.png?width=1440&height=1440&size=477649.webp' },
    { id: 2, name: 'Realme Narzo 50', price: 17999, imageUrl: 'https://image01.realme.net/general/20230309/1678358993180.png' },
    { id: 3, name: 'Realme 10 Pro+', price: 27999, imageUrl: 'https://image01.realme.net/general/20221125/1669370271806.png' },
    { id: 4, name: 'Realme Smart Tv', price: 17999, imageUrl: 'https://image01.realme.net/general/20200630/1593487442773.jpg.webp' },
    { id: 5, name: 'Realme Smart Tv SLED', price: 37999, imageUrl: 'https://image01.realme.net/general/20200930/1601463930406.jpg.webp' },
    { id: 6, name: 'Realme Smart TV 4k', price: 27999, imageUrl: 'https://image01.realme.net/general/20230511/1683779510389.jpg?width=1080&height=1080&size=468380.webp' },
    { id: 7, name: 'Realme Smart Led bulb', price: 999, imageUrl: 'https://image01.realme.net/general/20210316/1615905316247.jpg' },
    { id: 8, name: 'Realme Smart Brush', price: 2999, imageUrl: 'https://image01.realme.net/general/20200902/1599034657062.jpg' },
    { id: 9, name: 'Realme Brick Bluetooth Speaker', price: 1999, imageUrl: 'https://image01.realme.net/general/20211011/1633932657542.png' },
  ];


  return (
    <div className="container">
      
      <div className="my-4">
        <Link to="/" className="btn btn-secondary me-2">
          <span className="arrow-left"></span> &lt; Home
        </Link>
        <Link to="/products" className="btn btn-secondary">
          <span className="arrow-left"></span>Products &gt;
        </Link>
      </div>
      <h2>Upcoming Products</h2>
      <div className="row">
        {upcomingProducts.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingProducts;

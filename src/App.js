import React, { useState } from "react";
import "./seed";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  function sortProductsByVotes(products) {
    return [...products].sort((a, b) => b.votes - a.votes);
  }
  const [products, setProducts] = useState(() => {
    const sortedProducts = sortProductsByVotes(window.Seed.products);
    return sortedProducts.length > 0 ? sortedProducts : [];
  });

  const handleVote = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, votes: product.votes + 1 };
      }
      return product;
    });

    const sortedProducts = sortProductsByVotes(updatedProducts);

    setProducts(sortedProducts);
  };

  if (products.length === 0) {
    return (
      <div className="container">
        <div className="header">
          <h1>Popular Products</h1>
        </div>
        <div className="cards">
          <p>No products found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Popular Products</h1>
      </div>
      <div className="cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

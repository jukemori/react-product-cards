import React, { useState } from "react";
import "./seed";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  // Function to sort products by votes in descending order
  function sortProductsByVotes(products) {
    return [...products].sort((a, b) => b.votes - a.votes);
  }

  // State to hold the products
  const [products, setProducts] = useState(() => {
    // Sort the initial products by votes
    const sortedProducts = sortProductsByVotes(window.Seed.products);
    // If there are sorted products, set them as the initial state, otherwise an empty array
    return sortedProducts.length > 0 ? sortedProducts : [];
  });

  // Function to handle the vote on a product
  const handleVote = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        // If the product ID matches, increment the votes
        return { ...product, votes: product.votes + 1 };
      }
      return product;
    });

    // Sort the updated products by votes
    const sortedProducts = sortProductsByVotes(updatedProducts);

    // Update the products state with the sorted products
    setProducts(sortedProducts);
  };

  // If there are no products, display a message
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

  // Render the list of products
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

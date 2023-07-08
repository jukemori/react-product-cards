import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

// This component represents a single product card in the application.
function ProductCard({ product, handleVote }) {
  return (
    <div className="product-card">
      <img
        className="product-img"
        src={product.productImageUrl}
        alt="Product"
      />
      <div className="product-info">
        {/* Vote Count */}
        <span className="vote-count">
          {/* Vote Button */}
          <FontAwesomeIcon
            icon={faCaretUp}
            className="vote-button"
            data-testid="vote-button"
            onClick={() => handleVote(product.id)}
          />
          {/* Vote Amount */}
          <p className="vote-amount" data-testid="vote-amount">
            {product.votes}
          </p>
        </span>
        {/* Product Title */}
        <span className="product-title" data-testid="product-title">
          <a href={product.url}>{product.title}</a>
        </span>
        {/* Product Description */}
        <div className="product-description" data-testid="product-description">
          {product.description}
        </div>
        {/* Submitter */}
        <div className="submitter">
          <p>Submitted by:</p>
          {/* Submitter Avatar */}
          <img
            className="avatar"
            src={product.submitterAvatarUrl}
            alt="Submitter Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

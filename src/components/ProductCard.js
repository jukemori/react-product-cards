import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

function ProductCard({ product, handleVote }) {
  return (
    <div className="product-card">
      <img
        className="product-img"
        src={product.productImageUrl}
        alt="Product"
      />
      <div className="product-info">
        <span className="vote-count">
          <FontAwesomeIcon
            icon={faCaretUp}
            className="vote-button"
            data-testid="vote-button"
            onClick={() => handleVote(product.id)}
          />
          <p className="vote-amount" data-testid="vote-amount">
            {product.votes}
          </p>
        </span>
        <span className="product-title" data-testid="product-title">
          <a href={product.url}>{product.title}</a>
        </span>
        <div className="product-description" data-testid="product-description">
          {product.description}
        </div>
        <div className="submitter">
          <p>Submitted by:</p>
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

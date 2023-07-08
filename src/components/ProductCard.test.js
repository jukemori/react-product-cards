import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  const product = {
    id: 1,
    productImageUrl: "https://example.com/image.jpg",
    votes: 10,
    title: "Sample Product",
    url: "https://example.com",
    description: "This is a sample product",
    submitterAvatarUrl: "https://example.com/avatar.jpg",
  };

  const handleVote = jest.fn();

  it("renders product details correctly", () => {
    render(<ProductCard product={product} handleVote={handleVote} />);

    const productImage = screen.getByAltText("Product");
    const voteButton = screen.getByTestId("vote-button");
    const voteAmount = screen.getByText("10");
    const productTitle = screen.getByText("Sample Product");
    const productDescription = screen.getByText("This is a sample product");
    const submitterAvatar = screen.getByAltText("Submitter Avatar");

    expect(productImage).toBeInTheDocument();
    expect(productImage.src).toBe("https://example.com/image.jpg");
    expect(voteButton).toBeInTheDocument();
    expect(voteAmount).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(submitterAvatar).toBeInTheDocument();
    expect(submitterAvatar.src).toBe("https://example.com/avatar.jpg");
  });

  it("calls handleVote when vote button is clicked", () => {
    render(<ProductCard product={product} handleVote={handleVote} />);

    const voteButton = screen.getByTestId("vote-button");
    fireEvent.click(voteButton);

    expect(handleVote).toHaveBeenCalledTimes(1);
    expect(handleVote).toHaveBeenCalledWith(1);
  });
});

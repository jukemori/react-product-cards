import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductList from "./ProductList";

describe("ProductList", () => {
  const seedProducts = [
    // Seed data for testing
    {
      id: 1,
      productImageUrl: "https://example.com/image1.jpg",
      votes: 10,
      title: "Product 1",
      url: "https://example.com/product1",
      description: "This is product 1",
      submitterAvatarUrl: "https://example.com/avatar1.jpg",
    },
    {
      id: 2,
      productImageUrl: "https://example.com/image2.jpg",
      votes: 5,
      title: "Product 2",
      url: "https://example.com/product2",
      description: "This is product 2",
      submitterAvatarUrl: "https://example.com/avatar2.jpg",
    },
  ];

  beforeEach(() => {
    // Mocking the Seed module
    Object.defineProperty(window, "Seed", {
      get: jest.fn().mockReturnValue({
        products: [...seedProducts],
      }),
    });
  });

  afterEach(() => {
    // Restoring the original implementation of Seed module
    jest.restoreAllMocks();
  });

  it("renders product cards correctly", () => {
    render(<ProductList />);

    // Get elements from the rendered ProductList component
    const productImages = screen.getAllByAltText("Product");
    const voteButtons = screen.getAllByTestId("vote-button");
    const voteAmounts = screen.getAllByTestId("vote-amount");
    const productTitles = screen.getAllByTestId("product-title");
    const productDescriptions = screen.getAllByTestId("product-description");
    const submitterAvatars = screen.getAllByAltText("Submitter Avatar");

    // Perform assertions to validate the rendered elements
    expect(productImages.length).toBe(2);
    expect(productImages[0].src).toBe("https://example.com/image1.jpg");
    expect(productImages[1].src).toBe("https://example.com/image2.jpg");

    expect(voteButtons.length).toBe(2);
    expect(voteAmounts.length).toBe(2);
    expect(voteAmounts[0].textContent.trim()).toBe("10");
    expect(voteAmounts[1].textContent.trim()).toBe("5");

    expect(productTitles.length).toBe(2);
    expect(productTitles[0].textContent.trim()).toBe("Product 1");
    expect(productTitles[1].textContent.trim()).toBe("Product 2");

    expect(productDescriptions.length).toBe(2);
    expect(productDescriptions[0].textContent.trim()).toBe("This is product 1");
    expect(productDescriptions[1].textContent.trim()).toBe("This is product 2");

    expect(submitterAvatars.length).toBe(2);
    expect(submitterAvatars[0].src).toBe("https://example.com/avatar1.jpg");
    expect(submitterAvatars[1].src).toBe("https://example.com/avatar2.jpg");
  });

  it("increments votes when vote button is clicked", () => {
    render(<ProductList />);

    // Get vote buttons and vote amounts
    const voteButtons = screen.getAllByTestId("vote-button");
    const voteAmounts = screen.getAllByTestId("vote-amount");

    // Simulate click events on vote buttons
    fireEvent.click(voteButtons[0]);
    fireEvent.click(voteButtons[1]);

    // Perform assertions to check if vote amounts are updated
    expect(voteAmounts[0].textContent.trim()).toBe("11");
    expect(voteAmounts[1].textContent.trim()).toBe("6");
  });

  it("renders 'No products found' message when there are no products", () => {
    // Clear products by mocking the Seed module to return an empty array
    jest.spyOn(window, "Seed", "get").mockImplementation(() => ({
      get products() {
        return [];
      },
    }));

    render(<ProductList />);

    // Get the "No products found" message
    const noProductsMessage = screen.getByText("No products found");

    // Perform assertion to check if the message is rendered
    expect(noProductsMessage).toBeInTheDocument();
  });
});

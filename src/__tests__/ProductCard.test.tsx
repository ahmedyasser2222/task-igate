import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/ProductCard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  thumbnail: "/test.jpg",
  description: "This is a test product",
  category: "smartphones",
  rating: 4.5,
  tags: ["tag1", "tag2"],
  brand: "TestBrand",
};

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Test Product"
    );
    expect(screen.getByText("$99.99")).toBeInTheDocument();
    expect(screen.getByText(/Category:/i)).toHaveTextContent("smartphones");
    expect(screen.getByText(/Brand:/i)).toHaveTextContent("TestBrand");
    expect(screen.getByText(/Rating:/i)).toHaveTextContent("⭐ 4.5");
    expect(screen.getByText(/This is a test product/)).toBeInTheDocument();
    expect(screen.getAllByText(/^#tag/)).toHaveLength(2);
  });
});

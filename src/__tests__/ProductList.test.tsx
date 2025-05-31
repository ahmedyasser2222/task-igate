import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "@/components/ProductList";

const mockProductsPage1 = {
  products: [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      thumbnail: "/img1.jpg",
      description: "Desc 1",
      category: "smartphones",
      rating: 4,
      tags: [],
      brand: "Brand1",
    },
  ],
  total: 2,
};

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementation((url) => {
    if (typeof url === "string" && url.includes("/products?")) {
      return Promise.resolve({
        json: () => Promise.resolve(mockProductsPage1),
      } as Response);
    }
    if (
      typeof url === "string" &&
      url.includes("/products/category/smartphones")
    ) {
      return Promise.resolve({
        json: () => Promise.resolve(mockProductsPage1),
      } as Response);
    }
    return Promise.reject("Unknown URL");
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("ProductList", () => {
  it("fetches and displays products on load", async () => {
    render(<ProductList />);

    await waitFor(() =>
      expect(screen.getByText("Product 1")).toBeInTheDocument()
    );
  });

  it("updates products when category changes", async () => {
    render(<ProductList />);

    // Wait for categories to load
    await waitFor(() =>
      expect(screen.getByLabelText(/Filter by Category/i)).toBeInTheDocument()
    );

    // Change category select
    userEvent.selectOptions(screen.getByLabelText(/Filter by Category/i), [
      "smartphones",
    ]);

    // Wait for product list update
    await waitFor(() =>
      expect(screen.getByText("Product 1")).toBeInTheDocument()
    );
  });
});

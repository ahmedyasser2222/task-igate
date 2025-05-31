import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Filters from "@/components/Filters";

const mockCategories = [
  { slug: "smartphones", name: "Smartphones", url: "/smartphones" },
  { slug: "beauty", name: "Beauty", url: "/beauty" },
];

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockCategories),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("Filters", () => {
  it("fetches and displays categories", async () => {
    const setSelectedCategory = jest.fn();

    render(
      <Filters selectedCategory="" setSelectedCategory={setSelectedCategory} />
    );

    await waitFor(() => {
      expect(screen.getByText("Smartphones")).toBeInTheDocument();
      expect(screen.getByText("Beauty")).toBeInTheDocument();
    });
  });

  it("calls setSelectedCategory on change", async () => {
    const setSelectedCategory = jest.fn();

    render(
      <Filters selectedCategory="" setSelectedCategory={setSelectedCategory} />
    );

    await waitFor(() => screen.getByText("Smartphones"));

    fireEvent.change(screen.getByLabelText(/Filter by Category/i), {
      target: { value: "Beauty" },
    });

    expect(setSelectedCategory).toHaveBeenCalledWith("Beauty");
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "@/components/Pagination";

describe("Pagination", () => {
  it("renders pagination and calls setPage on click", async () => {
    const setPage = jest.fn();
    render(<Pagination totalPages={5} page={0} setPage={setPage} />);

    const nextButton = screen.getByText("Next ›");
    await userEvent.click(nextButton);

    expect(setPage).toHaveBeenCalledWith(1);
  });
});

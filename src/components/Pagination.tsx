"use client";

import ReactPaginate from "react-paginate";

type PaginationProps = {
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  totalPages,
  page,
  setPage,
}: PaginationProps) {
  const handlePageClick = (data: { selected: number }) => {
    setPage(data.selected);
  };

  return (
    <div className="flex justify-center mt-6">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next ›"
        previousLabel="‹ Prev"
        onPageChange={handlePageClick}
        forcePage={page}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        containerClassName="flex gap-2"
        pageClassName="border rounded px-3 py-1 cursor-pointer hover:bg-gray-100 transition"
        activeClassName="bg-blue-500 text-white font-semibold"
        previousClassName="border rounded px-3 py-1 cursor-pointer hover:bg-gray-100 transition"
        nextClassName="border rounded px-3 py-1 cursor-pointer hover:bg-gray-100 transition"
        breakClassName="px-3 py-1"
        disabledClassName="opacity-50 pointer-events-none"
      />
    </div>
  );
}

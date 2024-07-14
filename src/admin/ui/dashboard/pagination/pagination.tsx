import React from "react";

interface PaginationProps {
  count: number;
  currentPage: number;
  onPageChange: (type: "prev" | "next") => void;
}

const Pagination: React.FC<PaginationProps> = ({
  count,
  currentPage,
  onPageChange,
}) => {
  const ITEM_PER_PAGE = 5;
  const hasPrev = ITEM_PER_PAGE * (currentPage - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (currentPage - 1) + ITEM_PER_PAGE < count;

  return (
    <div className="p-4 flex justify-between">
      <button
        className="py-2 px-4 cursor-pointer disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => onPageChange("prev")}
      >
        Previous
      </button>
      <button
        className="py-2 px-4 cursor-pointer disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => onPageChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

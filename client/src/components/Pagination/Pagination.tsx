import React from 'react';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={handlePrevious}>
      {'<'}
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button disabled={currentPage * itemsPerPage >= totalItems} onClick={handleNext}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;

import "./pagination.css";
import PropTypes from "prop-types";

const Pagination = ({
  onPageChange,
  pageSizeOptions,
  totalRecord,
  currentPage,
  setCurrentPage,
  handlePerPageChange,
  perPage,
}) => {
  const handlePageSizeChange = (e) => {
    const newSize = Math.min(Math.max(parseInt(e.target.value), 5), 10);
    handlePerPageChange(newSize);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    onPageChange(nextPage, perPage);
  };

  const handlePrevPage = () => {
    const prevPage = currentPage - 1;
    onPageChange(prevPage, perPage);
  };

  const lastPage = Math.ceil(totalRecord / perPage);

  return (
    <div className="pagination-container">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <select value={perPage} onChange={handlePageSizeChange}>
        {pageSizeOptions.map((size) => (
          <option key={size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
      <button onClick={handleNextPage} disabled={currentPage >= lastPage}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalRecord: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  handlePerPageChange: PropTypes.func.isRequired,
  perPage: PropTypes.number.isRequired,
};

export default Pagination;

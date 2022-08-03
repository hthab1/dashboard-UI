import React, { useEffect, useState } from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";



function Pagination({ itemsPerPage, items, setCurrentItems, onPageChange }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    onPageChange()
  };

  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <div className="paginationButtonContent">
            Next
            <div className="paginationButtonContentIcon">
              <AiOutlineDoubleRight />
            </div>
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <div className="paginationButtonContent">
            <div className="paginationButtonContentIcon">
              <AiOutlineDoubleLeft />
            </div>
            Previous
          </div>
        }
        renderOnZeroPageCount={null}
        className="paginationPages"
        breakClassName="paginationBreak"
        previousClassName="paginationPrevious"
        previousLinkClassName="paginationButtonTag"
        nextLinkClassName="paginationButtonTag"
        nextClassName="paginationNext"
        disabledClassName="paginationButtonDisabled"
        pageClassName="paginationPage"
        containerClassName="paginationPagesContainer"
        activeClassName="paginationActivePage"
      />
    </div>
  );
}

export default Pagination;

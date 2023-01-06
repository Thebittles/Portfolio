import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from "react";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {

  /* Pagination comp responsive */
  const [width, setWidth] = useState(window.innerWidth) // returns the  interior width of window in pixels

  // Function to update the width 
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  // listen to resize event run & update dimensions
  useEffect(() => {
    //listens for resize sets with
    window.addEventListener("resize", updateDimensions);
    // returns callback the removes the listener
    return () => window.removeEventListener("resize", updateDimensions);

  }, []);




  /* Function to handle page change */
  let pageChange = (data) => {
    //console.log("data selected", data.selected)
    updatePageNumber(data.selected + 1);
  }


  return (
    <>
      <style jsx>
        {`
      a {
        color: white; text-decoration: none;
      }
      @media (max-width: 768px) {
        .pagination {font-size: 12px}
    
        .next,
        .prev {display: none}
      }
      @media (max-width: 768px) {
        .pagination {font-size: 14px}
      }
    `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary fs-5 prev"
        nextClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        /* ^^ Styling */
        /* vv function */
        forcePage={pageNumber === 1 ? 0: pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2 }
        pageRangeDisplayed={width < 576 ? 1 : 2 }
        pageCount={info?.pages}
        onPageChange={pageChange}
         //...other props here
      />

    </>
  );
}

export default Pagination;
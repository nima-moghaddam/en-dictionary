import "./Pagination.scss";
import { useState, useEffect } from "react";

const Pagination = ({
  dataPerPage,
  data,
  getAllWordsPerPage,
  totalData,
}) => {
  let pageNumbers = [];
  const [wordPerPage, setWordPerPage] = useState(dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastWord = currentPage * wordPerPage;
  const indexOfFirstWord = indexOfLastWord - wordPerPage;
  const currentWords = data.slice(indexOfFirstWord, indexOfLastWord);

  for (let i = 1; i <= Math.ceil(totalData / wordPerPage); i++) {
    pageNumbers.push(i);
  }

  const goNextPage = () => {
    // if (currentPage <= totalData / wordPerPage) { 
    //   setCurrentPage((currentPage) => currentPage + 1);
    // }
    if (currentPage < 10) { //
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  useEffect(() => {
    getAllWordsPerPage(currentWords);

    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className='pagination'>
      <button className="pagination__nav-btn" onClick={goPrevPage}>
        prev
      </button>
      <ul className="pagination__list">
        {pageNumbers.map((num, index) =>
            num < 10 && (
              <li
                onClick={() => { setCurrentPage(num); console.log(currentPage);}}
                className="pagination__list-btn"
                key={index}
              >
                {num}
              </li>
            )
        )}
      </ul>
      <button className="pagination__nav-btn" onClick={goNextPage}>
        next
      </button>
    </div>
  );
};

export default Pagination;

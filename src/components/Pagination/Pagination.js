import "./Pagination.scss";
import { useState, useEffect } from "react";

const Pagination = ({
  dataPerPage,
  data,
  getAllWordsPerPage,
  totalData,
}) => {
  let pageNumArray = [];
  const [wordPerPage, setWordPerPage] = useState(dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])


  const indexOfLastWord = currentPage * wordPerPage;
  const indexOfFirstWord = indexOfLastWord - wordPerPage;
  const currentWords = data.slice(indexOfFirstWord, indexOfLastWord);
  const totalPage = Math.ceil(totalData / wordPerPage)

  for (let i = 1; i <= totalPage; i++) {
    pageNumArray.push(i);
  }


  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons]

    let dotsInitial = '...'
    let dotsLeft = '... '
    let dotsRight = ' ...'

    if (pageNumArray.length < 6) {
      tempNumberOfPages = pageNumArray
    }

    else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumArray.length]
    }

    else if (currentPage === 4) {
      const sliced = pageNumArray.slice(0, 5)
      tempNumberOfPages = [...sliced, dotsInitial, pageNumArray.length]
    }

    else if (currentPage > 4 && currentPage < pageNumArray.length - 2) {              
      const sliced1 = pageNumArray.slice(currentPage - 2, currentPage)                 
      const sliced2 = pageNumArray.slice(currentPage, currentPage + 1)                
      tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumArray.length]) 
    }
    
    else if (currentPage > pageNumArray.length - 3) {                
      const sliced = pageNumArray.slice(pageNumArray.length - 4)       
      tempNumberOfPages = ([1, dotsLeft, ...sliced])                        
    }

    setArrOfCurrButtons(tempNumberOfPages)
    setCurrentPage(currentPage)
    getAllWordsPerPage(currentWords);
  }, [currentPage]);

  return (
    <div className='pagination'>
      <button className="pagination__next-btn" onClick={()=>{setCurrentPage(prev => prev <= 1 ? prev : prev - 1)}}>
        prev
      </button>
      <ul className="pagination__nav">
        {arrOfCurrButtons.map((num, index) =>
             (
              <li
                onClick={() => {num !== ('...' || '... ' || ' ...') && setCurrentPage(num)}}
                className={`pagination__nav-btn ${num === currentPage ? 'active' : ''}`}
                key={index}
              >
                {num}
              </li>
            )
        )}
      </ul>
      <button className="pagination__prev-btn" onClick={()=>{setCurrentPage(next => next >= pageNumArray.length  ? next : next + 1)}}>
        next
      </button>
    </div>
  );
};

export default Pagination;

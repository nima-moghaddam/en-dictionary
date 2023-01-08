import { useState, useContext } from "react";
import Card from "../../../Ui/Card/Card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "../../../data/data";
import Pagination from "./../../Pagination/Pagination";
import './../../../assets/images/search.svg'
import "./Home.scss";
import SearchSvg from './../../../Ui/Icons/SearchSvg';
import { ThemeContext } from './../../../context/ThemeContext';
import Button from './../../../Ui/Button/Button';
import avatar from './../../../assets/images/undraw.svg'

function hasNumbers(t) {
  return /\d/.test(t);
}

const modifiedData = data.filter(word => 
  !hasNumbers(word)
)

const Home = () => {
  const [search, setSearch] = useState('')
  const [words, setWords] = useState([])
  const [filteredWords, setFilteredWords] = useState([])

  const { theme } = useContext(ThemeContext)
  
  
  const getAllWordsPerPage = (currentWords) => {
    setWords(currentWords)
    setSearch('')
  };

  const filterResults = () => {
    const results = modifiedData.filter(word => word.toLocaleLowerCase().includes(search.toLowerCase()))
    setFilteredWords(results)
  };


  return (
    <div className="home-container">

      <div className="home-container__search">
        <input
          onChange={(e)=>{setSearch(e.target.value)}}
          value={search}
          className="home-container__search-input"
          type='search'
          placeholder="Search your word ..."
        />
        <span className="home-container__search-icon">
          <SearchSvg color={theme === 'light' ? '#86827f' : '#fffbf5'} />
        </span>
        <div>
          <Button name={'Search'} classes={'home-container__search-btn'} onClickHandler={filterResults} />
          <Button name={'Reset'} classes={'home-container__search-btn reset'} onClickHandler={()=>{setSearch('')}} />
        </div>
      </div>
      <div className="home-container__content">
        <div className="home-container__content-words">
          {(search === '' ?  words : filteredWords).map((item, index) => (
              <Link to={item} key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{
                      ease: "linear",
                      duration: 0.3,
                    }}
                  >
                    <Card classes={"home-container__content-words-card"}>{item}</Card>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
        </div>
        <div className="home-container__content-img">
          <img src={avatar} />
        </div>
      </div>
      
        
        <Pagination
          data={modifiedData}
          dataPerPage={6}
          totalData={modifiedData.length}
          getAllWordsPerPage={getAllWordsPerPage}
        />
    </div>
  );
};

export default Home;

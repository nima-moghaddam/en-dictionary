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

const Home = () => {
  const [words, setWords] = useState();
  const [searchValue, setSearchValue] = useState('');

  const {theme} = useContext(ThemeContext)

  const getAllWordsPerPage = (currentWords) => {
    setWords(currentWords);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
    console.log(searchValue);
  };

  return (
    <div className="home-container">
      <div className="home-container__search">
        <input
          onChange={handleSearchChange}
          value={searchValue}
          className="home-container__search-input"
          type='search'
          placeholder="Search your word ..."
        />
        <span className="home-container__search-icon">
          <SearchSvg color={theme === 'light' ? '#86827f' : '#fffbf5'} />
        </span>
      </div>

      <div>
        {words?.map((item, index) => (
          <Link to={item}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // transition={{
              //   ease: "easeOut",
              //   duration: index === 0 ? 1.5 : index / index + 0.3,
              // }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{
                  ease: "linear",
                  duration: 0.4,
                }}
              >
                <Card classes={"home-container__card"}>{item}</Card>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div>
        <Pagination
          data={data}
          dataPerPage={5}
          totalData={data.length}
          getAllWordsPerPage={getAllWordsPerPage}
        />
      </div>
    </div>
  );
};

export default Home;

import { useState } from "react";
import Card from "../../../Ui/Card/Card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { data } from "../../../data/data";
import Pagination from "./../../Pagination/Pagination";
import "./Home.scss";

const Home = () => {
  const [words, setWords] = useState();

  const getAllWordsPerPage = (currentWords) => {
    setWords(currentWords);
  };

  return (
    <div className="home-container">
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
          dataPerPage={6}
          totalData={data.length}
          getAllWordsPerPage={getAllWordsPerPage}
        />
      </div>
    </div>
  );
};

export default Home;

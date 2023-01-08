import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import Card from "./../../../Ui/Card/Card";
import Button from "./../../../Ui/Button/Button";
import FadeLoader from "react-spinners/FadeLoader";
import { motion } from "framer-motion";

import './Definition.scss'

const Definition = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { word } = useParams();
  const navigate = useNavigate()
  console.log(data);


  useEffect(() => {
    setLoading(true)

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setData(res.data);
        setLoading(false)
      });
    
  }, []);

  return (
    <Card classes={'definition-container'}>
      <FadeLoader
        loading={loading}
        color={'#2a65b6'}
        className={'definition-container__loading'}
        size={50}
      />
      {!loading &&
        <>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="definition-container__word-list">
          {data.map((item, index) =>
              <div key={index} className="definition-container__word-list-item">
                <h1 className="definition-container__word-list-item--header">{item.word}</h1>
                <div className="definition-container__word-list-item--speech">
                  <span>{item.meanings[0].partOfSpeech}</span>
                  <span>{item.phonetic}</span>
                </div>
                <div className="definition-container__word-list-item--meaning">
                  <h3>meaning :</h3>
                  <div>
                    <p>{item.meanings[0].definitions[0].definition}</p>
                  </div>
                {item.meanings[0].synonyms.length !== 0 &&
                  <>
                    <h3>synonyms :</h3>
                    <div>
                      {item.meanings[0].synonyms.map((i, index) =>
                        index <= 5 && <span>{i}{index !== 5 && ', '}</span>
                      )}
                    </div>
                  </>
                }
                {item.meanings[0].antonyms.length !== 0 &&
                  <>
                    <h3>antonyms :</h3>
                    <div>
                      {item.meanings[0].antonyms.map((i, index) =>
                        index <= 5 && <span>{i}{index !== 5 && ', '}</span>
                      )}
                    </div>
                  </>
                }
                </div>
                {data.length !== 1 && index < (data.length - 1) && <hr/>}
              </div>
            )}
          </motion.div>
          <div className="definition-container__back-btn">
            <Button name={"Back"} onClickHandler={() => {navigate(-1)}} />
          </div>
        </>
      }
    </Card>
  );
};

export default Definition;

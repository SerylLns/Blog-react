import './Home.css';

import React, { useEffect } from 'react';
import Card from '../../Components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../redux/articles/articleReducer';
import { v4 as uuidv4 } from 'uuid';
const Home = () => {
  const { articles } = useSelector( state => ({
    ...state.articleReducer
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles())
    }
  }, [])
  
  return (
    <>
      <h1 className="home-title">Tous les articles</h1>
      <div className="container-cards">
        {articles.map(article => {
          return (
            <Card key={uuidv4()}>
              <h2>{article.title}</h2>
              <a href="#">Lire l'article</a>
            </Card>
          ) 
        })

        }
      </div>
    </>
  );
};

export default Home;
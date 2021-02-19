import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function getArticles() {
      try {
        let response = await axios.get('/api/articles');
        setArticles(response.data)
      } catch(error) {
        console.log("error", error)
      }
    }
    getArticles()
  }, [])

  return (
    <div>
      <h2>
        Composant Article List
        <button>
        <Link to="/articles/new">Create Article</Link>
        </button> 
      </h2>
      {articles.map((article) => {
        return (
          <div key={article._id}>
             <h2><Link to={`/articles/${article._id}`}>{article.title}</Link></h2>         
              <p>{article._id}</p>
              <p>{article.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ArticleList


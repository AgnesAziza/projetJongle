import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";

const ArticleInfo = () => {
  const history = useHistory()
  const [article, setArticle] = useState({}|undefined)
  const { _id } = useParams();

  useEffect(() => {
    async function getArticle() {
      try {
        let response = await axios.get(`/api/articles/${_id}`)
        setArticle(response.data)
      } catch(error) {
        console.log("error", error)
      }
    }
    getArticle()
  }, []);

    async function handledelete() {
      try {
        await axios.delete(`/api/articles/${_id}`);
        history.push("/articles")
      } catch(error) {
        console.error(error)
      }
    }

  return (
    <div>
     <p>"titre" {article.title}</p>
     <p>"content" {article.content}</p>
     <button onClick={handledelete}>
      Effacer
     </button>
     <button>
     <Link to={`/articles/${article._id}/edit`}>Editer</Link>
     </button>
     <button>
     <Link to={`/articles`}>Close</Link>
     </button>
     
    </div>
  )
}

export default ArticleInfo
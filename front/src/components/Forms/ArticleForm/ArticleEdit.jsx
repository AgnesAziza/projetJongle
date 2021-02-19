import React, { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory} from 'react-router-dom'

const ArticleEdit = () => {
  const history = useHistory()
  const initialState = {title: '', content: ''}
  const [article, setArticle] = useState(initialState)
  const {_id } = useParams()

useEffect(() => {
  async function getArticle() {
    try {
      let response = await axios.get(`/api/articles/${_id}`)
      setArticle(response.data)
    } catch(error) {
      console.error("error", error)
    }
  }
  getArticle()
}, []);

const handleSubmit = (event) => {
  event.preventDefault();
  async function updateArticle() {
    try {
      await axios.patch(`/api/articles/${article._id}`, article)
      history.push(`/articles/${article._id}`)
    } catch(error) {
      console.error('error', error)
    }
  }
  updateArticle()
};

const handleChange = (event) => {
  setArticle({...article, [event.target.name]: event.target.value})
}

  return (
    <div>
      <p>composant article edit {article.title}</p>
      {console.log(article, "article")}
      <p>"titre" page Edit: {article.title}</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label>
            <input type="text" value={article.title} name="title" onChange={handleChange}></input>
          </label>
          <label>
            <input type="text" value={article.content} name="content" onChange={handleChange}></input>
          </label>
          <button type="submit">Valider</button>
        </fieldset>
      </form>

    </div>


    
  )
}

export default ArticleEdit
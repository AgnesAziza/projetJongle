import React, {useState, useEffect} from 'react';
import {post} from 'axios';
import { useHistory, Link } from "react-router-dom";

const ArticleAdd = () => {
  const initialState = {title: '', content:''}
  const [article, setArticle] = useState(initialState)
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!article.title || !article.content) return 
      async function postArticle() {
        try {
          const response = await post('/api/articles', article);
          console.log(response.data)
          history.push(`/articles/${response.data._id}`)
        } catch(error) {
          console.error('error', error)
        }
      } 
      postArticle()
  }

  const handleInputFormChange = (event) => {
    setArticle({...article, [event.target.name]: event.target.value})
  }

  const handleCancel = () => {
    history.push('/articles')
  }

  return (
    <div>
    <p>composant article add</p>
    <form onSubmit={(e) => handleSubmit(e)}>
      <fieldset>
        <label>
          <input type="text" value={article.title} name="title" onChange={handleInputFormChange}></input>
        </label>
        <label>
          <input type="text" value={article.content} name="content" onChange={handleInputFormChange}></input>
        </label>
        <button type="submit">Valider</button>
        <button type="button" onClick={handleCancel}>Annuler</button>
      </fieldset>
    </form>
    </div>
  )
}

export default ArticleAdd
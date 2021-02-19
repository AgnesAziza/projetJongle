import React, { useState } from 'react';
import './Form.css';

//TODO faire un page de contact qui nous envoie un mail directement
const ContactForm = () => {
  const [form, setForm] = useState({
    name:'', 
    message:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, "form")
 }

 const handleInputFormChange = (e) => setForm({
   ...form, 
   [e.target.name]: e.target.value
 })

  return (
    <div className="wrapperForm">    
    <p>Faire une page de contact qui nous envoie un mail directement</p>  
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label>Prénom
          <input type="text" value={form.name} name="name" onChange={handleInputFormChange}></input></label>
          <label>Message
          <input type="text" value={form.message} name="message" onChange={handleInputFormChange}></input></label>
          <button type="submit">Valider</button>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm

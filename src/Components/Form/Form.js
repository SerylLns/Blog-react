import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import './Form.css'

const Form = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleContent = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      content: content
    }
    dispatch({
      type: "ADDARTICLES",
      payload: newArticle
    })
    setTitle("");
    setContent("");
  }
  return (
    <form className="formulaire" onSubmit={handleSubmit}>
      <div className="title">
        <label htmlFor="title">Titre</label>
        <input type="text" onInput={handleTitle} name="title" value={title} />
      </div>
      <div className="content">
        <label htmlFor="content">Contenu</label>
        <textarea name="content" onInput={handleContent} value={content} cols="20" rows="7"></textarea>
      </div>
      <input type="submit" className="btn-form" value="Envoyer"/>
    </form>
  );
};

export default Form;
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h1>Cette page n'existe pas</h1>
      <Link to='/'>
        Retouner à l'acceuil
      </Link>
    </div>
  )
}

export default PageNotFound
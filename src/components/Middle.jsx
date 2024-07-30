import React from 'react'
import groceries from '../img/groceries.jpeg';

const Middle = () => {
  return (
    <div class = 'mid-banner'>
        <div class = 'mid-text'>
            <h1>Lorem, ipsum.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa cumque quod dicta nulla doloremque repudiandae iusto alias eaque molestiae deserunt?</p>
            <button>VIEW MORE</button>
        </div>
        <div class = 'mid-img'>
            <img src = {groceries} />
        </div>
    </div>
  )
}

export default Middle
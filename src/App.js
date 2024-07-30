import React from 'react'
import Item from './components/Item'
import Cart from './components/Cart'
import apple from './img/apple.jpg'
import banana from './img/Banana.webp'
import Strawberry from './img/Strawberry5.jpg'
import lemon from './img/lemon3.jpg'
import Onion from './img/Onion.jpg'
import orange from './img/orange3.png'
import tomato from './img/tomato.png'
import capsicum from './img/capsicum.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const App = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <>
    <h1 class = 'home-header'> Best Sellers</h1>
    
    <div className = 'cards'>
    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3500}>
      <Item img = {apple} name= 'Apple' price={2.5}/>
      <Item img = {banana} name= 'Banana' price={1}/>
      <Item img = {Strawberry} name= 'Strawberry' price={3}/>
      <Item img = {lemon} name= 'Lemon' price={1.5}/>
      <Item img = {Onion} name= 'Onion' price={2}/>
      <Item img = {orange} name= 'Orange' price={2}/>
      <Item img = {tomato} name= 'Tomato' price={1.5}/>
      <Item img = {capsicum} name= 'Capsicum' price={2}/>
      </Carousel>
    </div>
    
    <Cart />
    </>
  )
}

export default App
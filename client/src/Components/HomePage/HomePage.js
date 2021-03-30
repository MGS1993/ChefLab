import React, { useEffect } from 'react';
// import styles from './HomePage.module.css';
import Header from '../UI/Header/Header';

const HomePage = () => {
  const apiKey = '21b6ee32984f4b08a19a9a643d0edbce';
  useEffect(() => {
    async function getMeal() {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=${apiKey}`)
        const data = await response.json();
        console.log(data)
      } catch(err) {
        console.log(err)
      }
    }
    getMeal()
  }, [])

  return(
    <div>
      <Header />
      
    </div>
  )
}


export default HomePage
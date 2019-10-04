import React from 'react';
import './App.css';


import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Categories from './components/Categories/Categories';
import Carousel from './components/Carousel/Carousel';
import CarouselItem from './components/CarouselItem/CarouselItem';
import Footer from './components/Footer/Footer';

import useInitialState from './hooks/useInitialState';
const API = 'http://localhost:3000/initialState';

function App() {
  
  const InitialState = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />

      {
        InitialState.mylist.length > 0 ? 
        <Categories title={"Mi Lista"}>
          <Carousel>
            {InitialState.mylist.map( ( item ) => {
              return(
                <CarouselItem key={item.id} {...item}/>
              )
            } )}
          </Carousel>
        </Categories>
         : ''
      }

      <Categories title={"Tendencias"}>
        <Carousel>
          {
            InitialState.trends.map( (item) => {
              return(
                <CarouselItem  key={item.id} {...item}/>
              )})
          }
        </Carousel>
      </Categories>

      <Categories title={"Originales de Platzi Video"} >
        <Carousel>
        {
            InitialState.originals.map( (item) => {
              return(
                <CarouselItem  key={item.id} {...item}/>
              )})
          }
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
}

export default App;

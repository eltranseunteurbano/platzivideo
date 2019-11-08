import React from 'react';
import { connect } from 'react-redux';
import './Home.css';

import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';
import Carousel from '../../components/Carousel/Carousel';
import CarouselItem from '../../components/CarouselItem/CarouselItem';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />

      {
        myList.length > 0 ? 
        <Categories title={"Mi Lista"}>
          <Carousel>
            {myList.map( ( item ) => {
              return(
                <CarouselItem key={item.id} {...item} isList={false}/>
              )
            } )}
          </Carousel>
        </Categories>
         : ''
      }

      <Categories title={"Tendencias"}>
        <Carousel>
          {
            trends.map( (item) => {
              return(
                <CarouselItem  key={item.id} {...item} isList={true}/>
              )})
          }
        </Carousel>
      </Categories>

      <Categories title={"Originales de Platzi Video"} >
        <Carousel>
        {
            originals.map( (item) => {
              return(
                <CarouselItem  key={item.id} {...item} isList={true}/>
              )})
          }
        </Carousel>
      </Categories>
    </>
  );
}

const mapSateToProps = state => (
  {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
);
export default connect(mapSateToProps, null)(Home);

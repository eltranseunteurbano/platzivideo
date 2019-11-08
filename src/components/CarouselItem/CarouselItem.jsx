import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../redux/actions/index';
import PropTypes from 'prop-types';
import './CarouselItem.css';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleAddFavorite = () => {
    console.log("Agregado");
    props.addFavorite({
      id, cover, title, year, contentRating, duration
    });
  }

  const handleDeleteFavorite = (itemId) => {
    console.log("Eliminado");
    props.deleteFavorite(itemId);
  }

    return(
        <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
            <Link to={`/player/${id}`}>
              <img className="carousel-item__details--img" src={process.env.PUBLIC_URL + './play-icon.png'} alt="Play Icon"/> 
            </Link>
            {isList ? 
            <img className="carousel-item__details--img" src={process.env.PUBLIC_URL + './plus-icon.png'} alt="Plus Icon" onClick={ handleAddFavorite }/>
            :
            <img className="carousel-item__details--img" src={process.env.PUBLIC_URL + './user-icon.png'} alt="Plus Icon" onClick= { () => handleDeleteFavorite(id)}/> 
          }
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{year} {contentRating} {duration} minutos</p>
        </div>
      </div>
    )
}

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapStateToProps = null;
const mapDispatchToProps = {
  addFavorite,
  deleteFavorite,
}
export default connect(mapStateToProps, mapDispatchToProps) (CarouselItem);